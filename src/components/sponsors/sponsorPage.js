import React from 'react';

const platinumSponsors = [
  {
    name: 'ENSCO',
    description:
      'ENSCO provides advanced engineering, inspection, and analytics solutions for the rail industry, supporting freight and transit agencies with technologies that improve rail safety, infrastructure performance, and maintenance operations.',
    imagePath: '/platinum-ensco-nospace.jpg',
    url: 'https://www.ensco.com/rail',
  },
  {
    name: 'Loram',
    description:
      "For more than 70 years, Loram has been providing railroad maintenance equipment and services to freight, passenger and transit railroads. Loram's reputation rests on our performance as a contractor offering a wide range of track maintenance services:",
    bulletPoints: [
      'Production and specialty rail grinding',
      'Ditch cleaning',
      'Shoulder ballast cleaning',
      'Undercutting',
      'Spot undercutting utilizing our LRV',
      'Rail handling',
      'Full service friction management',
      'Track lifting',
      'Geotechnical substructure management',
      'Track Inspection',
      'Material Handling',
      'Structural monitoring and data services',
    ],
    imagePath: '/platinum-loram.png',
    url: 'https://www.loram.com/',
  },
  {
    name: 'Plasser American',
    description:
      'Plasser American provides track maintenance solutions and machines, leading innovation in the railway construction and maintenance sector.',
    imagePath: '/platinum-plasser-american.svg',
    url: 'https://www.plasseramerican.com/',
  },
  {
    name: 'Whitmore',
    description:
      'Whitmore is a global leader in lubrication and friction management solutions for the rail industry. Their innovative products and services help railroads reduce maintenance costs, extend equipment life, and improve operational efficiency.',
    bulletPoints: [
      'Rail and wheel lubrication systems',
      'Friction management solutions',
      'Switch lubrication products',
      'Curve lubrication technology',
      'Environmental and performance monitoring',
    ],
    imagePath: '/whitmore.png',
    url: 'https://www.whitmores.com/',
  },
];

const goldSponsors = [
  {
    name: 'Amsted Rail',
    imagePath: '/gold-amstead-rail.png',
    url: 'https://www.amstedrail.com/',
  },
  {
    name: 'ESI',
    imagePath: '/esi-logo.png',
    url: 'https://www.engsys.com/industries/transportation/rail/',
  },
  {
    name: 'Linsinger',
    imagePath: '/silver-linsinger.png',
    url: 'https://www.linsinger.com/',
  },
  {
    name: 'Sunrise Systems',
    imagePath: '/Sunrise-Systems-Logo.png',
    url: 'https://www.sunrisesystems.com/',
  },
  {
    name: 'Holland',
    imagePath: '/gold-holland.png',
    url: 'https://www.hollandco.com/',
  },
  {
    name: 'Scout Robotics',
    imagePath: '/scout-robotics.png',
    url: 'http://scoutrobo.com',
  },
  {
    name: 'Rhomberg Sersa',
    imagePath: '/silver-rhomberg-sersa.png',
    url: 'https://www.rhomberg-sersa.com/',
  },
  {
    name: 'WVCO Railroad Solutions',
    imagePath: '/gold-wvco.png',
    url: 'https://wvcorailroad.com/',
  },
  {
    name: 'Vossloh',
    imagePath: '/gold-vossloh.jpg',
    url: 'https://www.vossloh.com/',
  },
  {
    name: 'LB Foster',
    imagePath: '/silver-lbfoster.png',
    url: 'https://www.lbfoster.com/',
  },
];

const silverSponsors = [
  {
    name: 'Getzner',
    description: '',
    imagePath: '/getzner-logo.png',
    url: 'https://www.getzner.com/en',
  },
  {
    name: 'Interface Journal',
    description: '',
    imagePath: '/ij-logo.png',
    url: 'https://interfacejournal.com/',
  },
  {
    name: 'Gateway Rail',
    description: '',
    imagePath: '/gateway-rail-services.png',
    url: 'https://gatewayrailservices.com/',
  },
  {
    name: 'EKHO Infrastructure Solutions',
    description: '',
    imagePath: '/ekho-logo.png',
    url: 'https://ekhois.com/',
  },
  {
    name: 'Redstone Technologies',
    description: '',
    imagePath: '/redstone-technologies.png',
    url: 'https://redstonetech.us/',
  },
];

const bronzeSponsors = [
  {
    name: 'Steel Dynamics, Inc. (SDI)',
    description: '',
    imagePath: '/bronze-steel-dynamics.png',
    url: 'https://www.steeldynamics.com/',
  },
];

