import React, { useEffect } from 'react';

const generateSlug = fullName => {
  if (typeof fullName !== 'string' || fullName.trim().length === 0) {
    return '';
  }
  const parts = fullName.trim().split(/\s+/);
  const firstNameInitial = parts[0][0];
  const lastName = parts.length > 1 ? parts[parts.length - 1] : '';
  return `${firstNameInitial.toLowerCase()}-${lastName.toLowerCase()}`;
};

// 2026 Principles Course speaker biographies.
// Bios will be filled in as content is received.
const speakers = [
  {
    name: 'Bryan Sooter',
    company: 'American Public Transportation Association',
    imageSrc: '/bryan-sooter.jpg',
    topic: 'The Lay of the Land: Introduction to Rail Transit',
    title:
      'Director of Standards, Rail Transit, and Commuter Rail Programs, American Public Transportation Association',
    bio1: '',
    bio2: '',
  },
  {
    name: 'Hugh Fuller',
    company: 'O’Bunco Engineering',
    imageSrc: '/hugh-fuller.jpg',
    topic: 'Track Structures and Components',
    title: 'Principal Engineer, O’Bunco Engineering',
    bio1: 'Hugh Fuller is Principal Engineer for O’Bunco Engineering, a small DBE firm based out of Federal Way, WA. This year is Hugh’s 50th anniversary working in the railroad industry. Hugh began his railroad career with the Chessie System, working as a Track Supervisor with responsibility for maintenance and construction, and managing construction of Queensgate Yard. Since then, Hugh has managed or designed numerous light rail, streetcar, commuter rail, freight rail and high-speed rail projects. A life-long “railroader,” his project history includes designing the world’s first and only joint railway and automobile tunnel (Whittier, AK), operating streetcars for the McKinney Avenue Transit Authority (Dallas, TX), and managing the design of the San Onofre (CA) to Pulgas Second Main Track on the LOSSAN Corridor in Southern California.',
    bio2: 'He is a past Chair of the Transportation Research Board’s former Standing Committee AR060 Rail Transit Infrastructure Design and Maintenance, a committee charged with developing research topics in the railway engineering discipline and seeking funding to fully investigate these topics. As a 25-year member and supporter of the Women’s Transportation Seminar International (WTS), Fuller identified the lack of diversity and representation within the committee’s board at the member-level. Fuller’s first achievement as Chair was to introduce and encourage more women engineers to participate within the committee’s previously all-male Members-level, and in less than a year brought the Committee’s Member-level to more than 60% women. During Hugh’s tenure, many research topics achieved funding and are still being investigated.',
  },
  {
    name: 'Elton Toma',
    company: 'National Research Council Canada',
    imageSrc: '/elton-toma.jpg',
    topic: 'Vehicle Types, Suspension Systems and Components',
    title: 'Principal Engineer, National Research Council Canada',
    bio1: 'Dr. Elton Toma is a principal engineer at the National Research Council Canada (NRC), where he leads a team of researchers conducting rail and road vehicle testing and simulation. He has led or been active in NRC modelling and testing studies related to freight and passenger rail operations concerning in-train forces, marshalling of freight cars, derailment causes, curving behavior, and vibration and noise. He is currently leading a research team investigating the performance of freight car air brake systems in cold climates, and is leading research on the risks of hazardous goods transport.',
    bio2: 'He has a Ph.D. in Mechanical Engineering from Queen’s University at Kingston (Ontario, Canada), and is a registered Professional Engineer in the province of Ontario. He was a member of the 2016 Transportation Research Board (TRB) committee on the review of DOT testing of Electronically Controlled Pneumatic (ECP) brakes, and is currently on the TRB Committee on the Impact of Trains Longer Than 7,500 Feet.',
  },
  {
    name: 'Kevin Oldknow',
    company: 'Simon Fraser University',
    imageSrc: '/kevin-oldknow.jpg',
    topic: 'Wheel-Rail Contact: An Introduction',
    title: 'Associate Professor, Simon Fraser University',
    bio1: 'Dr. Kevin Oldknow is an Associate Professor and acting Dean for the Faculty of Applied Sciences at Simon Fraser University, where he leads the Vehicle Track Interaction Research Group. Kevin has researched and published in the areas of dynamics and controls, wheel-rail and vehicle-track interaction, tribology and friction control, and engineering education. He also has more than 20 years of industrial experience, primarily in railway systems.',
    bio2: 'Kevin first attended WRI in 2005, and has enjoyed being involved in the conference in a variety of capacities since then.',
  },
  {
    name: 'Andrew Little',
    company: 'L.B. Foster Rail Technologies',
    imageSrc: '/andrew-little.jpg',
    topic: 'Friction Management',
    title:
      'Friction Management Applications Specialist, L.B. Foster Rail Technologies',
    bio1: `Andrew Little is a Friction Management (FM) Applications Specialist at L.B. Foster Rail Technologies based in Vancouver, British Columbia. He holds a BSc in Chemistry from the University of British Columbia and graduated in 2012.`,
    bio2: `For thirteen years, Andrew has worked in the friction management industry with L.B. Foster and has been working in his current role in Field Applications since 2022. In this role, he focuses on data analysis and programming of field results for transit and freight customers. This data includes rail wear, friction, corrugation, noise, and lateral forces. He also assists the sales teams with field inspections, trials, and project proposals. Prior to this role, Andrew worked in L.B. Foster's R&D department in several chemistry-related positions involving the development and testing of new consumable FM products. Outside of the office, Andrew is a new father and enjoys spending time with his wife, baby boy, and cat. He is also an avid runner and has previously visited Boston in 2023 and 2025 to run the Boston Marathon twice.`,
  },
  {
    name: 'Derek Watry',
    company: 'Wilson Ihrig / RWDI',
    imageSrc: '/derek-watry.jpg',
    topic: 'Rail Transit Noise and Vibration',
    title: 'Technical Director, Wilson Ihrig / RWDI',
    bio1: 'Derek Watry is a Technical Director at Wilson Ihrig / RWDI. Since 1992, Derek has gained experience in many areas of practice including rail/transit, environmental, construction, forensic, architectural, and industrial. He has conducted extensive field measurements, established acceptability criteria, and calculated future noise and vibration levels. He has also prepared CEQA and NEPA noise technical studies, Environmental Impact Statements, and Environmental Impact Reports. He has worked with rail transit systems around the United States, as well as São Paulo, Hong Kong, and Tel Aviv.',
    bio2: 'A thorough understanding of the technical, public relations, and political aspects of environmental noise and vibration compliance work has helped Derek resolve complex community noise issues. He has also served as an expert witness in legal matters.',
  },
  {
    name: 'Richard Stock',
    company: 'Plasser American / Plasser & Theurer',
    imageSrc: '/richard-stock.jpg',
    topic: 'Wheel/Rail Damage Mechanisms and Remediation Techniques',
    title:
      'Global Head of Rail Solutions, Plasser American / Plasser & Theurer',
    bio1: 'Richard Stock is Global Head of Rail Solutions for Plasser American and Plasser & Theurer where he has strategic responsibility for the topics of rail maintenance, rail welding, and rail measurements. Richard started his railroad career in the R&D department at voestalpine in Austria where he was responsible for rail grade selection, wear and RCF-related issues. During his 12 years at voestalpine, he was temporarily seconded to KELSAN Technologies (now L.B. Foster Rail Technologies) in Vancouver to further research collaboration between Kelsan/LB Foster and voestalpine. He subsequently worked for L.B. Foster Rail Technologies as Rail Technology Manager, where he was responsible for various R&D processes and projects, managing university collaborations and technical customer interaction. He then became Milling Technology Manager for LINSINGER and LINMAG. He also led the Application Engineering group to support and analyze field trials. He then moved to Plasser American / Plasser & Theurer, where he is Global Head of Rail Solutions.',
    bio2: 'Richard holds a master’s and PhD in material sciences from the University of Leoben, Austria. He is a member of AREMA Committee 4, Committee 2, and the APTA – Track and Noise/Vibration Technical Forum. Richard is also part of the leadership team of the ICRI (International Collaborative Research Initiative).',
  },
  {
    name: 'Matthew Dick',
    company: 'Engineering Systems Inc.',
    imageSrc: '/matthew-dick.jpg',
    topic: 'Vehicle/Track Measurement Technologies',
    title: 'Head of Rail Strategy & Development, Engineering Systems, Inc. (ESi)',
    bio1: 'Matthew Dick is the Head of Rail Strategy & Development at Engineering Systems, Inc. (ESi). In the current role, Matthew is leading ESi’s development of expanded service and solution offerings supporting railway organizations in the areas of investigations, testing, modeling, training, research, and engineering. Matthew earned both his B.S. and M.S. in Mechanical Engineering from the University of Nebraska – Lincoln and holds a professional engineering license. He has been actively involved with railroad research and technology for over 25 years, specializing in vehicle/track interaction, derailments, metallurgy, railcar bearing research, and automated technology.',
    bio2: 'Throughout his career, Matthew has investigated approximately 250 derailments and train collisions, including serving as a railroad representative onsite subject matter expert during the 2008 Chatsworth Collision NTSB investigation. His contribution to railway safety improvements includes leading the delivery of North America’s first Autonomous Track Geometry Measurement System (ATGMS) and deploying the V/TI Clusters Artificial Intelligence algorithm, which both have significantly reduced track-caused derailments. Matthew served as Chair of AREMA Committee Two “Track Measurement and Assessment Systems” and the ASME Rail Transportation Division.',
  },
];

