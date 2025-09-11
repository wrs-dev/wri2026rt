import Image from 'next/image';
import { useMemo } from 'react';

const IconLinksRT = () => {
  // Define icons with no links or hover effects
  const icons = useMemo(
    () => [
      {
        src: '/principles-icon.svg',
        title: 'Principles Course',
        date: 'September 1, 2026',
        bgColor: 'bg-wri-green', // Stationary background color
      },
      {
        src: '/rail-transit.svg',
        title: 'Rail Transit Seminar',
        date: 'September 2-3, 2026',
        bgColor: 'bg-wri-blue', // Stationary background color
      },
    ],
    []
  );

  return (
    <div className="btn_wrapper" data-aos="fade-up" id="icons">
      <div className="container">
        <ul className="flex flex-wrap">
          {icons.map((icon, index) => (
            <li
              key={index}
              className={`border-2 border-white shadow-lg ${icon.bgColor}`}
              style={{ cursor: 'default' }} // No click pointer
            >
              <figure>
                <Image
                  src={icon.src}
                  width={180}
                  height={100}
                  alt={icon.title.toLowerCase()}
                  className="w-full"
                />
              </figure>
              <div className="text">
                <h4 className="text-2xl font-bold text-white">{icon.title}</h4>
                <p className="text-2xl font-normal text-white">{icon.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IconLinksRT;