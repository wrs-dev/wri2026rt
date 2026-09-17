import React from 'react';
import Link from 'next/link';
import { ChevronDoubleRightIcon } from '@heroicons/react/16/solid';
import { speakers } from '@/data/speakers-rt-2026';

const buttonClass =
  'px-5 py-4 text-lg font-semibold text-center text-white whitespace-nowrap rounded-lg bg-wri-blue hover:bg-blue-700';

const SpeakerCard = ({ name, company, imageSrc, topic, bioLink, pdfFile }) => {
  return (
    <div className="flex flex-col group">
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
      <div className="flex justify-center flex-grow w-full p-4 mt-12 lg:mt-16 sm:min-h-36">
        <Link href={bioLink}>
          <div className="inline-flex text-sm cursor-pointer min-h-12 text-wri-mid-blue md:text-xl lg:text-2xl lg:min-h-24">
            <div className="text-sm text-wri-mid-blue md:text-xl lg:text-2xl">
              {topic}
            </div>
            <div className="flex-shrink-0">
              <ChevronDoubleRightIcon className="w-8 h-full text-wri-blue lg:w-16" />{' '}
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-3 mx-2 mt-6 mb-10">
        <Link href={bioLink}>
          <div className={buttonClass}>Bio & Abstract</div>
        </Link>
        {pdfFile && (
          <a
            href={`/pdfs/2026/${pdfFile}`}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            Presentation PDF
          </a>
        )}
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

const SpeakersRTFinal = () => {
  return (
    <section className="mb-20 bg-white">
      <div className="container">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {speakers.map(speaker => (
              <SpeakerCard
                key={speaker.slug || speaker.name}
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

export default SpeakersRTFinal;
