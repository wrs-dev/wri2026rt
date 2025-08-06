import Image from 'next/image';
import Link from 'next/link';
import InfoZonePhotos from '@/components/infozone/infoZonePhotos';

const infoZoneSponsors = [
    {
    name: 'Linsinger',
    description: '',
    imagePath: '/silver-linsinger.png',
    url: 'https://www.linsinger.com/',
    },
    {
    name: 'Railroad Software',
    description: '',
    imagePath: '/silver-railroad-software.png',
    url: 'https://www.railroadsoftware.com/',
    },
    {
    name: 'Hexagon | NEXTSENSE',
    description: '',
    imagePath: '/hexagon_new.jpg',
    url: 'https://www.calipri.net/en/',
  },
  {
    name: 'Loram',
    description: '',
    imagePath: '/platinum-loram.svg',
    url: 'https://loram.com',
  },
    {
    name: 'Plasser American',
    description: '',
    imagePath: '/platinum-plasser-american.svg',
    url: 'https://www.plasseramerican.com/en/home/start',
  },
  
];

export default function InfoZonePage() {
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
              designed to augment the information presented at the annual Heavy
              Haul Seminar.
            </p>
            <p className="mt-4 text-lg">
              Our InfoZone partners offer high-quality technical information on
              the aspects of wheel/rail interaction that they know best. These
              sessions, which are built into the Heavy Haul Seminar program, are
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

      <div className="seminar-about-text" id="sponsor">
        <div className="px-12 mx-auto">
          <h2 className="mb-16 text-6xl font-normal leading-normal text-center pt-11">
            Meet Your InfoZone Partners
          </h2>
        </div>
      </div>

      {/* Sponsors Section */}
      <section>
        <div className="px-6 mx-auto mb-48 max-w-7xl lg:px-8">
          {/* Row 1: Linsinger and Railroad Software */}
          <div className="grid grid-cols-2 gap-12 mb-12 justify-items-center">
            {/* Linsinger */}
            <a
              href="#linsinger"
              className="flex items-center justify-center w-full h-32"
            >
              <img
                src={infoZoneSponsors[0].imagePath}
                alt={`${infoZoneSponsors[0].name} logo`}
                className="object-contain h-28"
              />
            </a>
            {/* Railroad Software */}
            <a
              href={infoZoneSponsors[1].url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-32"
            >
              <img
                src={infoZoneSponsors[1].imagePath}
                alt={`${infoZoneSponsors[1].name} logo`}
                className="object-contain h-20"
              />
            </a>
          </div>

          {/* Row 2: Hexagon and Loram */}
          <div className="grid grid-cols-2 gap-12 mb-12 justify-items-center">
            {/* Hexagon */}
            <a
              href="#hexagon"
              className="flex items-center justify-center w-full h-32"
            >
              <img
                src={infoZoneSponsors[2].imagePath}
                alt={`${infoZoneSponsors[2].name} logo`}
                className="object-contain h-20"
              />
            </a>
            {/* Loram */}
            <a
              href={infoZoneSponsors[3].url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-32"
            >
              <img
                src={infoZoneSponsors[3].imagePath}
                alt={`${infoZoneSponsors[3].name} logo`}
                className="object-contain h-20"
              />
            </a>
          </div>

          {/* Row 3: Plasser American perfectly centered */}
          <div className="flex justify-center mb-12">
            <a
              href={infoZoneSponsors[4].url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-32"
            >
              <img
                src={infoZoneSponsors[4].imagePath}
                alt={`${infoZoneSponsors[4].name} logo`}
                className="object-contain h-16"
              />
            </a>
          </div>
        </div>
      </section>
      {/* InfoZone Photos Section */}
      <section>
        <div className="flex items-center justify-center px-6 mx-auto mb-48 max-w-7xl lg:px-8">
          <InfoZonePhotos />
        </div>
      </section>
      {/* Hexagon | NEXTSENSE Abstract Section */}
      <section className="px-6 mx-auto mb-24 max-w-7xl lg:px-8">
        <div className="px-12 mx-auto">
          <h3 className="mb-8 text-4xl font-normal leading-normal text-center pt-11">
            Review the InfoZone Abstracts
          </h3>
        </div>
        <div id="hexagon" className="grid grid-cols-1 gap-4 p-4 mb-12 md:grid-cols-5 bg-wri-yellow/20 rounded-xl">
          {/* Top-left block: empty */}
          <div className="hidden md:block md:col-span-1"></div>
          {/* Top-right block: heading */}
          <div className="md:col-span-4">
            <h3 className="mt-4 text-2xl font-bold">Hexagon | NEXTSENSE - Predictive maintenance with CALIPRI for Vienna public transport</h3>
          </div>
          {/* Bottom-left block: logo */}
          <div className="flex items-start justify-center hidden mt-4 ml-4 md:justify-start md:block md:col-span-1">
            <a
              href="https://www.calipri.net/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/hexagon.png"
                alt="Hexagon | NEXTSENSE Logo"
                width={200}
                height={100}
              />
            </a>
          </div>
          {/* Bottom-right block: paragraphs */}
          <div className="pb-4 pr-4 md:col-span-4">
            <p className="text-lg">
              The presentation titled "Predictive maintenance with CALIPRI for Vienna public
              transport" outlines the challenges faced by customers in the rail industry, such as
              safety requirements, economic and environmental demands, and the need for high
              vehicle availability. It introduces CALIPRI, a precise 2D profile measurement system
              that uses patented laser light section technology to provide highly accurate and
              reliable results.
            </p>
            <p className="mt-4 text-lg">
              The presentation highlights the CALIPRI X system, designed for automated
              measurement of all wheelsets, suitable for 24/7 year-round outdoor operation. It also
              emphasizes the benefits of centralized data availability through CALIPRI Predictor.
              With our solutions, we are closing the loop: from measuring with CALIPRI X, to
              condition monitoring and demand planning via CALIPRI Predictor – providing a
              complete, data-driven approach to predictive maintenance.
            </p>
            <p className="mt-4 text-lg">
              The main topic is the implementation of CALIPRI X in Vienna which has led to
              reduced downtime, better resource planning, and significant maintenance cost
              savings.
            </p>
            <p className="pb-4 mt-4 text-lg">
              In essence:
              Wiener Linien successfully minimized unplanned maintenance, mainly the
              need to swap and turn wheels, almost to zero! This achievement allowed Vienna's
              public transport team to save over 4 million euros by eliminating the need to keep
              two vehicles on standby for unexpected stoppages.
            </p>
          </div>
        </div>
        {/* Linsinger Abstract Section */}
        <div id="linsinger" className="grid grid-cols-1 gap-4 p-4 mb-12 md:grid-cols-5 bg-wri-yellow/20 rounded-xl">
          {/* Left block: logo spanning both rows */}
          <div className="hidden md:flex md:col-span-1 md:row-span-2 items-center justify-center ml-4">
            <a
              href="https://www.linsinger.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Image
                src="/linsinger-trans.png"
                alt="Linsinger Logo"
                width={200}
                height={100}
              />
            </a>
          </div>
          {/* Top-right block: heading */}
          <div className="md:col-span-4">
            <h3 className="mt-4 text-2xl font-bold">Linsinger - Rail Maintenance Strategies</h3>
          </div>
          {/* Bottom-right block: paragraphs */}
          <div className="pb-4 pr-4 md:col-span-4">
            <p className="text-lg">
              Extending the service life of the rails efficiently depends on how the rail reprofiling 
              (surface removal) is done as well as when and where it is done. More frequent monitoring 
              of the rails condition with suitable measuring methods opens for efficient condition-based 
              removal of defects in early stages. The presentation describes the potential benefits by 
              condition-based rail reprofiling as an alternative to the widely used cyclic grinding today.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
