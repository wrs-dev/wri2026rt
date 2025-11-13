import Image from 'next/image';
import Link from 'next/link';

export default function CallForPapers() {
  return (
    <div className="bg-white">
      <div className="max-w-5xl py-16 mx-auto sm:px-6 sm:py-24 lg:px-8">
        <div className="relative px-4 py-16 overflow-hidden text-center bg-gray-900 shadow-2xl isolate sm:rounded-3xl sm:px-10">
          <Image
            src="/rail-light-streaks.jpeg"
            alt="Background image of train light streaks"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0 z-0 blur-sm brightness-50"
          />
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                'radial-gradient(circle, rgba(9,83,180,0.3) 0%, rgba(27,27,153,0.4) 50%, rgba(20,20,120,0.5) 100%)',
            }}
          ></div>
          <div className="relative z-20">
            <h2 className="max-w-2xl mx-auto text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Call for Papers
              <br />
              WRI 2026 Rail Transit Conference
            </h2>
            <p className="max-w-lg mx-auto mt-4 text-sm leading-6 text-gray-100 sm:text-base sm:leading-7">
            Wheel Rail Seminars is looking for candidates to present at the September 1-3 Wheel/Rail Interaction Rail Transit Conference (WRI 2026 RT) that will be held in Boston, MA. If you are interested in
              being considered for presenting at the conference, please fill out
              the form using the link below.
            </p>
            <div className="flex items-center justify-center mt-8">
              <Link
                href="https://forms.gle/pVh61L1YXtfoM2rz9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-sm font-semibold transition-colors duration-200 transform bg-white border-2 border-white shadow-sm rounded-xl text-wri-blue hover:bg-wri-blue hover:text-white hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
