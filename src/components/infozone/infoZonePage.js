import Image from 'next/image';
import Link from 'next/link';
import InfoZonePhotos from '@/components/infozone/infoZonePhotos';

const infoZoneSponsors = [
  {
    name: 'Amsted Rail',
    description:
      'Amsted Rail is the world’s leading manufacturer of railcar bogie systems, railway wheelsets, and end-of car components for heavy haul freight railcars, passenger railcars and locomotives. With facilities spanning more than 40 locations across 10 countries and 6 continents, Amsted Rail delivers design excellence and reliability as we are the only component supplier designing complete performance systems. Our company culture for more than a century has been to provide the most innovative components and integrated bogie systems. Amsted Digital Solutions™, delivered by Amsted Rail, is the only telematics solution designed by a company that understands freight rail operations and a truly harsh operating environment.',
    imagePath: '/gold-amstead-rail.png',
    url: 'https://www.ensco.com/rail',
    bullets: [
      'Bogie Systems',
      'Brake Systems',
      'End-Of-Car',
      'Freight Car and Locomotive Components',
      'Integrated Systems',
      'Freight Railcar Fleet Management',
      // ... other bullets
    ],
  },
  {
    name: 'Loram',
    description:
      'The LORAM Maintenance of Way InfoZone will share a case study for Class 1 railroads working to improve turnout grinding standards. Many railroads treat turnouts like tangent rail, but the case study shows significant cost savings and life extension could be achieved on the turnouts from more frequent grinding cycles and improved rail profiles. Digital twin technology, economic data, turnout inspection data, and traffic data were used to simulate different grinding strategies to help quantify the benefits and recommend improved strategy. The attendees will learn how they can use their data to help compare the business case of different strategies and present this to their finance and executive leadership. We look forward to seeing you in the LORAM InfoZone!',
    imagePath: '/platinum-loram.svg',
    url: 'https://loram.com/',
    bullets: [
      // ... add bullets if needed
    ],
  },
  {
    name: 'Plasser American',
    description:
      'The Federal Railroad Administration (FRA) creates and enforces rail safety regulations, administers rail funding, and researches rail improvement strategies and technologies. The National Transportation Safety Board (NTSB) is an independent federal agency charged by Congress to conduct independent accident investigations and advocate for safety improvements in all modes of transportation, including rail.Representatives from the FRA and NTSB will discuss each agency’s mission and how they work with other industry players to drive safety improvements. In addition to addressing questions from attendees, topics discussed will include how the two organizations are structured, a quick overview of FRA’s grant funding opportunities in research and safety, what to expect during an NTSB investigation, and a review of the two agencies’ complementary roles in rail safety.',
    imagePath: '/platinum-plasser-american.svg',
    url: 'https://www.plasseramerican.com/en/home/start',
    bullets: [
      // ... add bullets if needed
    ],
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
          <div className="flex">
            <div className="w-1/3 h-12 px-12">
              <a href="#bosspac">
                <img
                  src="/bosspac-logo.png"
                  alt="BossPac Technologies logo"
                  className="max-w-full mx-auto lg:mx-0"
                />
              </a>
            </div>
            <div className="w-1/3 h-12 px-12">
              <a href="#loram">
                <img
                  src="/platinum-loram.png"
                  alt="Loram logo"
                  className="max-w-full mx-auto lg:mx-0"
                />
              </a>
            </div>
            <div className="w-1/3 h-12 px-12">
              <a
                href="#plasser-american"
              >
                <img
                  src="/infozone-plasser-american.png"
                  alt="Plasser American logo"
                  className="max-w-full mx-auto lg:mx-0"
                />
              </a>
            </div>
          </div>

          <div className="flex gap-32 mt-24">
            <div className="flex justify-end w-1/2 h-32">
              <a
                href="#fts"
              >
                <img
                  src="/infozone-fts.png"
                  alt="FTS logo"
                  className="h-full"
                />
              </a>
            </div>
            <div className="flex justify-start w-1/2 h-32">
              <a href="#grna">
                <img
                  src="/infozone-arm.jpg"
                  alt="Global Rail Group logo"
                  className="h-full"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* InfoZone Photos Section */}
      <section>
        <div className="flex items-center justify-center px-6 mx-auto mb-48 max-w-7xl lg:px-8">
          <InfoZonePhotos />
        </div>
      </section>
      {/* Bosspac Abstract Section */}
      <section className="px-6 mx-auto mb-24 max-w-7xl lg:px-8">
        <div className="px-12 mx-auto">
          <h3 className="mb-8 text-4xl font-normal leading-normal text-center pt-11">
            Review the InfoZone Abstracts
          </h3>
        </div>
        <div id="bosspac" className="grid grid-cols-1 gap-4 p-4 mb-12 md:grid-cols-5 bg-wri-yellow/20 rounded-xl">
          {/* Top-left block: empty */}
          <div className="hidden md:block md:col-span-1"></div>
          {/* Top-right block: heading */}
          <div className="md:col-span-4">
            <h3 className="mt-4 text-2xl font-bold">BOSSPAC Abstract</h3>
          </div>
          {/* Bottom-left block: logo */}
          <div className="flex items-start justify-center hidden mt-4 ml-4 md:justify-start md:block md:col-span-1">
            <Image
              src="/bosspac-logo.png"
              alt="Bosspac Logo"
              width={200}
              height={100}
            />
          </div>
          {/* Bottom-right block: paragraphs */}
          <div className="pb-4 pr-4 md:col-span-4">
            <p className="text-lg">
              In the pursuit of safer rail travel, understanding the intricate
              dynamics between vehicles and tracks is paramount. Derailment
              prevention stands as a critical goal, with a particular emphasis
              on addressing issues stemming from the wheel and rail interface.
            </p>
            <p className="mt-4 text-lg">
              The industry is actively seeking technology with the ability to
              precisely and regularly measure crucial metrics of rail movement
              under the dynamic loads. Accomplishing this goal necessitates a
              comprehensive examination of current inspection methods and
              challenges related to derailments caused by track conditions.
            </p>
            <p className="mt-4 text-lg">
              The Portable Laser Measurement Device received the top Innovation
              Grant from the Transportation Research Board, Federal Railroad
              Administration (FRA), and Federal Transit Administration (FTA) in
              2023. Subsequently, in 2024, it received First Place for top
              Technology by NRC, ushering in a new era in rail inspection
              technology under dynamic load.
            </p>
            <p className="mt-4 text-lg">
              Supported by industry leaders like AMTRAK, BNSF, MTA MARYLAND,
              SEPTA, METRO NORTH, BART, and NS, this groundbreaking device
              addresses critical challenges in track inspection and real-time
              temperature monitoring. Swiftly detecting, gauge, rail pushing,
              pumping, cross level, superelevation, rail expansion, ambient
              temperature and rail temperature under dynamic loads in real-time,
              it provides essential insights to prevent derailments and mitigate
              rail kinks and buckling.
            </p>
            <p className="mt-4 text-lg">
              A lightweight, portable tool utilized by track inspectors, the
              Portable Laser Measurement Device delivers vital rail metrics and
              environmental data under dynamic loads, improving traditional
              visual and static inspection methods. Attached magnetically to the
              web of a running rail, it seamlessly interfaces with smart devices
              or cloud platforms, capturing these key data point metrics during
              full revenue service.
            </p>
            <p className="mt-4 text-lg">
              Real-time reports empower inspectors and supervisors to diligently
              monitor critical aspects including track geometry, hot spots,
              curve conditions, bridge integrity, and potential heat-induced
              issues leading to buckling or kinking.
            </p>
            <p className="pb-4 mt-4 text-lg">
              The widespread adoption of this innovative solution by major
              railways and transit agencies represents a transformative leap in
              rail safety practices, poised to have a profound positive impact
              on the operational landscape of the rail industry.
            </p>
          </div>
        </div>
      </section>

      {/* FTS Abstract Section */}
      <section className="px-6 mx-auto mb-24 max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-4 p-4 mb-12 md:grid-cols-5 bg-wri-yellow/20 rounded-xl">
          {/* Top-left block: empty */}
          <div className="hidden md:block md:col-span-1"></div>
          {/* Top-right block: heading */}
          <div id="fts" className="md:col-span-4">
            <h3 className="mt-4 text-2xl font-bold">FTS Tools Abstract</h3>
          </div>
          {/* Bottom-left block: logo */}
          <div className="flex items-start justify-center hidden mt-4 ml-4 md:justify-start md:block md:col-span-1">
            <Image
              src="/fts.png"
              alt="FTS Tools Logo"
              width={200}
              height={100}
            />
          </div>
          {/* Bottom-right block: paragraphs */}
          <div className="pb-4 pr-4 md:col-span-4">
            <p className="pb-4 text-lg">
              North American Railroads are in need of advanced, low-cost, yet
              reliable solutions for their dark rail networks. Technologies must
              offer tailored wayside monitoring solutions for broken rail, loose
              joints, and train presence detection. Today's advancements in
              low-power wireless mesh network systems now offer these reliable
              monitoring solutions. We invite you to delve into the conversation
              about how today's technologies can supplant traditional hard-wired
              solutions, leading to more reliable operations, fewer delays, and
              enhanced rail safety.
            </p>
          </div>
        </div>
      </section>

      {/* Global Rail Group NA Abstract Section */}
      <section className="px-6 mx-auto mb-24 max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-4 p-4 mb-12 md:grid-cols-5 bg-wri-yellow/20 rounded-xl">
          {/* Top-left block: empty */}
          <div className="hidden md:block md:col-span-1"></div>
          {/* Top-right block: heading */}
          <div id="grna" className="md:col-span-4">
            <h3 className="mt-4 text-2xl font-bold">Global Rail NA Abstract</h3>
          </div>
          {/* Bottom-left block: logo */}
          <div className="flex items-start justify-center hidden mt-4 ml-4 md:justify-start md:block md:col-span-1">
            <Image
              src="/infozone-arm.jpg"
              alt="Global Rail NA Logo"
              width={200}
              height={100}
            />
          </div>
          {/* Bottom-right block: paragraphs */}
          <div className="pb-4 pr-4 md:col-span-4">
            <p className="text-lg">
              The future of training will be different than the traditional
              learning of the past, requiring railroads to be prepared to adopt
              new strategies and technologies. Having the ability to tailor
              training to specific KPIs is crucial for maintaining a competitive
              edge in an increasingly digital world.
            </p>
            <p className="mt-4 text-lg">
              The integration of traditional classroom elements with simulations
              and other technologies in a seamless manner leads to training
              success. The combination of experiential learning and real-life
              problem-solving leads to a reduction in training time and
              increased retention of student skills in the workplace.
            </p>
            <p className="pb-4 mt-4 text-lg">
              Our proprietary methods and technologies make GRA uniquely
              positioned to achieve these training goals. Our approach isn&#39;t
              just theoretical; we also offer job-related activities that take
              advantage of state-of-the-art track machine simulators and the
              latest adult education methodologies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
