import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import Banner25RT30th from '@/components/banner/wri25RT-30th';
import IconsRT from '@/components/icons/iconsRT';
import SponsorCta from '@/components/sponsors/sponsor-cta';
import SponsorsPage from '@/components/sponsors/sponsorPage';

export async function getStaticProps() {
  return {
    props: {
      title: "WRI 2025 Rail Transit | Sponsors",
      description: "Registration for the 30th Annual Wheel/Rail Interaction Conference (WRI)",
      socialImage: "/wri2025rt-social.png" 
    }
  };
}

const sponsors = () => {
  return (
    <main className="bg-white">
      <Navigation />
      <Banner25RT30th />
      <IconsRT />
      <div className="seminar-about-text" id="sponsor">
        <div className="px-12 mx-auto">
          <h2 className="text-6xl font-normal leading-normal text-center pt-11">
            Thank you to our <b>WRI 2025</b> Sponsors
          </h2>
        </div>
      </div>
      <SponsorsPage />
      <SponsorCta id="sponsors" />
    </main>
  );
};

export default sponsors;
