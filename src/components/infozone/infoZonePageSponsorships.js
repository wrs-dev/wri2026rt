import Image from 'next/image';
import InfoZonePhotos from '@/components/infozone/infoZonePhotos';

const infoZoneSponsors = [
  {
    name: 'Waynova',
    imagePath: '/Waynova-600px.png',
    url: 'https://www.waynovagroup.com/',
  },
  {
    name: 'Loram',
    imagePath: '/platinum-loram.png',
    url: 'https://loram.com/',
  },
  {
    name: 'ENSCO',
    imagePath: '/platinum-ensco-nospace.jpg',
    url: 'https://www.ensco.com/rail',
  },
  {
    name: 'Holland',
    imagePath: '/holland-logo-full.png',
    url: 'https://www.hollandco.com/',
  },
  {
    name: 'Plasser American',
    imagePath: '/platinum-plasser-american.svg',
    url: 'https://www.plasseramerican.com/en/home/start',
  },
];

export default function InfoZonePageSponsorships() {
  return (
    <div className="py-12 bg-white">
      {/* InfoZone Section */}
      <section className="px-6 mx-auto mb-24 max-w-7xl lg:px-8">
        <div className="grid items-center grid-cols-1 gap-4 mb-12 md:grid-cols-5">
          {/* Image column */}
          <div className="flex justify-center md:col-span-1 md:justify-start">
            <Image
              src="/infozone-icon.png"
              alt="InfoZone Icon"
              width={200}
              height={100}
            />
          </div>
          {/* Text column */}
          <div className="md:col-span-4">
            <p className="mt-4 text-lg">
              The InfoZone is an interactive learning environment that is
              designed to augment the information presented at the annual Rail
              Transit Seminar.
            </p>
            <p className="mt-4 text-lg">
              Our InfoZone partners offer high-quality technical information on
              the aspects of wheel/rail interaction that they know best. These
              sessions, which are built into the Rail Transit Seminar program, are
              designed to provide small groups of approximately 30 delegates
              insight into the product or service that is the specialty of the
              presenting company. The goal is to promote a better understanding
              of the dynamic interaction between vehicles and track. This
              innovative concept has consistently received great reviews from
              participants and InfoZone Partners alike.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Your InfoZone Partners */}
      <div className="seminar-about-text" id="sponsor">
        <div className="px-12 mx-auto">
          <h2 className="mb-16 text-6xl font-normal leading-normal text-center pt-11">
            Meet Your InfoZone Partners
          </h2>
        </div>
      </div>

      {/* Sponsors Section */}
      <section>
        <div className="px-6 mx-auto mb-24 space-y-12 max-w-7xl lg:px-8">
          {/* Row 1 - Railroad Software, Loram */}
          <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-8">
            <a href="#waynova" className="flex items-center justify-center h-36">
              <img src="/Waynova-600px.png" alt="Waynova logo" className="object-contain h-16" />
            </a>
            <a href="#loram" className="flex items-center justify-center h-36">
              <img src="/platinum-loram.png" alt="Loram logo" className="object-contain h-16" />
            </a>
          </div>

          {/* Row 2 - ENSCO, Holland */}
          <div className="flex flex-wrap items-end justify-center gap-x-24 gap-y-8">
            <a href="#ensco" className="flex items-end justify-center h-24">
              <img src="/platinum-ensco-nospace.jpg" alt="ENSCO logo" className="object-contain h-24" />
            </a>
            <a href="https://www.hollandco.com/" target="_blank" rel="noopener noreferrer" className="flex items-end justify-center h-24">
              <img src="/holland-logo-full.png" alt="Holland logo" className="object-contain h-16" />
            </a>
          </div>

          {/* Row 3 - Plasser American */}
          <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-8">
            <a href="https://www.plasseramerican.com/en/home/start" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-36">
              <img src="/platinum-plasser-american.svg" alt="Plasser American logo" className="object-contain h-14" />
            </a>
          </div>
        </div>
      </section>

      {/* InfoZone Partnership Opportunities Section - Hidden */}
      {/* <div className="seminar-about-text" id="infozone-sponsorship">
        <div className="px-12 mx-auto">
          <h2 className="mb-16 text-6xl font-normal leading-normal text-center pt-11">
            InfoZone Partnership Opportunities
          </h2>
        </div>
      </div> */}

      {/* Sponsorship Packages Section - Hidden */}
      {/* <section className="pb-24 bg-white">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <section className="mb-16">
            <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
              <div>
                <h3 className="text-2xl font-bold leading-tight text-wri-blue sm:text-3xl">
                  Rail Transit
                  <br />
                  InfoZone Sponsorship
                </h3>
                <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$7,000.00 Early Bird</p>
              </div>
              <div className="col-span-2">
                <p className="mb-4">
                  The InfoZone is an interactive learning environment that is
                  designed to augment the information presented at the annual WRI
                  Conference. Our InfoZone partners offer high-quality technical information
                  on aspects of wheel/rail interaction that they know best, providing small groups of
                  approximately 30-40 delegates insight into the product or
                  service that is the specialty of the presenting company. The
                  goal is to promote a better understanding of the dynamic
                  interaction between vehicles and track. This innovative concept
                  has consistently received great reviews from participants and
                  InfoZone Partners alike.
                </p>
                <div className="mt-4">
                  <p className="text-xl font-bold text-red-600">SOLD OUT</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section> */}

      {/* InfoZone Photos Section */}
      <section>
        <div className="flex items-center justify-center px-6 mx-auto mb-12 max-w-7xl lg:px-8">
          <InfoZonePhotos />
        </div>
      </section>

      {/* Abstracts Section */}
      <section className="px-6 mx-auto mb-24 max-w-7xl lg:px-8">
        <div className="px-12 mx-auto">
          <h3 className="mb-8 text-4xl font-normal leading-normal text-center pt-11">
            Review the InfoZone Abstracts
          </h3>
        </div>
        {/* Waynova Abstract Section */}
        <div id="waynova" className="grid grid-cols-1 gap-4 p-4 mb-12 md:grid-cols-5 bg-wri-yellow/20 rounded-xl">
          {/* Left block: logo spanning both rows */}
          <div className="hidden md:flex md:col-span-1 md:row-span-2 items-center justify-center ml-4">
            <a
              href="https://www.waynovagroup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Image
                src="/Waynova-600px.png"
                alt="Waynova Logo"
                width={200}
                height={100}
              />
            </a>
          </div>
          {/* Top-right block: heading */}
          <div className="md:col-span-4">
            <h3 className="mt-4 text-2xl font-bold">Beyond Compliance: Turning SGR, TAM & NTD Data into Better Maintenance Decisions</h3>
          </div>
          {/* Bottom-right block: paragraphs */}
          <div className="pb-4 pr-4 md:col-span-4">
            <p className="text-lg">
              Transit agencies are under increasing pressure to meet State of Good Repair (SGR),
              Transit Asset Management (TAM), and National Transit Database (NTD) requirements
              while managing aging infrastructure, limited budgets, and workforce shortages.
            </p>
            <p className="mt-4 text-lg">
              This session explores how agencies can move beyond compliance by using SGR, TAM,
              and NTD data to make better maintenance decisions. We'll review FTA requirements,
              discuss practical approaches to Transit Asset Management, examine NTD reporting
              considerations, and demonstrate how connecting inspections, condition assessments,
              work orders, and Enterprise Asset Management (EAM) systems helps agencies improve
              asset visibility, prioritize maintenance, and support regulatory compliance.
            </p>
          </div>
        </div>
        {/* Loram Abstract Section */}
        <div id="loram" className="grid grid-cols-1 gap-4 p-4 mb-12 md:grid-cols-5 bg-wri-yellow/20 rounded-xl">
          {/* Left block: logo spanning both rows */}
          <div className="hidden md:flex md:col-span-1 md:row-span-2 items-center justify-center ml-4">
            <a
              href="https://loram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Image
                src="/platinum-loram.png"
                alt="Loram Logo"
                width={200}
                height={32}
              />
            </a>
          </div>
          {/* Top-right block: heading */}
          <div className="md:col-span-4">
            <h3 className="mt-4 text-2xl font-bold">Choosing the Correct Rail Treatment for Your Transit System</h3>
          </div>
          {/* Bottom-right block: paragraphs */}
          <div className="pb-4 pr-4 md:col-span-4">
            <p className="text-lg">
              Passenger Railroads today face ever increasing pressure to balance infrastructure
              performance, maintenance costs, asset life, and safety. Let's explore how rail
              milling complements preventative grinding and rail replacement strategies, providing
              infrastructure owners with another option for addressing severe rail defects and
              restoring rail profiles.
            </p>
            <p className="mt-4 text-lg">
              Using real-world examples, operational experience, and economic modeling, attendees
              will learn where milling delivers the greatest value and how it can help extend rail
              life while reducing overall maintenance expenditures. The session will provide
              practical guidance for selecting the right maintenance approach based on your
              situation.
            </p>
          </div>
        </div>
        {/* ENSCO Abstract Section */}
        <div id="ensco" className="grid grid-cols-1 gap-4 p-4 mb-12 md:grid-cols-5 bg-wri-yellow/20 rounded-xl">
          {/* Left block: logo spanning both rows */}
          <div className="hidden md:flex md:col-span-1 md:row-span-2 items-center justify-center ml-4">
            <a
              href="https://www.ensco.com/rail"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Image
                src="/ensco-trans.png"
                alt="ENSCO Logo"
                width={200}
                height={53}
              />
            </a>
          </div>
          {/* Top-right block: heading */}
          <div className="md:col-span-4">
            <h3 className="mt-4 text-2xl font-bold">ENSCO</h3>
          </div>
          {/* Bottom-right block: paragraphs */}
          <div className="pb-4 pr-4 md:col-span-4">
            <p className="text-lg">
              Transit agencies today are being asked to do more with less while facing workforce
              shortages, limited track access, aging infrastructure, and increasing pressure to
              maintain assets in a State of Good Repair. Traditional inspection and maintenance
              practices built around manual inspections and periodic measurements can no longer
              fully meet the demands of modern rail transit systems. As a result, the industry has
              steadily evolved toward automated inspection, machine vision, wayside monitoring,
              and advanced analytics to improve safety, reliability, and maintenance effectiveness.
            </p>
            <p className="mt-4 text-lg">
              This session will explore how integrating track inspection, vehicle dynamics, wheel
              condition, and wayside monitoring data can provide a more complete understanding of
              wheel-rail interaction and asset condition. Attendees will learn how modern
              inspection technologies, automation, and emerging decision-support capabilities are
              helping agencies identify issues earlier, prioritize maintenance activities, reduce
              the need for field inspections, and move toward more intelligent, condition-based
              asset management.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
