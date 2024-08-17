import { NextResponse } from 'next/server';
import prisma from '../../../lib/db';
import bcrypt from 'bcryptjs';
import { generateToken } from '../../../lib/auth';
import { registerSchema } from '@/app/lib/validators';

export async function POST(request) {
  try {
    const body = await request.json();
    const validate = registerSchema.safeParse(body);

    if (!validate.success) {
      console.error('Validation error:', validate.error.format());
      return NextResponse.json(
        { message: validate.error.issues[0].message },
        { status: 400 },
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: 'A user with this email already exists' },
        { status: 400 },
      );
    }

    const existingIdentityNumber = await prisma.user.findUnique({
      where: { identityNumber: body.identityNumber },
    });

    if (existingIdentityNumber) {
      return NextResponse.json(
        { message: 'A user with this identity number already exists' },
        { status: 400 },
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);

    const newUser = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: hashedPassword,
        phone: body.phone,
        identityNumber: body.identityNumber,
        passwordConfirm: hashedPassword, // Ensure the confirmed password is stored as a hashed value
      },
      select: { id: true, name: true, email: true, isAdmin: true },
    });

    const cookie = generateToken(newUser);

    return NextResponse.json(
      { message: 'User created successfully', user: newUser },
      { status: 201, headers: { 'Set-Cookie': cookie } },
    );
  } catch (error) {
    console.error('Internal error:', error);
    return NextResponse.json(
      { message: 'Internal server error', error: error.message },
      { status: 500 },
    );
  }
}
