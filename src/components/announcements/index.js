import Image from 'next/image';
import Link from 'next/link';

export default function WRIAnnouncements() {
  return (
    <div className="w-full bg-gray-100">
      <div className="p-8 text-4xl font-bold text-wri-dark-blue bg-wri-yellow">
        WRI Announcements
      </div>
      <div className="p-8">
        <h1 className="mb-1 text-2xl font-bold text-wri-dark-blue">
          Gordon Bachinsky receives CARS Lifetime Achievement Award
        </h1>
        <Image
          src="/gbachinsky-lifetime-achievement.webp"
          alt="Gordon Bachinsky receives CARS Lifetime Achievement Award"
          width={776}
          height={582}
          className="mb-4"
          style={{ width: "100%", height: "auto", maxWidth: "776px" }}
        />
        <p>
          Congratulations to <Link href="https://wheel-rail-seminars.com" target="_blank" rel="noopener noreferrer" className="text-wri-blue hover:underline">Wheel Rail Seminars</Link> Founder, Gordon Bachinsky!
        </p>
        <p className="mt-4">
          Earlier this week at the Canadian Association of Railway Suppliers (CARS) National Railway Day in Montreal, Gordon was honored with the Lifetime Achievement Award, a well-deserved recognition of his 50+ years of dedication and leadership in the rail industry.
        </p>
        <p className="mt-4">
          We are so proud to see Gordon celebrated for his lifelong commitment to advancing rail through innovation, education, and collaboration. His vision and passion have made a lasting impact on the industry and continue to inspire all of us at <Link href="https://wheel-rail-seminars.com" target="_blank" rel="noopener noreferrer" className="text-wri-blue hover:underline">Wheel Rail Seminars</Link>.
        </p>
        <p className="mt-4">
          Please join us in congratulating Gordon on this incredible achievement!
        </p>
      </div>
    </div>
  );
}