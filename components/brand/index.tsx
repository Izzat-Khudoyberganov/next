import React from 'react';
import { brandData } from '~/data';

const Brand = () => {
  return (
    <section className="my-20">
      <div className="container">
        <h2 className="text-center text-2xl font-normal text-title_color">
          What makes our brand different
        </h2>

        <div className="grid grid-cols-4 gap-5 mt-9">
          {brandData.map((el) => (
            <div
              key={el.id}
              className="p-12 bg bg-[rgb(249,249,249)] flex flex-col gap-3">
              {el.icon} 

              <h3 className='text-xl text-title_color font-normal leading-9'>{el.title}</h3>
              <p className='text-base font-normal leading-6'>{el.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;
