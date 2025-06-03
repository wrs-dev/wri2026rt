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
          WRI 2025 Highlighted in RT&amp;S
        </h1>
        <Link href="https://www.rtands.com/technology/wheel-rail-interface-conference-2025-to-be-held-in-kansas-city-mo/" passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Image
              src="/rtands-article.png"
              alt="WRI 2025 RT&S Article"
              width={776}
              height={612}
              className="mb-4"
              style={{ width: "100%", height: "auto", maxWidth: "776px" }}
            />
          </a>
        </Link>
        <p>
          Railway Track &amp; Structures (RT&amp;S) has published an article announcing
          the upcoming Wheel Rail Interface 2025 Heavy Haul Conference, to be held in Kansas City, Missouri.{" "}
          <Link href="https://www.rtands.com/technology/wheel-rail-interface-conference-2025-to-be-held-in-kansas-city-mo/" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="text-wri-red">
              Read the full article...
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
}