import Image from 'next/image';
import Link from 'next/link';

export default function Hotel() {
  return (
    <section id="hotel" className="py-32 hare-hotel">
      <div className="container">
        <div className="grid grid-cols-1 gap-8">
          <div className="col">
            <h1 className="mb-4 text-2xl font-bold">
              WRI 2026 RT – Host Hotel – Book your Room
            </h1>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="space-y-4">
                <figure>
                  <Image
                    src="/renaissance-boston-seaport-1.webp"
                    alt="Renaissance Boston Seaport District Hotel"
                    width={400}
                    height={225}
                    className="w-full h-auto"
                  />
                </figure>
                <figure>
                  <Image
                    src="/renaissance-boston-seaport-2.webp"
                    alt="Renaissance Boston Seaport District Hotel Interior"
                    width={400}
                    height={225}
                    className="w-full h-auto"
                  />
                </figure>
              </div>
              <div>
                <div className="mb-6 text-3xl font-bold primary-color">
                  Renaissance Boston Seaport District Hotel
                </div>
                <div className="mb-8 text-lg font-bold">
                  606 Congress St, Boston, MA 02210
                </div>
                <a
                  href="https://book.passkey.com/event/51143433/owner/52950/landing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-xl font-bold border-4 shadow-xl rounded-xl bg-wri-yellow hover:bg-wri-green border-wri-dark-blue hover:border-wri-green text-wri-dark-blue hover:text-white"
                >
                  Reservations
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <h2>Making Reservations/Discounted Rate:</h2>
            <p className="text-base mb-3.5">
              You can use the Renaissance Boston Seaport Hotel secure online reservation system to book, modify or cancel your hotel reservation{' '}
              <a
                className="text-red-500"
                href="https://book.passkey.com/event/51143433/owner/52950/landing"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </p>
            <p className="text-base mb-3.5">
              The Discounted Room Rate is <b>$274.00</b> per night.
            </p>
            <p className="text-base mb-3.5">
              Reservations must be received on or before the cut-off date of
              Friday, August 7, 2026. Once the room block is full, you may not be
              able to receive our special rate or a room.
            </p>
            <p className="text-base mb-3.5">
              If you require additional reservations assistance, you may contact
              the hotel directly at (617) 338-4111 and refer to
              the group by name: <b>Wheel Rail Seminars</b>
            </p>
            <h2>Room Deposits/Guarantees:</h2>
            <p className="text-base mb-3.5">
              <b>
                Hotel reservations require a credit card guarantee to secure
                your room reservation.
              </b>
              {' '}Should you need to cancel your reservation, reservations must be
              canceled a minimum of 72 hours prior to arrival, 5PM hotel time,
              to avoid a one-night cancellation penalty.
            </p>
            <h2>Reservation Confirmation:</h2>
            <p className="text-base mb-3.5">
              You will receive your hotel confirmation email directly from the
              hotel.
            </p>
            <p className="text-base mb-3.5">
              <b>
                Reservations must be canceled by 5:00pm, local hotel time, three
                days prior to arrival date.
              </b>
              {' '}Failure to cancel by 5:00pm, 72 hours prior will result in the
              loss of one night's room and tax on your credit card.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
