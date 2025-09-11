import Image from 'next/image';

const Banner2026RT31stNoButton = () => {
  return (
    <section className="relative w-full" style={{ paddingTop: '33.33%' }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/boston-city-skyline.webp"
          alt="home-banner"
          fill
          className="object-cover w-full h-full"
          quality={100}
        />
      </div>


      {/* Centered Headings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="mb-1 text-4xl text-center text-white sm:text-6xl text-shadow-outline">
            Boston, MA
          </h1>
          <h1 className="mb-8 text-4xl text-center text-white sm:text-6xl text-shadow-outline">
            September 1–3, 2026
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner2026RT31stNoButton;