import Link from 'next/link';
import React from 'react';
import { Icons } from '~/assets/icons';

const Header = () => {
  return <header>
    <div className="container">
        <div className='flex items-center justify-between py-5 border-b border-gray-400'>
            <Icons.searchIcon/>
            <Link href='/' className='text-2xl leading-[30px] font-normal'>
                Avion
            </Link>

            <div className='flex items-center gap-4'>
                <button>
                    <Icons.cartIcon/>
                </button>
                <button>
                    <Icons.userIcon/>
                </button>
            </div>
        </div>
    </div>
  </header>;
};

export default Header;
