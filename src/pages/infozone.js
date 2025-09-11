import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import InfoZonePage from '@/components/infozone/infoZonePage';
import Banner26RT31st from '@/components/banner/wri25RT-30th';
import IconsRT from '@/components/icons/iconsRT';

export async function getStaticProps() {
  return {
    props: {
      title: "WRI 2026 | InfoZone",
      description: "InfoZone for the 31st Annual Wheel/Rail Interaction Conference (WRI)",
      socialImage: "/wri2026-rt-social.png" 
    }
  };
}

const infozone = () => {
  return (
    <main className="bg-white">
      <Navigation />
      <Banner26RT31st />
      <IconsRT />
      <div className="seminar-about-text" id="infozone">
        <div className="px-12 mx-auto">
          <h2 className="text-6xl font-normal leading-normal text-center pt-11">
            <b>WRI 2026</b> InfoZone
          </h2>
        </div>
      </div>
      <InfoZonePage />
    </main>
  );
};

export default infozone;
