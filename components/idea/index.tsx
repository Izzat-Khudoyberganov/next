import Image from 'next/image';
import Link from 'next/link';

import img from '~/assets/image/idea-img.png';
const Idea = () => {
  return (
    <section className="">
      <div className="container">
        <div className="flex items-center justify-between gap-4 h-[478px]">
          <div className="bg-dark_primary w-full h-full px-16 pt-16 pb-[54px] flex flex-col justify-between">
            <div>
              <h3 className="text-[32px] font-normal leading-10 text-white mb-3">
                It started with a small idea
              </h3>
              <p className="text-lg font-normal leading-6 text-white">
                A global brand with local beginnings, our story begain in a
                small studio in South London in early 2014
              </p>
            </div>

            <Link
              href="/about"
              className="py-4 px-8 text-white bg-[rgba(249,249,249,0.15)] mt-auto block w-max ">
              View collection
            </Link>
          </div>
          <div className="w-full h-full">
            <Image
              src="https://immo.uz/_ipx/f_webp/images/design/2.jpg"
              alt="image"
              width={630}
              height={478}
              placeholder="blur"
              className="w-full h-full object-cover"
              blurDataURL="https://immo.uz/_ipx/f_webp/images/design/2.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Idea;
