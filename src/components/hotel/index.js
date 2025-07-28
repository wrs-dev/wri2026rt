import Image from 'next/image';
import Link from 'next/link';

export default function Hotel() {
  return (
    <section id="hotel" className="py-32 hare-hotel">
      <div className="container">
        {/* Using a grid with a single column gap structure like HH */}
        <div className="grid grid-cols-1 gap-8">
          {/* Left side: Hotel Title & Image */}
          <div className="col">
            <h1 className="mb-4 text-2xl font-bold">
              WRI 2025 RT – Host Hotel – Book your Room
            </h1>
            <div className="grid grid-cols-1">
              <figure>
                <Image
                  src="/Hyatt-Regency-Seattle.webp"
                  alt="Hyatt Regency Seattle"
                  width={400}
                  height={225}
                  className="w-full h-auto"
                />
              </figure>
              <div className="mt-4">
                <div className="mb-6 text-3xl font-bold primary-color">
                  Hyatt Regency Seattle
                </div>
                <div className="mb-8 text-lg font-bold">
                808 Howell Street Seattle, Washington, 98101 United States
                </div>
                <a
                  href="https://www.hyatt.com/en-US/group-booking/SEARS/G-WRI5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-xl font-bold border-4 shadow-xl rounded-xl bg-wri-yellow hover:bg-wri-green border-wri-dark-blue hover:border-wri-green text-wri-dark-blue hover:text-white"
                >
                  Reservations
                </a>
              </div>
            </div>
          </div>

          {/* Right side: Reservation Info */}
          <div className="col">
            <h2>Making Reservations/Discounted Rate:</h2>
            <p className="mb-3.5 text-base">
              You can use the Hyatt Regency Seattle&apos;s secure online reservation system
              to book, modify, or cancel your reservation{' '}
              <a
                className="text-red-500 underline hover:text-blue-600"
                href="https://www.hyatt.com/en-US/group-booking/SEARS/G-WRI5"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </p>
            <p className="mb-3.5 text-base">
              Our discounted room rate is <b>$269</b> per night.
            </p>
            <p className="mb-3.5 text-base">
              Reservations must be received on or before the cut-off date of{' '}
              <b>Monday, August 11, 2025</b>. Once our room block is full, you
              may not be able to receive our special rate.
            </p>
            <p className="mb-3.5 text-base">
              If you require additional reservations assistance, you may contact the hotel
              reservation department at (206) 973-1234 and refer to the group by name:{' '}
              <b>Wheel/Rail Interaction Rail Transit &apos;25 Seattle.</b>
            </p>

            <h2>Room Deposits/Guarantees:</h2>
            <p className="mb-3.5 text-base">
              <b>Hotel reservations require a credit card guarantee to secure your room.</b>{' '}
              Should you need to cancel your reservation, reservations must be canceled a
              minimum of 48 hours prior to arrival, 5PM hotel time, to avoid a one-night
              cancellation penalty.
            </p>

            <h2>Reservation Confirmation:</h2>
            <p className="mb-3.5 text-base">
              You will receive your hotel confirmation email directly from the hotel.
            </p>
            <p className="mb-3.5 text-base">
              <b>
                Reservation must be canceled by 5:00pm, local hotel time, two days prior to
                arrival date.
              </b>{' '}
              Failure to cancel by 5:00pm, 48 hours prior will result in the loss of one
              night&apos;s room and tax on your credit card.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}