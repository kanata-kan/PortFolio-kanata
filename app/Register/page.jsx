import React from 'react';
import RegisterBtn from '../_Components/3-Content Components/RegisterBtn/RegisterBtn';
import { verifyTokenForPage } from '../lib/verifyToken';
import { cookies } from 'next/headers';
export default function Register() {
  const jwtToken = cookies().get('jwtToken')?.value;
  const payload = verifyTokenForPage(jwtToken);
  const userId = payload?.userId;
  const isAdmin = payload?.isAdmin;

  return (
    <div>
      <RegisterBtn userId={userId} />
    </div>
  );
}
