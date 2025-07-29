import Navigation from '@/components/navigation';
import Banner25RT30th from '@/components/banner/wri25RT-30th';
import IconsRT from '@/components/icons/iconsRT';
import AgendaButton from '@/components/buttons/agenda-download-button';
import Intro from '@/components/intro';
{/* import CallForPapers from '@/components/call-for-papers'; */}
import Registration from '@/components/registration';
import SponsorCTA2 from '@/components/sponsors/sponsor-cta-2';
import Reviews from '@/components/reviews';
import InfoZoneSection from '@/components/infozone/infoZoneSection';
import InterfaceJournal from '@/components/interface-journal';
import WRIAnnouncements from '@/components/announcements';
import SponsorsCloud from '@/components/sponsors';
import Hotel from '@/components/hotel';

export async function getStaticProps() {
  return {
    props: {
      title: 'WRI 2025 RT | WRI Rail Transit Conference - Seattle, WA || Home',
      description:
        'Welcome to the WRI 2025 Rail Transit Conference in Seattle. Join us for an exciting event focusing on wheel/rail and vehicle/track interaction for light rail and subway operations.',
      socialImage: '/wri2025-rt-social.png',
    },
  };
}

export default function Home() {
  return (
    <main className="bg-white">
      <Navigation />
      <Banner25RT30th />
      <IconsRT />
      <div className="flex justify-center mb-12">
        <AgendaButton />
      </div>
      {/* About Section (keeps your existing RT text) */}
      <div className="pb-40 about-container font-wri" id="about">
        <h1 className="mt-2 mb-2 text-2xl font-extrabold text-center sm:text-5xl font-wri">
          Welcome to WRI <span className="font-light font-wri">2025</span> RT{' '}
        </h1>
        <h2 className="mb-6 text-3xl font-light text-center sm:text-5xl font-wri text-wri-blue">
          Rail Transit Conference
        </h2>
        <p className="mb-6 justify-left">
          Welcome to the 30th Anniversary of the Wheel Rail Interaction
          Conference.{' '}
          <span className="font-extrabold font-wri text-wri-blue">
            WRI 2025 Rail Transit Conference
          </span>{' '}
          is devoted to examining wheel/rail and vehicle/track interaction on light rail and subway operations. The conference will be held in{' '}
          <span className="font-extrabold font-wri">
          Seattle, WA from August 26-28, 2025.{' '}
          </span>
          Attendees will be from commuter rail systems, contractors, government regulators, researchers and consultants.
        </p>
      </div>

      <Intro />
      {/*<CallForPapers />*/}
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
      <Hotel />
      <SponsorsCloud />
    </main>
  );
}