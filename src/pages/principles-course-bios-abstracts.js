import React from 'react';
import Head from 'next/head';
import Navigation from '@/components/navigation';
import Banner25RT30th from '@/components/banner/wri26RT-31st';  // 2026 version
import IconLinks from '@/components/icons/iconsRT';            // 2025 RT icons
import BiosAbstractsPC from '@/components/bios-abstracts/bios-abstractsPC';
import Registration from '@/components/registration';
import SponsorsCloud from '@/components/sponsors';

export async function getStaticProps() {
  return {
    props: {
      title: 'WRI 2026 | Principles Course Speaker Bios & Abstracts',
      description: 'Speaker Bios & Abstracts for the 31st Annual Wheel/Rail Interaction Conference (WRI)',
      socialImage: '/wri2026-social.png',
    },
  };
}

const BiosAbstractsPCPage = () => {
  return (
    <main className="bg-white">
      <Head>
        {/* Additional meta tags as needed */}
      </Head>
      <Navigation />
      <Banner25RT30th />
      <IconLinks />

      <div className="seminar-about-text">
        <p className="py-4 text-center">
          Join us for the 31st Annual Wheel/Rail Interaction Conference –
          <strong> 2026 Principles Course</strong>, covering best practices in
          vehicle/track interaction, wheel/rail contact mechanics, and more!
        </p>
      </div>

      <BiosAbstractsPC />
      <Registration />
      <SponsorsCloud />
    </main>
  );
};

export default BiosAbstractsPCPage;