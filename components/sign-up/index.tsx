'use client';

import React, { useState } from 'react';
import { Icons } from '~/assets/icons';

const SignUp = () => {
  const [email, setEmail] = useState<string>('');
  const emailData = [
    {
      title: 'Exclusive offers',
    },
    {
      title: 'Free events',
    },
    {
      title: 'Large discounts',
    },
  ];

  async function onSubmit(e: any) {
    e.preventDefault();
    const message = `Email: ${email}`;
    const res = await fetch(
      `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_URL}/sendMessage?text=${message}&chat_id=${process.env.NEXT_PUBLIC_TELEGRAM_ID}`
    );

    if (res.status == 200) {
      alert('Success');
      setEmail('');
    }
  }
  return (
    <section className="mt-[60px] h-[400px]">
      <div className="container">
        <div className="w-full pt-24 pb-[86px] bg-sign-up-bg h-[400px]">
          <div className="max-w-[494px] w-full mx-auto">
            <h3 className="text-[32px] text-white font-normal leading-[45px] mb-3">
              Join the club and get the benefits
            </h3>
            <p className="text-lg font-normal leading-7 text-center text-white">
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop up stores and more
            </p>

            <div className="flex items-center gap-9">
              {emailData.map((el, i) => (
                <div
                  key={i}
                  className="flex items-center flex-row-reverse gap-1 text-base font-normal leading-6 text-white mt-8">
                  {el.title}{' '}
                  <span>
                    <Icons.successIcon />
                  </span>
                </div>
              ))}
            </div>

            <form
              className="mt-10 flex items-center justify-center w-full "
              onSubmit={(e) => onSubmit(e)}>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="your@email.com"
                className="w-3/4 py-4 px-8 focus:outline-none"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="py-4 px-8 w-1/4 bg-dark_primary text-white text-base font-normal leading-6">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
