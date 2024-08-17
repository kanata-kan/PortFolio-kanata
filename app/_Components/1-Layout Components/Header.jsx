import React from 'react';
import Navbar from './Navbar/Navbar';
import { verifyTokenForPage } from '../../lib/verifyToken';
import { cookies } from 'next/headers';
export default function Header() {
  const jwtToken = cookies().get('jwtToken')?.value;
  const payload = verifyTokenForPage(jwtToken);
  const userId = payload?.userId;
  const isAdmin = payload?.isAdmin;
  const name = payload?.name;

  return (
    <div>
      <Navbar name={name} isAdmin={isAdmin} userId={userId} />
    </div>
  );
}
