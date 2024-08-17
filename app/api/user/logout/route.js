import { NextResponse } from 'next/server';
import { clearToken } from '../../../lib/auth';

export async function POST(request) {
  try {
    // إزالة التوكن من الكوكيز
    const cookie = clearToken();

    return NextResponse.json(
      { message: 'Logout successful' },
      { status: 200, headers: { 'Set-Cookie': cookie } },
    );
  } catch (error) {
    console.error('Internal server error:', error);
    return NextResponse.json(
      { message: 'Internal server error', error: error.message },
      { status: 500 },
    );
  }
}
