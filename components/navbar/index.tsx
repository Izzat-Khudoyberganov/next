import Link from 'next/link';
import React from 'react';
import { navData } from '~/data';

const Navbar = () => {
  return (
    <div className="container">
      <nav className='py-5 flex items-center justify-center gap-11'>
        {navData.map(({ id, href, text }) => (
          <Link
            key={id}
            href={href}>
            {text}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
