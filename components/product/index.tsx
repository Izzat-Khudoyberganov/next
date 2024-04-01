'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { productDataI } from '~/types';
import { Skeleton } from '../ui/skeleton';
import { useQuery } from 'react-query';
import { fetchData } from '~/hooks/fetch';

const Product = () => {
  const { data, isLoading } = useQuery<productDataI[]>(
    ['products'],
    () => fetchData({ url: `${process.env.NEXT_PUBLIC_API}` })
  );

  console.log(data);
  console.log(isLoading);

  return (
    <section className="pt-7 pb-10">
      <div className="container">
        <div className="grid grid-cols-4 gap-5">
          {data?.length
            ? data.map((el) => (
                <div key={el.id}>
                  <div className="w-[305px] h-[375px] group overflow-hidden transition-shadow duration-500 hover:shadow-2xl shadow-slate-300 ">
                    <Link href={`/about/${el.id}`}>
                      <Image
                        src={el.image}
                        alt={el.title}
                        width={305}
                        height={375}
                        className="group-hover:scale-125 transition-transform duration-500"
                      />
                    </Link>
                  </div>
                  <h3 className="mt-6 text-xl font-normal leading-7 text-title_color">
                    {el.title}
                  </h3>
                  <span className="block mt-2 text-lg  font-normal leading-6">
                    {el.price.toLocaleString('en-GB', {
                      style: 'currency',
                      currency: 'GBP',
                    })}
                  </span>
                </div>
              ))
            : Array.from({ length: 4 }).map((el, i) => (
                <Skeleton
                  key={i}
                  className="h-[462px]"
                />
              ))}
        </div>
        <Link
          href="/about"
          className="py-4 mt-12 px-8 mx-auto bg-gray-100 block w-max">
          View collection
        </Link>
      </div>
    </section>
  );
};

export default Product;
