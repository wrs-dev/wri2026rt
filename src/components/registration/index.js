import React, { useState, useEffect } from 'react';
import PricingEmployeeIndividual from '@/components/pricing-employee-individual';
import PricingEmployeeMulti from '@/components/pricing-employee-multi';
import PricingProfessionalIndividual from '@/components/pricing-professional-individual';
import PricingProfessionalMulti from '@/components/pricing-professional-multi';
// Keep these imports even if virtual options are temporarily hidden
import PricingVirtualIndividual from '@/components/pricing-virtual-individual';
import PricingVirtualMulti from '@/components/pricing-virtual-multi';

import RegisterButton from '@/components/buttons/register-button';

// Countdown hook
const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState({
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      setCountDown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / 1000 / 60) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [countDownDate]);

  return countDown;
};

const RegistrationComp = () => {
  // Countdown to August 26, 2025
  const { days, hours, minutes, seconds } = useCountdown('2025-08-26T00:00:00');

  return (
    <section className="py-12 register-now">
      <h2 className="px-4 text-5xl font-normal leading-normal text-center pb-11">
        <b>Register for WRI 2025 Rail Transit Now!</b>
      </h2>
      <h2 className="px-4 text-5xl font-normal leading-normal text-center pb-11">
        <b>Take advantage of Early Bird pricing!</b>
      </h2>

      <div className="row">
        <div className="container" id="register">
          {/* Countdown display */}
          <ul className="flex flex-wrap justify-center pb-16">
            <li>
              <h3>{days}</h3>
              <span>Days</span>
            </li>
            <li>
              <h3>{hours}</h3>
              <span>Hours</span>
            </li>
            <li>
              <h3>{minutes}</h3>
              <span>Minutes</span>
            </li>
            <li>
              <h3>{seconds}</h3>
              <span>Seconds</span>
            </li>
          </ul>

          {/* Two-column layout for Employee and Professional */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: 'auto auto auto auto', // title, text, card1, card2
            gap: '1rem',
            alignItems: 'start', // Changed from stretch to start
            '@media (max-width: 1279px)': {
              gridTemplateColumns: '1fr',
              gridTemplateRows: 'auto'
            }
          }}>
            
            {/* Employee Title */}
            <div style={{
              gridColumn: '1',
              gridRow: '1',
              padding: '0 1rem',
              display: 'flex',
              alignItems: 'center',
              minHeight: '8rem'
            }}>
              <h3 className="mb-8 text-4xl font-bold text-center text-white" style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                Rail Transit Agency/Government Employee Registration
              </h3>
            </div>

            {/* Professional Title */}
            <div style={{
              gridColumn: '2',
              gridRow: '1',
              padding: '0 1rem',
              display: 'flex',
              alignItems: 'center',
              minHeight: '8rem'
            }}>
              <h3 className="mb-8 text-4xl font-bold text-center text-white" style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                Professional Registration
              </h3>
            </div>

            {/* Employee Description */}
            <div style={{
              gridColumn: '1',
              gridRow: '2',
              padding: '0 1rem 0 4rem'
            }}>
              <p className="pb-4 mb-6 text-white">
                Rail Transit Agency/Government Employee Pricing is designed for direct, full-time employees
                of qualifying railroads, transit agencies, and government
                agencies. (You must be paid directly from a railroad, transit
                agency, or government agency and receive a W-2 or similar). No
                contractors are eligible for Rail Transit Agency/Government Employee Pricing.
              </p>
              <p className="mb-10 text-white">
                Rail Transit Agency/Government Employees registering for more than one event will receive
                special Multi-Event Discounts.
              </p>
            </div>

            {/* Professional Description */}
            <div style={{
              gridColumn: '2',
              gridRow: '2',
              padding: '0 1rem 0 4rem'
            }}>
              <p className="pb-4 mb-6 text-white">
                Professional Pricing is for suppliers, contractors,
                consultants, and others who are not an employee of a railroad,
                transit agency, or government agency.
              </p>
              <p className="mb-10 text-white">
                Professionals registering for more than one event will receive
                special Multi-Event Discounts.
              </p>
            </div>

            {/* Employee Individual Card */}
            <div style={{
              gridColumn: '1',
              gridRow: '3',
              padding: '0 1rem'
            }}>
              <PricingEmployeeIndividual />
            </div>

            {/* Professional Individual Card */}
            <div style={{
              gridColumn: '2',
              gridRow: '3',
              padding: '0 1rem'
            }}>
              <PricingProfessionalIndividual />
            </div>

            {/* Employee Multi Card */}
            <div style={{
              gridColumn: '1',
              gridRow: '4',
              padding: '0 1rem'
            }}>
              <PricingEmployeeMulti />
            </div>

            {/* Professional Multi Card */}
            <div style={{
              gridColumn: '2',
              gridRow: '4',
              padding: '0 1rem'
            }}>
              <PricingProfessionalMulti />
            </div>
          </div>

          {/* Single Register Button below both columns */}
          <div className="mt-12 text-center">
            <RegisterButton />
          </div>

          {/* 
            Virtual Pricing Option 
            Uncomment if/when offering a virtual option for RT
          
            <div className="flex justify-center mt-8">
              <div className="flex flex-col w-full px-4 mb-4 md:w-3/4 xl:w-1/2">
                <div className="px-0 lg:px-12">
                  <h3 className="mb-8 text-4xl font-bold text-center text-white">
                    Virtual Option
                  </h3>
                  <p className="pb-4 mb-6 text-center text-white">
                    All attendees are eligible for the following virtual pricing.
                  </p>
                  <p className="mb-10 text-center text-white">
                    Attendees registering for more than one event will receive
                    special Multi-Event Discounts.
                  </p>
                </div>
                <PricingVirtualIndividual />
                <PricingVirtualMulti />
                <div className="mt-12 mb-12 text-center lg:mb-0">
                  <RegisterButton />
                </div>
              </div>
            </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default RegistrationComp;