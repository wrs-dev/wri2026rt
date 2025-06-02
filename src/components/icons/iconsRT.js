import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useMemo } from 'react';

const IconLinksRT = () => {
  const router = useRouter();

  const getRestingBackgroundColor = useMemo(() => {
    if (router.pathname.includes('principles-course')) {
      return ['bg-wri-green', 'bg-wri-neutral'];
    } else if (router.pathname.includes('rail-transit-seminar')) {
      return ['bg-wri-neutral', 'bg-wri-blue'];
    }

    return ['bg-wri-green', 'bg-wri-blue'];
  }, [router.pathname]);

  const getRestingBackgroundColor = useMemo(() => {
    if (router.pathname.includes('principles-course')) {
      return ['bg-wri-green', 'bg-wri-neutral'];
    } else if (router.pathname.includes('rail-transit-seminar')) {
      return ['bg-wri-neutral', 'bg-wri-blue'];
    }

    return ['bg-wri-green', 'bg-wri-blue'];
  }, [router.pathname]);

  const icons = useMemo(
    () => [
      {
        src: '/principles-icon.svg',
        title: 'Principles Course',
        date: 'August 26, 2025',
        restingBgColor: 'bg-wri-green',
      },
      {
        href: 'rail-transit-seminar',
        src: '/rail-transit.svg',
        title: 'Rail Transit Seminar',
        date: 'August 27-28, 2025',
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
          {icons.map((icon, index) => {
            const content = (
              <li
                className={`border-2 border-white shadow-lg ${icon.restingBgColor} ${
                  icon.hoverBorderColor || ''
                } ${icon.hoverBgColor || ''}`}
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
