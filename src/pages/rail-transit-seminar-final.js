import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import Banner25RT from '@/components/banner/wri25RT';
import IconsRT from '@/components/icons/iconsRT';
import SpeakersRTPreview from '@/components/speakers/speakersRT-final';
import Registration from '@/components/registration';
import SponsorsCloud from '@/components/sponsors';

export async function getStaticProps() {
  return {
    props: {
      title: 'WRI 2025 RT | Rail Transit Seminar Speakers',
      description:
        'Meet the Rail Transit speakers for the 30th Annual Wheel/Rail Interaction Conference (WRI)',
      socialImage: '/wri2025-rt-social.png',
    },
  };
}

const RailTransitSeminarPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <main className="bg-white">
        <Navigation />
        <Banner25RT />
        <IconsRT />

        <div className="section">
          <div className="px-12 mx-auto">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 mx-auto mb-24 max-w-7xl">
                <div className="px-4 mb-6 lg:w-4/6 lg:pr-24">
                  <h2 className="text-5xl font-normal leading-normal text-center">
                    <span className="text-wri-blue">
                      <b>2025 Rail Transit Seminar</b>
                    </span>
                  </h2>
                </div>
                <h3 className="text-3xl font-normal leading-normal text-center pb-11">
                  June 10, 2025
                </h3>
              </div>
            </div>
          </div>

          <p className="pt-2 pb-6">
            <span className="font-bold text-wri-red">
              Welcome to the WRI 2025 Conference!<br />
              <br />
            </span>
            Please check back after the conference to access speaker presentations and recordings.
          </p>
        </div>

        <SpeakersRTPreview />

        <section className="section">
          <div className="flex flex-col gap-8 px-4 py-8 mx-auto bg-white max-w-7xl">
            <div className="text-center">
              <h2 className="mb-4 text-4xl font-bold text-wri-dark-blue">
                Thank You for Attending!
              </h2>
              <p className="mb-8 text-lg text-gray-700">
                We hope you enjoyed the conference. Materials will be posted soon.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 rounded-lg shadow-md bg-gray-50">
                <h3 className="mb-3 text-xl font-semibold text-wri-blue">
                  Presentation PDFs
                </h3>
                <p className="text-gray-600">
                  Click on any speaker card above to download their presentation PDF.
                </p>
              </div>

              <div className="p-6 rounded-lg shadow-md bg-gray-50">
                <h3 className="mb-3 text-xl font-semibold text-wri-blue">
                  Session Recordings
                </h3>
                <p className="text-gray-600">
                  Video recordings will be available soon for registered attendees.
                </p>
              </div>

              <div className="p-6 rounded-lg shadow-md bg-gray-50">
                <h3 className="mb-3 text-xl font-semibold text-wri-blue">
                  Next Conference
                </h3>
                <p className="text-gray-600">
                  Join us next year for WRI 2026. Details coming soon!
                </p>
              </div>
            </div>
          </div>
        </section>

        <Registration />
        <SponsorsCloud />
      </main>
    </>
  );
};

export default RailTransitSeminarPage;