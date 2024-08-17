// /app/api/user/[id]/route.js
import { NextResponse } from 'next/server';
import prisma from '../../../lib/db';
import { verifyToken } from '../../../lib/verifyToken';
import { updateUserSchema } from '@/app/lib/validators';

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    const validate = updateUserSchema.safeParse(body);

    if (!validate.success) {
      return NextResponse.json(
        { message: validate.error.issues[0].message },
        { status: 400 },
      );
    }

    const { token, decodedToken } = verifyToken(request);

    if (!decodedToken || !decodedToken.isAdmin) {
      console.error('Unauthorized access attempt:', decodedToken);
      return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
    }

    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: validate.data,
    });

    return NextResponse.json(
      { message: 'User updated successfully', user: updatedUser },
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

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const { token, decodedToken } = verifyToken(request);

    if (!decodedToken || !decodedToken.isAdmin) {
      console.error('Unauthorized access attempt:', decodedToken);
      return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
    }

    await prisma.user.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json(
      { message: 'User deleted successfully' },
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

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const { token, decodedToken } = verifyToken(request);

    if (!decodedToken || !decodedToken.isAdmin) {
      console.error('Unauthorized access attempt:', decodedToken);
      return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
    }

    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error('Internal server error:', error);
    return NextResponse.json(
      { message: 'Internal server error', error: error.message },
      { status: 500 },
    );
  }
}
