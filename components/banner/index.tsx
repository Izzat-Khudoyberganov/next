import Link from 'next/link';

const Banner = () => {
  return (
    <section className="py-[130px] bg-banner-bg bg-no-repeat h-[704px] bg-contain bg-center">
      <div className="container">
        <div className="max-w-[630px] h-[444px] bg-white w-full py-12 px-14 ml-auto relative">
          <h2 className="text-3xl leading-10 text-title_color text-justify">
            Luxury homeware for people who love timeless design quality
          </h2>
          <p className="mt-5 text-lg font-normal leading-7 text-gray-400">
            Shop the new Spring 2022 collection today
          </p>

          <Link
            href="/about"
            className="py-4 px-8 bg-gray-100 mt-auto block w-max absolute left-14 bottom-12">
            View collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
