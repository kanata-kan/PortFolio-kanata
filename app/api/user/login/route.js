import { NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '../../../lib/db';
import bcrypt from 'bcryptjs';
import { generateToken } from '../../../lib/auth';

// Define login schema using zod
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(request) {
  try {
    const body = await request.json();
    const validate = loginSchema.safeParse(body);

    if (!validate.success) {
      console.error('Validation error:', validate.error.format());
      return NextResponse.json(
        { message: validate.error.issues[0].message },
        { status: 400 },
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (!user) {
      return NextResponse.json({ message: 'Incorrect email' }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(body.password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: 'Incorrect password' },
        { status: 401 },
      );
    }

    const cookie = generateToken(user);

    return NextResponse.json(
      { message: 'Login successful', user },
      { status: 200, headers: { 'Set-Cookie': cookie } },
    );
  } catch (error) {
    console.error('Internal error:', error);
    return NextResponse.json(
      { message: 'Internal server error', error: error.message },
      { status: 500 },
    );
  }
}
