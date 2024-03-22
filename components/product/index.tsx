import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { productData } from '~/data';

const Product = () => {
  return (
    <section className="pt-7 pb-10">
      <div className="container">
        <div className="grid grid-cols-4 gap-5">
          {productData.map((el) => (
            <div key={el.id}>
              <Image
                src={el.image}
                alt={el.title}
              />
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
