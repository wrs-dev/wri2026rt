import React from 'react';
import Head from 'next/head';
import Navigation from '@/components/navigation';
import Banner25RT30th from '@/components/banner/wri25RT-30th';  // 2025 version
import IconLinks from '@/components/icons/iconsRT';            // 2025 RT icons
import BiosAbstractsPC from '@/components/bios-abstracts/bios-abstractsPC';
import Registration from '@/components/registration';
import SponsorsCloud from '@/components/sponsors';

export async function getStaticProps() {
  return {
    props: {
      title: 'WRI 2025 | Principles Course Speaker Bios & Abstracts',
      description: 'Speaker Bios & Abstracts for the 30th Annual Wheel/Rail Interaction Conference (WRI)',
      socialImage: '/wri2025-social.png',
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
      {/* 3. Use the 2025 banner and icons here */}
      <Banner25RT30th />
      <IconLinks />

      <div className="seminar-about-text">
        {/* Optionally add updated 2025 copy about the Principles Course */}
        <p className="py-4 text-center">
          Join us for the 30th Annual Wheel/Rail Interaction Conference –
          <strong> 2025 Principles Course</strong>, covering best practices in
          vehicle/track interaction, wheel/rail contact mechanics, and more!
        </p>
      </div>

      {/* 4. Render your dynamic bios/abstracts content */}
      <BiosAbstractsPC />

      {/* 5. Wrap with registration & sponsors */}
      <Registration />
      {/*<SponsorsCloud />*/}
    </main>
  );
};

export default BiosAbstractsPCPage;