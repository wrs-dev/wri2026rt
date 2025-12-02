import Navigation from '@/components/navigation';
import IconLinksHH from '@/components/icons/iconsHH';
import Intro from '@/components/intro';
import Banner25HH from '@/components/banner/wri26RT-no-button';
import InfoZoneSection from '@/components/infozone/infoZoneSection';
import InterfaceJournal from '@/components/interface-journal';
import WRIAnnouncements from '@/components/announcements';
import SponsorsCloud from '@/components/sponsors';

export async function getStaticProps() {
  return {
    props: {
      title: "WRI 2025 HH | WRI Heavy Haul Conference - Kansas City, MO || Home",
      description: "Welcome to the WRI 2025 Heavy Haul Conference in Kansas City. Join us for an exciting event focusing on the unique challenges and advancements in the heavy haul (freight) sector.",
      socialImage: "/wri2025-hh-social.png" 
    }
  };
}

export default function Home({ title, description, socialImage }) {
  return (
    <main className="bg-white">
      <Navigation />
      <Banner25HH />
      <IconLinksHH />
      <div className="pb-40 about-container font-wri" id="about">
        <h1 className="mt-2 mb-2 text-3xl font-extrabold text-center sm:text-5xl font-wri">
          Welcome to WRI <span className="font-light font-wri">2025</span> HH{' '}
        </h1>
        <h2 className="mb-6 text-4xl font-light text-center sm:text-5xl font-wri text-wri-red">
          Heavy Haul Conference
        </h2>
        <p className="mb-6 justify-left">
          Now in its 30th year, Wheel Rail Seminars is thrilled to announce some
          exciting developments for the upcoming WRI Conference in 2025! To
          better cater to the diverse needs of our attendees, the WRI Conference
          will split into two specialized conferences:
        </p>
        <p className="mb-6">
          <span className="font-extrabold font-wri">
            WRI 2025 Heavy Haul Conference:
          </span>{' '}
          Specifically tailored for the heavy haul (freight) sector, focusing on
          the unique challenges and advancements in this area of the railroad
          industry. Next year, the WRI 2025 Heavy Haul Conference will be held in{' '}
          <span className="font-extrabold font-wri">
            Kansas City, MO from June 10-12, 2025.
          </span>
        </p>
        <p className="mb-6">
          <span className="font-extrabold font-wri">
            WRI 2025 Rail Transit Conference:
          </span>{' '}
          Devoted to examining wheel/rail and vehicle/track interaction on light
          rail and subway operations. Next year, the WRI 2025 Rail Transit
          Conference will be held in{' '}
          <span className="font-extrabold font-wri">
            Seattle, WA in Fall of 2025.
          </span>
        </p>
        <p className="mb-6">
          Each conference will feature a comprehensive Principles Course
          meticulously crafted to meet the distinct needs of each discipline. We
          believe this division will provide an enriched experience for all
          participants, allowing for deeper insight, targeted discussions, and
          enhanced networking opportunities.
        </p>
        <p className="mb-6">
          Join us for these exceptional events designed to propel the railroad
          community forward. Stay tuned for further updates and details on
          registration!
        </p>
      </div>
      <Intro />
      <InfoZoneSection />
      <section className="my-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
            <InterfaceJournal />
            <WRIAnnouncements />
          </div>
        </div>
      </section>
      <SponsorsCloud />
    </main>
  );
}