import Image from 'next/image';
import RegisterButton from '@/components/buttons/register-button';

const Banner2026RT = () => {
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

      {/* 2. MBTA Logo - 2250x600 px */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-8">
        <Image
          src="/MBTA-local-host-full.png"
          alt="MBTA Logo - Local Host"
          width={750}
          height={200}
          className="w-24 h-auto sm:w-32 md:w-40 lg:w-48"
          style={{ filter: 'drop-shadow(0 0 15px rgba(255,255,255,1)) drop-shadow(0 0 25px rgba(255,255,255,0.8))' }}
          priority
        />
      </div>

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

export default Banner2026RT;