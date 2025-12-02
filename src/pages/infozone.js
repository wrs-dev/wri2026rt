import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import InfoZonePageSponsorship from '@/components/infozone/infoZonePageSponsorships';
import Banner26RT from '@/components/banner/wri26RT';
import IconsRTNoLink from '@/components/icons/iconsRT-nolink';

export async function getStaticProps() {
  return {
    props: {
      title: "WRI 2026 | InfoZone",
      description: "InfoZone for the 31st Annual Wheel/Rail Interaction Conference (WRI)",
      socialImage: "/wri2026rt-social.png" 
    }
  };
}

const infozone = () => {
  return (
    <main className="bg-white">
      <Navigation />
      <Banner26RT />
      <IconsRTNoLink />
      <div className="seminar-about-text" id="infozone">
        <div className="px-12 mx-auto">
          <h2 className="text-6xl font-normal leading-normal text-center pt-11">
            <b>WRI 2026</b> InfoZone
          </h2>
        </div>
      </div>
      <InfoZonePageSponsorship />
    </main>
  );
};

export default infozone;
