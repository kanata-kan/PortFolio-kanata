import { NextResponse } from 'next/server';
import prisma from '../../../lib/db';
import { verifyToken } from '../../../lib/verifyToken';

// Get a single project by ID
export async function GET(request, { params }) {
  try {
    const projectId = parseInt(params.id);

    if (isNaN(projectId)) {
      return NextResponse.json(
        { message: 'Invalid project ID' },
        { status: 400 },
      );
    }

    const project = await prisma.project.findUnique({
      where: {
        id: projectId,
      },
    });

    if (!project) {
      return NextResponse.json(
        { message: 'Project not found' },
        { status: 404 },
      );
    }

    return NextResponse.json({ project }, { status: 200 });
  } catch (error) {
    console.error('Internal server error:', error);
    return NextResponse.json(
      { message: 'Internal server error', error: error.message },
      { status: 500 },
    );
  }
}

// Update a project by ID
export async function PUT(request) {
  try {
    const { decodedToken } = verifyToken(request);
    if (!decodedToken) {
      return NextResponse.json({ message: 'Access denied' }, { status: 403 });
    }

    const body = await request.json();
    const projectId = parseInt(body.id);

    if (isNaN(projectId)) {
      return NextResponse.json(
        { message: 'Invalid project ID' },
        { status: 400 },
      );
    }

    // Verify the project exists before updating
    const existingProject = await prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!existingProject) {
      return NextResponse.json(
        { message: 'Project not found' },
        { status: 404 },
      );
    }

    const updatedProject = await prisma.project.update({
      where: {
        id: projectId,
      },
      data: {
        title: body.title,
        description: body.description,
        technologies: body.technologies.map(tech => tech.name),
        projectLink: body.projectLink,
        repositoryLink: body.repositoryLink,
        thumbnail: body.thumbnail,
      },
    });

    return NextResponse.json({ project: updatedProject }, { status: 200 });
  } catch (error) {
    console.error('Internal server error:', error);
    return NextResponse.json(
      { message: 'Internal server error', error: error.message },
      { status: 500 },
    );
  }
}

// Delete a project by ID
export async function DELETE(request, { params }) {
  try {
    const { decodedToken } = verifyToken(request);
    if (!decodedToken) {
      return NextResponse.json({ message: 'Access denied' }, { status: 403 });
    }

    const projectId = parseInt(params.id);

    if (isNaN(projectId)) {
      return NextResponse.json(
        { message: 'Invalid project ID' },
        { status: 400 },
      );
    }

    const existingProject = await prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!existingProject) {
      return NextResponse.json(
        { message: 'Project not found' },
        { status: 404 },
      );
    }

    await prisma.project.delete({
      where: {
        id: projectId,
      },
    });

    return NextResponse.json(
      { message: 'Project deleted successfully' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Internal server error:', error);
    return NextResponse.json(
      { message: 'Internal server error', error: error.message },
      { status: 500 },
    );
  }
}
