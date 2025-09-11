import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import Banner26RT31st from '@/components/banner/wri26RT-31st';
import IconsRT from '@/components/icons/iconsRT';
import SponsorCta from '@/components/sponsors/sponsor-cta';
import SponsorsPage from '@/components/sponsors/sponsorPage';

export async function getStaticProps() {
  return {
    props: {
      title: "WRI 2026 Rail Transit | Sponsors",
      description: "Registration for the 31st Annual Wheel/Rail Interaction Conference (WRI)",
      socialImage: "/wri2026rt-social.png" 
    }
  };
}

const sponsors = () => {
  return (
    <main className="bg-white">
      <Navigation />
      <Banner26RT31st />
      <IconsRT />
      <div className="seminar-about-text" id="sponsor">
        <div className="px-12 mx-auto">
          <h2 className="text-6xl font-normal leading-normal text-center pt-11">
            Thank you to our <b>WRI 2026</b> Sponsors
          </h2>
        </div>
      </div>
      <SponsorsPage />
      <SponsorCta id="sponsors" />
    </main>
  );
};

export default sponsors;
