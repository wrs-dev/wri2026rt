import Link from 'next/link';
import Image from 'next/image';
import { useMemo } from 'react';

const IconLinksRT = () => {
  const icons = useMemo(
    () => [
      {
        href: '/principles-course#icons',
        src: '/principles-icon.svg',
        title: 'Principles Course',
        date: 'September 1, 2026',
        restingBgColor: 'bg-wri-green',
        hoverBorderColor: 'hover:border-wri-blue',
        hoverBgColor: 'hover:bg-wri-green',
      },
      {
        href: '/rail-transit-seminar#icons',
        src: '/rail-transit.svg',
        title: 'Rail Transit Seminar',
        date: 'September 2-3, 2026',
        restingBgColor: 'bg-wri-blue',
        hoverBorderColor: 'hover:border-wri-green',
        hoverBgColor: 'hover:bg-wri-blue',
      },
    ],
    [],
  );

  return (
    <div className="btn_wrapper" data-aos="fade-up" id="icons">
      <div className="container">
        <ul className="flex flex-wrap">
          {icons.map(icon => {
            const content = (
              <li
                className={`border-2 border-white shadow-lg ${icon.restingBgColor} ${
                  icon.hoverBorderColor || ''
                } ${icon.hoverBgColor || ''}`}
                style={icon.href ? undefined : { cursor: 'default' }}
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
            );

            return icon.href ? (
              <Link href={icon.href} key={icon.title}>
                {content}
              </Link>
            ) : (
              <div key={icon.title}>{content}</div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default IconLinksRT;
