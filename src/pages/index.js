import Navigation from '@/components/navigation';
import Banner26RT from '@/components/banner/wri26RT';
import IconsRTNoLink from '@/components/icons/iconsRT-nolink';
import SponsorCTAButton from '@/components/buttons/sponsor-cta-button';
import Intro from '@/components/intro';
import CallForPapers from '@/components/call-for-papers';
import Registration from '@/components/registration';
import SponsorCTA2 from '@/components/sponsors/sponsor-cta-2';
import Reviews from '@/components/reviews';
import InfoZoneSection from '@/components/infozone/infoZoneSection';
import InterfaceJournal from '@/components/interface-journal';
import WRIAnnouncements from '@/components/announcements';
import SponsorsCloud from '@/components/sponsors';
{/* import Hotel from '@/components/hotel'; */}

export async function getStaticProps() {
  return {
    props: {
      title: 'WRI 2026 RT | WRI Rail Transit Conference - Boston, MA || Home',
      description:
        'Welcome to the WRI 2026 Rail Transit Conference in Boston. Join us for an exciting event focusing on wheel/rail and vehicle/track interaction for light rail and subway operations.',
      socialImage: '/wri2026rt-social.png',
    },
  };
}

export default function Home() {
  return (
    <main className="bg-white">
      <Navigation />
      <Banner26RT />
      
      {/* Speakers announcement */}
      <div className="py-8 text-center">
        <h2 className="text-3xl font-light text-gray-800 sm:text-4xl font-wri">
          Speakers will be announced soon!
        </h2>
      </div>
      
      <IconsRTNoLink />
      <div className="flex justify-center mb-12">
        <SponsorCTAButton />
      </div>
      {/* About Section (keeps your existing RT text) */}
      <div className="pb-40 about-container font-wri" id="about">
        <h1 className="mt-2 mb-2 text-2xl font-extrabold text-center sm:text-5xl font-wri">
          Welcome to WRI <span className="font-light font-wri">2026</span> RT{' '}
        </h1>
        <h2 className="mb-6 text-3xl font-light text-center sm:text-5xl font-wri text-wri-blue">
          Rail Transit Conference
        </h2>
        <p className="mb-6 justify-left">
          Welcome to the 31st annual Wheel Rail Interaction Conference. The{' '}
          <span className="font-extrabold font-wri text-wri-blue">
            WRI 2026 Rail Transit Conference
          </span>{' '}
          is devoted to examining wheel/rail and vehicle/track interaction on light rail and subway operations. The conference will be held in{' '}
          <span className="font-extrabold font-wri">
          Boston, MA from September 1-3, 2026.{' '}
          </span>
          The event includes a 1-day Principles Course (September 1) and a 2-day Rail Transit Seminar (September 2-3). Attendees will be from commuter rail systems, contractors, government regulators, researchers and consultants.
        </p>
      </div>

      <Intro />
      <CallForPapers />
      <Registration />
      <InfoZoneSection />
      <SponsorCTA2 />
      <Reviews />

      {/* Two-column layout for Interface Journal & Announcements */}
      <section className="my-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
            <InterfaceJournal />
            <WRIAnnouncements />
          </div>
        </div>
      </section>
      {/* <Hotel /> */}
      <SponsorsCloud />
    </main>
  );
}