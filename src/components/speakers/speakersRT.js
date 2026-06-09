import React from 'react';
import Link from 'next/link';
import { ChevronDoubleRightIcon } from '@heroicons/react/16/solid';

const speakers = [
  {
    name: 'Ryan Coholan',
    company: 'MBTA',
    imageSrc: '/ryan-coholan.jpg',
    topic: 'Re-attaining a State of Good Repair at MBTA',
  },
  {
    name: 'Shuwen Gao',
    company: 'National Research Council Canada',
    imageSrc: '/shuwen-gao.jpg',
    topic:
      'Supporting Maintenance Decisions Using Full-Scale Testing: Bearing Monitoring and Winter Wheel Damage',
  },
  {
    name: 'Carsten Rasmussen',
    company: 'Linsinger',
    imageSrc: '/carsten-rasmussen.jpg',
    topic:
      'Eddy Current Testing and Rail Milling of Severe Defects in Finland: A Case Study',
  },
  {
    name: 'Richard Stock',
    company: 'Plasser',
    imageSrc: '/richard-stock.jpg',
    topic:
      'Experiences with Grinding and Milling in North America – A Supplier’s View',
  },
  {
    name: 'Manuj Singhal',
    company: 'Delhi Metro Rail Corporation',
    imageSrc: '/manuj-singhal.jpg',
    topic:
      'Safety Through Stability: A Conicity-Driven Analysis of Rail Grinding and L/V Force Reduction – Field Evidence from the Delhi Metro Network',
  },
  {
    name: 'Atul Bhoosan Khare',
    company: 'Delhi Metro Rail Corporation',
    imageSrc: '/atul-khare.jpg',
    topic:
      'Safety Through Stability: A Conicity-Driven Analysis of Rail Grinding and L/V Force Reduction – Field Evidence from the Delhi Metro Network',
  },
  {
    name: 'Aishwary Vardhan Pandey',
    company: 'Vandhana International Pvt Ltd',
    imageSrc: '/aishwary-vardhan-pandey.jpg',
    topic:
      'Safety Through Stability: A Conicity-Driven Analysis of Rail Grinding and L/V Force Reduction – Field Evidence from the Delhi Metro Network',
  },
  {
    name: 'Shannon McKenna',
    company: 'Cross-Spectrum Acoustics',
    imageSrc: '/shannon-mckenna.jpg',
    topic: 'State-of-Practice of Low-Impact Frogs in Rail Transit',
  },
  {
    name: 'Karl Kim',
    company: 'University of Hawaii',
    imageSrc: '/karl-kim.jpg',
    topic: 'Lessons from HART: Rail Wheel Problems and Solutions',
  },
  {
    name: 'Anbo Wang',
    company: 'Hatch',
    imageSrc: '/anbo-wang.jpg',
    topic:
      'Mitigating Resonant OOR Development in Rail Transit: SIMPACK Multi Body Dynamics Investigation of the 7000 Series',
  },
  {
    name: 'Andrea Bracciali',
    company: 'AB Consulting',
    imageSrc: '/andrea-bracciali.png',
    topic:
      'Approach to Wheel-Rail Problems Solution on Metros and Light Rail Systems',
  },
  {
    name: 'Michael Palese',
    company: 'Amtrak',
    imageSrc: '/michael-palese.jpg',
    topic:
      'Big Data for Rail Health Assessment: Utilizing Existing Inspection Technologies to Forecast Rail Condition',
  },
  {
    name: 'Joel Hassebrock',
    company: 'Engineering Systems Inc.',
    imageSrc: '/joel-hassebrock.jpg',
    topic: 'Modern Component Failures in Rail Transit Environment',
  },
  {
    name: 'Anna Banks',
    company: 'Engineering Systems Inc.',
    imageSrc: '/anna-banks.jpg',
    topic: 'Modern Component Failures in Rail Transit Environment',
  },
  {
    name: 'Cory Hogan',
    company: 'ENSCO Rail',
    imageSrc: '/cory-hogan.jpg',
    topic:
      'Optimizing Track Maintenance Limits Using Validated Vehicle–Track Interaction Simulations',
  },
  {
    name: 'Pradeep Kumar Sharma',
    company: 'Delhi Metro Rail Corporation',
    imageSrc: '/pradeep-kumar-sharma.jpg',
    topic:
      'Understanding Ground-Borne Vibration Propagation for Resilient Metro Infrastructure: Lessons from Delhi Metro’s Expansion',
  },
  {
    name: 'Aishwary Vardhan Pandey',
    slug: 'a-pandey-2',
    company: 'Vandhana International Pvt Ltd',
    imageSrc: '/aishwary-vardhan-pandey.jpg',
    topic:
      'Understanding Ground-Borne Vibration Propagation for Resilient Metro Infrastructure: Lessons from Delhi Metro’s Expansion',
  },
];

const SpeakerCard = ({ name, company, imageSrc, topic, bioLink }) => {
  return (
    <div className="group">
      <div className="relative">
        <div className="w-full overflow-hidden border-t-4 aspect-w-2 aspect-h-1 border-wri-blue">
          <img
            src={imageSrc}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-11/12 mx-auto transform translate-y-1/2 bg-white shadow-md">
          <div className="p-4 text-center">
            <p className="h-8 text-lg font-bold text-wri-dark-blue md:text-xl lg:text-3xl lg:h-12">
              {name}
            </p>
            <p className="h-8 text-sm text-gray-600 md:text-base lg:text-xl lg:h-10">
              {company}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full p-4 mt-12 lg:mt-16 h-18 sm:h-36">
        <Link href={bioLink}>
          <div className="inline-flex h-12 text-sm cursor-pointer text-wri-mid-blue md:text-xl lg:text-2xl lg:h-24">
            <div className="text-sm text-wri-mid-blue md:text-xl lg:text-2xl">
              {topic}
            </div>
            <div className="flex-shrink-0">
              <ChevronDoubleRightIcon className="w-8 h-full text-wri-blue lg:w-16" />{' '}
            </div>
          </div>
        </Link>
      </div>
      <div className="flex justify-center mx-10 my-6 mb-6 sm:my-2 xl:mt-6">
        <Link href={bioLink}>
          <div className="px-12 py-6 text-xl text-center text-white cursor-pointer rounded-xl hover:text-wri-dark-blue hover:shadow-xl bg-wri-blue whitespace-nowrap">
            Bio & Abstract
          </div>
        </Link>
      </div>
    </div>
  );
};

const generateSlug = fullName => {
  if (typeof fullName !== 'string' || fullName.trim().length === 0) {
    return '';
  }
  const parts = fullName.trim().split(/\s+/);
  const firstNameInitial = parts[0][0];
  const lastName = parts.length > 1 ? parts[parts.length - 1] : '';
  return `${firstNameInitial.toLowerCase()}-${lastName.toLowerCase()}`;
};

const SpeakersRT = () => {
  return (
    <section className="mb-20 bg-white">
      <div className="container">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {speakers.map(speaker => (
              <SpeakerCard
                key={speaker.name}
                {...speaker}
                bioLink={`/rail-transit-seminar-bios-abstracts#bio-${
                  speaker.slug || generateSlug(speaker.name)
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersRT;
