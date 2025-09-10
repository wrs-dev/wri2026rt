import { useState } from 'react';
import Navigation from '@/components/navigation';
import Banner25RT30th from '@/components/banner/wri25RT-30th';
import IconLinks from '@/components/icons/iconsRT';
import SpeakersPCPreview from '@/components/speakers/speakersPC-final';
import Registration from '@/components/registration';
import SponsorsCloud from '@/components/sponsors';
import Head from 'next/head';

export async function getStaticProps() {
  return {
    props: {
      title: 'WRI 2025 | Principles Course Speakers',
      description:
        'Speakers for the 30th Annual Wheel/Rail Interaction Conference (WRI)',
      socialImage: '/wri2025-social.png',
    },
  };
}

const PrinciplesCoursePage = () => {
  return (
    <main className="bg-white">
      <Navigation />
      <Banner25RT30th />
      <IconLinks />

      <div className="section">
        <div className="mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 mx-auto mb-24 max-w-7xl">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4 mb-6 lg:w-4/6 lg:pr-24">
                  <h2 className="text-5xl font-normal leading-normal text-center">
                    <span className="text-wri-green">
                      <b>2025 Principles Course</b>
                    </span>
                  </h2>
                  <h3 className="text-3xl font-normal leading-normal text-center pb-11">
                    August 26, 2025
                  </h3>
                  <p className="pt-2 pb-6">
                    This year's conference format includes an exciting{' '}
                    <span className="font-bold text-wri-green">
                      Principles of Wheel/Rail Interaction
                    </span>{' '}
                    course that is completely tailored to the Rail Transit community. The course will revolve around a case study based on a difficult set of wheel-rail challenges faced by a real operating system, with significant implications for system performance, reliability, economics, and safety. The day will include related sessions on track structures and components, vehicle suspensions, vehicle-track interaction, noise and vibrations, damage mechanisms, maintenance processes, friction management, maintenance window planning & utilization, and procurement & contracts for new systems. Drawing on the content presented throughout the day, a wrap-up session will connect the dots between the case study's real-world problems, root causes, corrections and mitigation strategies that have been identified and pursued.
                  </p>

                  <h2 className="mt-16 seminar-discount-header">
                    WRI 2025 Discount Programs:
                  </h2>
                  <p className="pt-2 pb-6">
                    Wheel Rail Seminars offers various discount programs,
                    including Multi-Event Discounts and Special Rail Transit Agency/Government Employee
                    Discounts for railroad, transit & government employees.
                  </p>
                  <p className="pt-2 pb-6">
                    <a
                      href="https://wheel-rail-seminars.com/#reviews"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Attendees praise the high-quality presenters & topics, and
                      inclusive approach to dining and networking.
                    </a>
                  </p>
                  <p>
                    NOTE: Attendance at Rail Transit or Heavy Haul seminars is
                    NOT required to register for the Principles Course.
                  </p>
                </div>

                <div className="w-full p-8 border-l-2 lg:w-2/6 bg-wri-green/20 border-wri-green">
                  <h2 className="pt-0 pb-4 seminar-header text-wri-green/90">
                    YOUR REGISTRATION INCLUDES:
                  </h2>
                  <ul className="pl-5 list-disc seminar-list">
                    <li>Welcome Reception</li>
                    <li>Continental Breakfast</li>
                    <li>Mid-morning Coffee and Refreshment Break</li>
                    <li>Luncheon served in the ExpoZone</li>
                    <li>Full Line-up of Presentations</li>
                    <li>Afternoon Coffee and Refreshment Break</li>
                    <li>
                      Exclusive Presentation Download Page access following the
                      event
                    </li>
                  </ul>
                  <h2 className="pt-6 pb-4 leading-tight seminar-header text-wri-green/90">
                    Attendees are also eligible to receive:
                  </h2>
                  <ul className="pl-5 list-disc seminar-list">
                    <li>
                      Continuing education/professional development credits
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-5xl font-normal text-center pb-11">
            Meet the{' '}
            <span className="text-wri-green">
              <b>2025 Principles Course</b>
            </span>{' '}
            Speakers
          </h2>
          <SpeakersPCPreview />
        </div>
      </div>

      <Registration />
      <SponsorsCloud />
    </main>
  );
};

export default PrinciplesCoursePage;