const SpeakerBio = ({ name, company, imageSrc, topic, title, bio1, bio2 }) => {
  const slug = generateSlug(name);

  return (
    <div
      id={`bio-${slug}`}
      className="mb-8 overflow-hidden bg-white rounded-lg shadow-md"
    >
      <div className="flex flex-col mt-16 mb-16 lg:flex-row lg:items-start xl:my-16">
        <div className="w-full mb-20 md:w-2/5 xl:w-1/6 xl:mx-24 lg:mb-8">
          <div className="relative">
            <div className="overflow-hidden border-t-4 aspect-w-2 aspect-h-1 xl:w-full border-wri-green">
              <img
                src={imageSrc}
                alt={name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute left-0 right-0 transform translate-y-1/2 bg-white rounded shadow-md -bottom-5 xl:w-5/6 xl:mx-auto">
              <div className="p-4 text-center">
                <p className="font-bold text-wri-dark-blue lg:text-2xl">
                  {name}
                </p>
                <p className="text-gray-600">{company}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/5 md:mx-12 xl:mt-8">
          {topic && (
            <h2 className="mb-4 text-2xl font-bold text-wri-green">{topic}</h2>
          )}
          {title && <h3 className="mb-4 text-xl font-bold">{title}</h3>}
          <div className="flex flex-col gap-8 lg:mr-20">
            {bio1 && <p>{bio1}</p>}
            {bio2 && <p>{bio2}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

const BiosAbstractsPC = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView();
        }, 0);
      }
    }
  }, []);

  return (
    <section className="container p-4 mx-auto">
      <h2 className="text-5xl font-normal text-center pb-11">
        <span className="text-wri-green">
          <b>Principles Course</b>
        </span>{' '}
        2026 Speaker Biographies
      </h2>
      {speakers.map(speaker => (
        <SpeakerBio key={generateSlug(speaker.name)} {...speaker} />
      ))}
    </section>
  );
};

export default BiosAbstractsPC;
