// app/api/user/route.js
import { NextResponse } from 'next/server';
import prisma from '../../../lib/db';
import { verifyToken } from '../../../lib/verifyToken';

export async function GET(request) {
  try {
    // التحقق من التوكن وصلاحيات المستخدم
    const { decodedToken } = verifyToken(request);

    if (!decodedToken || !decodedToken.isAdmin) {
      return NextResponse.json({ message: 'Access denied' }, { status: 403 });
    }

    // الحصول على جميع المستخدمين
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        isAdmin: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    console.error('Internal server error:', error);
    return NextResponse.json(
      { message: 'Internal server error', error: error.message },
      { status: 500 },
    );
  }
}
