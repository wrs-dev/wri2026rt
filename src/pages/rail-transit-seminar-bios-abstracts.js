// pages/rail-transit-seminar-bios-abstracts.js
import React from 'react';
import Head from 'next/head';
import Navigation from '@/components/navigation';
import Banner25RT30th from '@/components/banner/wri25RT-30th';  // 2025 version
import IconLinks from '@/components/icons/iconsRT';            // 2025 RT icons
import BiosAbstractsRT from '@/components/bios-abstracts/bios-abstractsRT'; 
import Registration from '@/components/registration';
import SponsorsCloud from '@/components/sponsors';

export async function getStaticProps() {
  return {
    props: {
      // UPDATED meta tags for 2025
      title: 'WRI 2025 | Rail Transit Seminar Speaker Bios & Abstracts',
      description:
        'Speaker Bios & Abstracts for the 30th Annual Wheel/Rail Interaction Conference (WRI) – Rail Transit Seminar, 2025',
      socialImage: '/wri2025-social.png',
    },
  };
}

const BiosAbstractsPCPage = () => {
  return (
    <main className="bg-white">
      <Head>
        {/* You can optionally include additional meta tags here */}
      </Head>
      <Navigation />
      {/* 2025 Banner Component */}
      <Banner25RT30th />
      {/* 2025 Icon Links */}
      <IconLinks />

      {/* If you have any specialized text or “seminar-about-text” you want, place it here. */}
      <div className="my-4 text-center seminar-about-text">
        {/* e.g. a short paragraph about the 2025 Rail Transit Seminar */}
      </div>

      {/* Brought in from the “working” dynamic component that fetches from Storyblok */}
      <BiosAbstractsRT />

      {/* Registration & Sponsors follow */}
      <Registration />
      <SponsorsCloud />
    </main>
  );
};

export default BiosAbstractsPCPage;