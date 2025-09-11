import Image from 'next/image';
import RegisterButton from '@/components/buttons/register-button';

const Banner2026RT31st = () => {
  return (
    <section className="relative w-full min-h-[350px] sm:min-h-[500px]">
      {/* 1. Hero background image */}
      <Image
        src="/boston-city-skyline.webp"
        alt="home-banner"
        fill
        className="object-cover"
        quality={100}
      />


      {/* 3. Centered text & button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-white sm:text-6xl text-shadow-outline">
          Boston, MA
        </h1>
        <h2 className="text-3xl font-bold text-white sm:text-6xl text-shadow-outline">
          September 1–3, 2026
        </h2>
        <div className="mt-4">
          <RegisterButton />
        </div>
      </div>
    </section>
  );
};

export default Banner2026RT31st;