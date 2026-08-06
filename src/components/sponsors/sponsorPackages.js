import React from 'react';
import Image from 'next/image';

// If you have different sponsor registration button components for RT, import them here.
// Otherwise, reuse or rename them as needed (e.g., SponsorRegisterButtonSilver -> SponsorRegisterButtonRTSilver, etc.)
import SponsorRegisterButtonSilver from '@/components/buttons/sponsor-register-button-silver';
import SponsorRegisterButtonGold from '@/components/buttons/sponsor-register-button-gold';
import SponsorRegisterButtonPlatinum from '@/components/buttons/sponsor-register-button-platinum';
import SponsorRegisterButtonSoldOut from '@/components/buttons/sponsor-register-button-soldout';
import SponsorCtaPdf from '@/components/sponsors/sponsor-cta-pdf';

export default function SponsorPackages() {
  return (
    <div className="pb-2 bg-white sm:pt-12">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        {/* Intro */}
        <section className="mb-24">
          <p className="text-base leading-7">
            <strong>Sponsor Attendee Registration:</strong> When you sign up for
            sponsorship, the person completing the registration will
            automatically be registered as an attendee. Name changes can be made
            later. Depending on your chosen sponsorship level, you will be able
            to register additional Sponsor Attendees. If you know who these
            attendees are, please enter their information now. If not, you can
            contact{' '}
            <a
              href="mailto:erica@wheel-rail-seminars.com"
              className="underline hover:text-blue-600"
            >
              erica@wheel-rail-seminars.com
            </a>{' '}
            to have us add them later.
          </p>
        </section>

        {/* Rail Transit Bronze Sponsorship */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-amber-800 sm:text-3xl">
                Rail Transit
                <br />
                Bronze Sponsorship
              </h3>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">
                $1,100.00
              </p>
            </div>
            <div className="col-span-2">
              <ul className="ml-6 list-disc">
                <li>
                  Acknowledgement on select printed Rail Transit Seminar and
                  Principles Course materials
                </li>
                <li>
                  Logo placement on the Rail Transit and Principles Course
                  website, linked to your own site
                </li>
                <li>On‐screen logo presence in the General Session Room</li>
                <li>
                  Recognition on sponsor signage in Rail Transit &amp;
                  Principles registration area
                </li>
              </ul>
              <div className="mt-4">
                Contact{' '}
                <a
                  href="mailto:erica@wheel-rail-seminars.com"
                  className="underline hover:text-blue-600"
                >
                  erica@wheel-rail-seminars.com
                </a>{' '}
                to sign up to be a Bronze Sponsor.
              </div>
            </div>
          </div>
        </section>

        {/* Rail Transit Silver Sponsorship */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-slate-500 sm:text-3xl">
                Rail Transit
                <br />
                Silver Sponsorship
              </h3>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">
                $3,750.00
              </p>
            </div>
            <div className="col-span-2">
              <p className="mb-1 font-semibold">
                Includes all Bronze Level Benefits PLUS:
              </p>
              <ul className="ml-6 list-disc">
                <li>
                  One (1) complimentary registration for the WRI 2026 Rail
                  Transit Seminar, Principles Course, and related social events
                </li>
                <li>6’ Display table in ExpoZone/Refreshment Area</li>
                <li>Dedicated Sponsor web page with company logo and link</li>
                <li>Social media recognition</li>
              </ul>
              <div className="mt-4">
                <SponsorRegisterButtonSilver />
              </div>
            </div>
          </div>
        </section>

        {/* Rail Transit Gold Sponsorship */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-yellow-600 sm:text-3xl">
                Rail Transit
                <br />
                Gold Sponsorship
              </h3>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">
                $4,400.00
              </p>
            </div>
            <div className="col-span-2">
              <p className="mb-1 font-semibold">
                Includes all Silver Level Benefits PLUS:
              </p>
              <ul className="ml-6 list-disc">
                <li>
                  One (1) additional complimentary registration for a total of
                  two (2) complimentary registrations to the Rail Transit
                  Seminar, Principles Course, and related social events
                </li>
                <li>6’ Display Table at the Rail Transit Welcome Reception</li>
              </ul>
              <div className="mt-4">
                <SponsorRegisterButtonGold />
              </div>
            </div>
          </div>
        </section>

        {/* Rail Transit Platinum Sponsorship */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-violet-400 sm:text-3xl">
                Rail Transit
                <br />
                Platinum Sponsorship
              </h3>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">
                $6,000.00
              </p>
            </div>
            <div className="col-span-2">
              <p className="mb-1 font-semibold">
                Includes all Gold Level Benefits PLUS:
              </p>
              <ul className="ml-6 list-disc">
                <li>
                  One (1) additional complimentary registration for a total of
                  three (3) complimentary registrations
                </li>
                <li>
                  "Sponsor Bio Page" with company info, logos, and links to your
                  site, plus special recognition on site
                </li>
              </ul>
              <div className="mt-4">
                <SponsorRegisterButtonPlatinum />
              </div>
            </div>
          </div>
        </section>

        {/* InfoZone Sponsorship */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-blue-600 sm:text-3xl">
                Rail Transit
                <br />
                InfoZone Sponsorship
              </h3>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">
                $7,000 Early Bird
              </p>
            </div>
            <div className="col-span-2">
              <p className="mb-4">
                The InfoZone is an interactive learning environment that is
                designed to augment the information presented at the annual WRI
                Conference.
              </p>
              <p className="mb-4">
                Our InfoZone partners offer high-quality technical information
                on the aspects of wheel/rail interaction that they know best.
                These sessions, which are built into the Heavy Haul & Rail
                Transit Seminar program, are designed to provide small groups of
                approximately 30-40 delegates insight into the product or
                service that is the specialty of the presenting company. The
                goal is to promote a better understanding of the dynamic
                interaction between vehicles and track. This innovative concept
                has consistently received great reviews from participants and
                InfoZone Partners alike.
              </p>
              <p className="mb-2 font-semibold">
                As an InfoZone Partner, you receive:
              </p>
              <ul className="mb-4 ml-6 list-disc">
                <li>
                  Two (2) complimentary registrations to the Rail Transit
                  Seminar, Principles Course, and related social events
                </li>
                <li>6’ Display table in ExpoZone/Refreshment Area</li>
                <li>
                  Dedicated InfoZone Partner web page with company logo and link
                </li>
                <li>
                  Acknowledgement on select printed Rail Transit Seminar and
                  Principles Course materials
                </li>
                <li>On‐screen logo presence in the General Session Room</li>
                <li>
                  Recognition on sponsor signage in Rail Transit & Principles
                  registration area
                </li>
                <li>Social media recognition</li>
              </ul>
              <div className="mt-4">
                <p className="text-xl font-bold text-red-600">SOLD OUT</p>
              </div>
            </div>
          </div>
        </section>

        {/* Grand Buffet Reception Sponsor */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-rose-600 sm:text-3xl">
                Grand Buffet
                <br />
                Reception Sponsor
              </h3>
              <p className="mt-1 text-base font-semibold text-gray-500">
                (2 Available)
              </p>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">
                $8,000
              </p>
            </div>
            <div className="col-span-2">
              <p className="mb-4">
                This premier sponsorship level offers unparalleled visibility,
                connecting your brand with attendees during the primary
                social and networking highlight of the conference.
              </p>

              <p className="mb-1 font-semibold">
                Registration &amp; Presence
              </p>
              <ul className="mb-4 ml-6 list-disc">
                <li>
                  <strong>3 Full Conference Registrations:</strong>{' '}
                  Comprehensive access for four members of your team to all
                  sessions, meals, and networking events.
                </li>
                <li>
                  <strong>Premier ExpoZone Placement:</strong> A dedicated
                  exhibitor table in the ExpoZone for the full duration of the
                  conference. This space serves as the hub for all designated
                  breaks and meals, ensuring consistent foot traffic and
                  engagement.
                </li>
              </ul>

              <p className="mb-1 font-semibold">
                Reception Branding &amp; Exclusive Visibility
              </p>
              <ul className="mb-4 ml-6 list-disc">
                <li>
                  <strong>Signature Cocktail:</strong> A custom-crafted drink
                  named after your company or a specific product, served
                  exclusively during the reception.
                </li>
                <li>
                  <strong>Branded Napkins:</strong> Your logo featured on
                  cocktail napkins used throughout the evening.
                </li>
                <li>
                  <strong>Signage:</strong> Your logo featured prominently
                  within the reception hall welcoming attendees on your
                  behalf.
                </li>
              </ul>

              <p className="mb-1 font-semibold">
                Recognition &amp; VIP Experience
              </p>
              <ul className="ml-6 list-disc">
                <li>
                  <strong>Podium Announcement:</strong> A formal "thank you"
                  and invitation issued to all attendees at the close of the
                  day's sessions:{' '}
                  <em>
                    "Join us for the Grand Buffet Reception, proudly
                    sponsored by [Sponsor Name]!"
                  </em>
                </li>
                <li>
                  <strong>Reserved VIP Table:</strong> A designated,
                  high-visibility table within the reception space for your
                  team and invited guests to host key clients.
                </li>
                <li>
                  <strong>Dedicated Social Media Shout-out:</strong> A
                  standalone "Reception Sponsor" thank you post across
                  official conference social media channels, highlighting
                  your support of the event.
                </li>
              </ul>

              <div className="mt-4">
                Contact{' '}
                <a
                  href="mailto:erica@wheel-rail-seminars.com"
                  className="underline hover:text-blue-600"
                >
                  erica@wheel-rail-seminars.com
                </a>{' '}
                to sign up to be the Grand Buffet Reception Sponsor.
              </div>
            </div>
          </div>
        </section>

        {/* Breakfast Sponsor */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-orange-600 sm:text-3xl">
                Breakfast
                <br />
                Sponsor
              </h3>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">
                $2,500/day or $5,000 for the entirety of conference (all 3
                days)
              </p>
            </div>
            <div className="col-span-2">
              <p className="mb-4">
                As an exclusive Breakfast Sponsor, your company will receive
                high-visibility logo signage in the ExpoZone throughout the
                morning meal and a dedicated verbal acknowledgment from the
                podium during the opening meeting room remarks.
              </p>
              <div className="mt-4">
                Contact{' '}
                <a
                  href="mailto:erica@wheel-rail-seminars.com"
                  className="underline hover:text-blue-600"
                >
                  erica@wheel-rail-seminars.com
                </a>{' '}
                to sign up to be a Breakfast Sponsor.
              </div>
            </div>
          </div>
        </section>

        {/* Luncheon Sponsor */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-emerald-600 sm:text-3xl">
                Luncheon
                <br />
                Sponsor
              </h3>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">
                $5,000/day or $10,000 for all three luncheons
              </p>
            </div>
            <div className="col-span-2">
              <p className="mb-4">
                Sponsoring a lunch entitles your organization to prominent
                physical board signage in the ExpoZone and a featured verbal
                mention in the main meeting room prior to the lunch break.
              </p>
              <div className="mt-4">
                Contact{' '}
                <a
                  href="mailto:erica@wheel-rail-seminars.com"
                  className="underline hover:text-blue-600"
                >
                  erica@wheel-rail-seminars.com
                </a>{' '}
                to sign up to be a Luncheon Sponsor.
              </div>
            </div>
          </div>
        </section>

        {/* Wi-Fi Sponsor */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-cyan-600 sm:text-3xl">
                Wi-Fi
                <br />
                Sponsor
              </h3>
              <p className="mt-1 text-base font-semibold text-gray-500">
                (1 Available)
              </p>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">
                $2,500
              </p>
            </div>
            <div className="col-span-2">
              <ul className="ml-6 list-disc">
                <li>
                  The number one most asked question — what's the WiFi?
                  Provide the WiFi for the entire conference and be the hero.
                </li>
                <li>
                  Digital and physical signage with the WiFi username and
                  password that states "WiFi sponsored by [Sponsor Name]"
                </li>
              </ul>
              <div className="mt-4">
                Contact{' '}
                <a
                  href="mailto:erica@wheel-rail-seminars.com"
                  className="underline hover:text-blue-600"
                >
                  erica@wheel-rail-seminars.com
                </a>{' '}
                to sign up to be the Wi-Fi Sponsor.
              </div>
            </div>
          </div>
        </section>

        {/* InfoZone Partner
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-yellow-500 sm:text-3xl">
                InfoZone
                <br />
                Partner
              </h3>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">
                $7,000.00
              </p>
            </div>
            <div className="col-span-2">
              <p className="mb-1">
              For the first time this year, WRI is offering InfoZone sessions for the Rail Transit Conference. The InfoZone is an interactive learning environment designed to
                augment the information presented at the annual WRI Conference.
                Our InfoZone partners offer high‐quality technical content on
                aspects of wheel/rail interaction that they know best, providing
                small groups of ~30–40 delegates insight into the product or
                service specialty of the presenting company.
              </p>
              <p className="mt-2">
                The goal is to promote a better understanding of the dynamic
                interaction between vehicles and track. This innovative concept
                has consistently received great reviews from participants and
                InfoZone Partners alike.
              </p>
              <p className="mt-4 font-semibold">
                Your organization will receive:
              </p>
              <ul className="ml-6 list-disc">
                <li className="mb-2">
                  <strong>Pre-Event:</strong>
                  <ul className="ml-6 list-disc">
                    <li>
                      Logo and link on the Wheel Rail Seminars dedicated
                      InfoZone web page
                    </li>
                    <li>Email campaign to over 15,000 subscribers</li>
                    <li>
                      Ad in <em>Mass Transit</em> magazine
                    </li>
                    <li>Social media campaign promoting InfoZone partners</li>
                  </ul>
                </li>
                <li className="mb-2">
                  <strong>At-The-Event:</strong>
                  <ul className="ml-6 list-disc">
                    <li>
                      Two complimentary attendee registrations for the WRI 2025
                      Rail Transit Seminar and Principles Course
                    </li>
                    <li>InfoZone Partner appreciation signs</li>
                    <li>
                      Company logo in the Rail Transit Seminar pocket agenda
                    </li>
                    <li>
                      Opportunity to address Rail Transit attendees in your Zone
                    </li>
                    <li>
                      On‐screen marketing during breaks with a 3‐slide sequence
                    </li>
                    <li>
                      Sponsorship recognition for the “Ticket to Knowledge”
                      drawing
                    </li>
                    <li>ExpoZone marketing opportunities</li>
                  </ul>
                </li>
                <li className="mb-2">
                  <strong>Post-Event:</strong>
                  <ul className="ml-6 list-disc">
                    <li>Follow‐up email recognition</li>
                    <li>Thank‐you campaign on social media</li>
                  </ul>
                </li>
              </ul>
              <div className="mt-4">
                <SponsorRegisterButtonSoldOut />
              </div>
            </div>
          </div>
        </section>*/}

        {/* Interface Journal Add-On */}
        <section className="mt-16 mb-32">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            {/* Logo column */}
            <div className="flex items-center justify-left">
              <Image
                src="/ij-logo.webp"
                alt="Interface Journal Logo"
                width={250}
                height={100}
              />
            </div>
            {/* Text column */}
            <div className="col-span-2">
              <h3 className="text-2xl font-bold leading-tight text-blue-900 sm:text-3xl">
                Interface Journal Sponsor Add-On
              </h3>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">
                $3,500.00
              </p>
              <p className="mt-4">
                Add on to <strong>any sponsorship level</strong> a One Year
                Sponsorship in{' '}
                <em>
                  Interface Journal (The Journal of Wheel/Rail Interaction)
                </em>{' '}
                including a prominent spot with your logo and hot link to your
                website — <strong>$3,500.00</strong> (a $1,500 discount from the
                normal yearly sponsorship price).
              </p>
              <p className="mt-4">
                Learn more about Interface Journal at:{' '}
                <a
                  href="https://interfacejournal.com/"
                  className="underline hover:text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  interfacejournal.com
                </a>
                .
              </p>
            </div>
          </div>
          {/* Temporarily hidden until PDF file is ready
          <SponsorCtaPdf />
          */}
        </section>
      </div>
    </div>
  );
}
