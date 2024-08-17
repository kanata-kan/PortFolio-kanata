import { NextResponse } from 'next/server';
import prisma from '../../lib/db';
import { verifyToken } from '../../lib/verifyToken';

export async function POST(request) {
  try {
    const { decodedToken } = verifyToken(request);
    if (!decodedToken) {
      return NextResponse.json({ message: 'Access denied' }, { status: 403 });
    }

    const body = await request.json();

    // تأكد من تمرير مصفوفة السلاسل النصية
    const technologiesArray = body.technologies.map(tech => tech.name);

    const newProject = await prisma.project.create({
      data: {
        title: body.title,
        description: body.description,
        technologies: technologiesArray, // تمرير مصفوفة السلاسل النصية مباشرة
        projectLink: body.projectLink,
        repositoryLink: body.repositoryLink,
        thumbnail: body.thumbnail,
        userId: decodedToken.userId,
      },
    });

    return NextResponse.json({ project: newProject }, { status: 201 });
  } catch (error) {
    console.error('Internal server error:', error);
    return NextResponse.json(
      { message: 'Internal server error', error: error.message },
      { status: 500 },
    );
  }
}

// Get projects or a single project by ID
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const projectId = searchParams.get('id');

    if (projectId) {
      // Fetch a single project by ID
      const project = await prisma.project.findUnique({
        where: {
          id: parseInt(projectId),
        },
      });

      if (!project) {
        return NextResponse.json(
          { message: 'Project not found' },
          { status: 404 },
        );
      }

      return NextResponse.json({ project }, { status: 200 });
    } else {
      // Fetch all projects
      const projects = await prisma.project.findMany();
      return NextResponse.json({ projects }, { status: 200 });
    }
  } catch (error) {
    console.error('Internal server error:', error);
    return NextResponse.json(
      { message: 'Internal server error', error: error.message },
      { status: 500 },
    );
  }
}
