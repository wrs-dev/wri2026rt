import React from 'react';
import Head from 'next/head';
import Navigation from '@/components/navigation';
import Banner25RTNoButton from '@/components/banner/wri25RT-no-button';
import SponsorsPackages from '@/components/sponsors/sponsorPackages';

const SponsorPackagesRT = () => {
  return (
    <main className="bg-white">
      <Head>
        <title>WRI 2026 RT Sponsorships</title>
      </Head>
      <Navigation />
      <Banner25RTNoButton />

      <div className="seminar-about-text" id="sponsor">
        <div className="pt-12 mx-auto">
          {/* Main Headline */}
          <h2 className="text-6xl font-bold leading-normal text-center pt-11">
            WRI 2026 RT Sponsorships
          </h2>
        </div>
      </div>
      <SponsorsPackages />
    </main>
  );
};

export default SponsorPackagesRT;