export default function SponsorPage() {
  return (
    <div className="pt-12 pb-24 bg-white sm:py-32">

      {/* Platinum Sponsor Section */}
      <section>
        <div className="px-6 mx-auto mb-24 max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              <span className="text-zinc-500">PLATINUM</span> sponsors
            </h2>
            <div className="col-span-2 space-y-16">
              {platinumSponsors.map((sponsor) => (
                <div key={sponsor.name}>
                  <div className="flex items-center h-22 mb-2">
                    <img
                      src={sponsor.imagePath}
                      alt={sponsor.name}
                      className="img-fill-contain max-h-20"
                    />
                  </div>
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:underline"
                  >
                    Visit the {sponsor.name} website
                  </a>
                  <p className="mt-1 mb-2 text-base leading-7">
                    {sponsor.description}
                  </p>
                  {sponsor.bulletPoints && (
                    <ul className="mt-2 ml-4 list-disc">
                      {sponsor.bulletPoints.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gold Sponsor Section */}
      <section>
        <div className="px-6 mx-auto mb-24 max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              <span className="text-yellow-600">GOLD</span> sponsors
            </h2>
            <dl className="grid grid-cols-1 col-span-2 gap-x-8 gap-y-16 sm:grid-cols-2">
              {goldSponsors.map((sponsor) => (
                <div key={sponsor.name} className="flex flex-col">
                  <dt className={`text-base font-semibold leading-7 text-black ${
                    sponsor.name === 'Sunrise Systems' || sponsor.name === 'LB Foster' ? 'mt-auto' : ''
                  }`}>
                    <div className="flex items-center h-22">
                      <img
                        src={sponsor.imagePath}
                        alt={sponsor.name}
                        className={`img-fill-contain ${
                          sponsor.name === 'Holland' ? 'h-24' :
                          sponsor.name === 'WVCO Railroad Solutions' ? 'h-28' :
                          sponsor.name === 'Rhomberg Sersa' ? 'h-28' :
                          sponsor.name === 'Sunrise Systems' ? 'w-[340px]' :
                          sponsor.name === 'LB Foster' ? 'w-[300px]' :
                          'max-h-20'
                        }`}
                      />
                    </div>
                  </dt>
                  <dd className="mt-auto pt-1 text-base leading-7">
                    <a
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Visit the {sponsor.name} website
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Silver Sponsor Section */}
      <section>
        <div className="px-6 mx-auto mb-24 max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              <span className="text-slate-500">SILVER</span> sponsors
            </h2>
            <div className="col-span-2">
              <dl className="grid items-end grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 place-items-start">
                {silverSponsors.map((sponsor) => (
                  <div key={sponsor.name}>
                    <dt className="text-base font-semibold leading-7 text-black">
                      <div className={`flex items-center ${
                        sponsor.name === 'EKHO Infrastructure Solutions' || sponsor.name === 'Gateway Rail' || sponsor.name === 'Redstone Technologies' ? 'h-28 mb-2' : 'h-24'
                      }`}>
                        <img
                          src={sponsor.imagePath}
                          alt={sponsor.name}
                          className={`img-fill-contain ${
                            sponsor.name === 'Interface Journal' ? 'w-[280px]' :
                            sponsor.name === 'Getzner' ? 'max-h-[68px]' :
                            sponsor.name === 'Gateway Rail' ? 'w-[240px]' :
                            sponsor.name === 'EKHO Infrastructure Solutions' ? 'max-h-28' :
                            sponsor.name === 'Redstone Technologies' ? 'w-[280px]' :
                            'max-h-14'
                          }`}
                        />
                      </div>
                    </dt>
                    <dd className="mt-1 text-base leading-7">
                      <a
                        href={sponsor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:underline"
                      >
                        Visit the {sponsor.name} website
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Bronze Sponsor Section */}
      <section>
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              <span className="text-amber-800">BRONZE</span> sponsors
            </h2>
            <dl className="grid grid-cols-1 col-span-2 gap-x-8 gap-y-16 sm:grid-cols-2 place-items-start">
              {bronzeSponsors.map((sponsor) => (
                <div key={sponsor.name}>
                  <dt className="text-base font-semibold leading-7 text-black">
                    <div className="flex items-center h-20">
                      <img
                        src={sponsor.imagePath}
                        alt={sponsor.name}
                        className="img-fill-contain max-h-20"
                      />
                    </div>
                  </dt>
                  <dd className="mt-4 text-base leading-7">
                    <a
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:underline"
                    >
                      Visit the {sponsor.name} website
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
