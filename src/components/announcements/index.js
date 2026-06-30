import Image from 'next/image';
import Link from 'next/link';

export default function WRIAnnouncements() {
  return (
    <div className="w-full bg-gray-100">
      <div className="p-8 text-4xl font-bold text-wri-dark-blue bg-wri-yellow">
        WRI Announcements
      </div>
      <div className="p-8">
        <h1 className="mb-4 text-2xl font-bold text-wri-dark-blue">
          Christopher Barkan receives the Worth Award at WRI 2026
        </h1>
        <div className="flex flex-col gap-4 mb-4 sm:flex-row">
          <Image
            src="/worth-award-2026.jpeg"
            alt="Christopher Barkan receives the Worth Award at the WRI 2026 Heavy Haul Conference"
            width={1620}
            height={1080}
            className="w-full h-auto sm:w-1/2"
          />
          <Image
            src="/christopher-barkan.jpeg"
            alt="Christopher Barkan, professor at RailTEC at the University of Illinois"
            width={1200}
            height={799}
            className="w-full h-auto sm:w-1/2"
          />
        </div>
        <p>
          Congratulations to <strong>Christopher Barkan</strong> on receiving the <strong>Worth Award</strong> at the <strong>WRI 2026 Heavy Haul Conference</strong>. Chris serves as a professor and leading figure at the <strong>University of Illinois</strong> within <strong>RailTEC at Illinois</strong>, where he has left a lasting impact by fostering a culture of technical excellence and statistical rigor.
        </p>
        <p className="mt-4">
          He is specifically recognized for bridging the gap between academia and the private sector through applied research that addresses real-world railroad challenges with vision and practical timing. As a dedicated mentor, he oversees graduate research with an emphasis on professional standards, ensuring a new generation of engineers is prepared to advance the industry through a comprehensive systems-based approach.
        </p>
        <p className="mt-4">
          Thank you to <strong>J. Riley Edwards, Ph.D, P.E.</strong> for accepting the award on Chris's behalf.
        </p>
        <p className="mt-4">
          <Link href="https://interfacejournal.com/archives/49584" target="_blank" rel="noopener noreferrer" className="text-wri-blue hover:underline">
            Read the full story &rarr;
          </Link>
        </p>
      </div>

      <div className="p-8 border-t border-gray-300">
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
          Congratulations to <Link href="https://wheel-rail-seminars.com" target="_blank" rel="noopener noreferrer" className="text-wri-blue hover:underline">Wheel Rail Seminars</Link> Founder, <strong>Gordon Bachinsky</strong>, on receiving the <strong>Lifetime Achievement Award</strong> from the <strong>Canadian Association of Railway Suppliers (CARS)</strong> during <strong>National Railway Day on November 4, 2025</strong>, in Montreal!
        </p>
        <p className="mt-4">
          This well-deserved honor recognizes Gordon's <strong>50+ years of dedication, innovation, and leadership</strong> in the railway industry. We're proud to see his lifelong commitment to advancing rail through <strong>education and collaboration</strong> celebrated on the international stage.
        </p>
        <p className="mt-4">
          Join us in congratulating Gordon on this incredible achievement!
        </p>
      </div>
    </div>
  );
}