import React, { useEffect } from 'react';
import Image from 'next/image';

const generateSlug = fullName => {
  if (typeof fullName !== 'string' || fullName.trim().length === 0) {
    return '';
  }
  const parts = fullName.trim().split(/\s+/);
  const firstNameInitial = parts[0][0];
  const lastName = parts.length > 1 ? parts[parts.length - 1] : '';
  return `${firstNameInitial.toLowerCase()}-${lastName.toLowerCase()}`;
};

// 2026 Rail Transit Seminar speaker bios & abstracts.
// `bio` and `abstract` are arrays of paragraph strings — add as many as needed.
// Joint sessions (5, 6, and 12) group multiple speakers under one shared abstract.
const topics = [
  {
    topic: 'Re-attaining a State of Good Repair at MBTA',
    abstract: [],
    speakers: [
      {
        name: 'Ryan Coholan',
        company: 'MBTA',
        imageSrc: '/ryan-coholan.jpg',
        title: 'Chief Operating Officer, MBTA',
        bio: [
          'Ryan Coholan brings three decades of transportation experience to the role of MBTA’s Chief Operating Officer, in which he is responsible for the safe and efficient daily operation of all MBTA modes of transportation—subway, commuter rail, bus, ferry, and paratransit. Previously, Ryan served as the MBTA’s Chief Railroad Officer, directing, planning, and supervising the 5th busiest commuter rail system in the U.S. for nearly 10 years.',
          'Like many industry veterans, Ryan’s passion was born of curiosity and a love of trains. Early in his career, he began working in a locomotive shop as a laborer. He progressed through the ranks and held numerous roles at the Bay Colony Railroad and Cape Cod Railroad, including trainmaster, rules examiner, dispatcher, track inspector, and eventually, General Manager of Cape Rail, Inc. Currently, he serves on the New England Railroad Club Executive Board and is the Chair of the APTA Commuter Rail Chief Operating Officer’s Committee.',
          'Ryan believes that expertise in practices with demonstrated success and an appetite for innovation are equally critical to providing MBTA riders with a safe, reliable experience. From maintaining his locomotive engineer’s qualifications to applying the Internet of Things (IoT) to locomotive fleet maintenance at the commuter rail, Ryan has demonstrated his commitment to this philosophy throughout his career. As COO, he seeks to empower employees to influence positive change by providing them access to practical and safety-centered tools and equipment, modern technologies, and training.',
          'A longtime public servant, Ryan is a graduate of the Public Sector Leadership program at Cornell University as well as the 49th Municipal Police Officer’s Class at the Plymouth, MA Police Academy. Ryan often can be spotted taking subway and bus trips around Boston and on Old Colony Lines of the commuter rail heading toward Southeastern MA, where he resides with his family.',
        ],
      },
    ],
  },
  {
    topic:
      'Supporting Maintenance Decisions Using Full-Scale Testing: Bearing Monitoring and Winter Wheel Damage',
    abstract: [
      'Co-authors: Shuwen Gao, Kevin Mackie, Elton Toma, Saeed H-Nia — National Research Council of Canada',
      'Rail transit operators must often make maintenance and equipment decisions without conclusive field evidence, making it difficult to implement new technologies or practices with confidence. This presentation describes two applications where controlled full-scale testing was used to support operational decision-making.',
      'In the first case, a rail transit operator sought to identify wheel vibration indicators of early bearing degradation to support preventive maintenance. Obtaining sufficient in-service data was impractical due to long observation periods and operational risk. Controlled full-scale testing using healthy and intentionally degraded bearings under representative loading and curving conditions revealed clear differences in vibration response, enabling implementation of condition-monitoring approaches without waiting for in-service failures.',
      'In the second case, a rail transit agency experienced recurring winter wheel tread damage, commonly referred to as metal pickup, under low-adhesion braking conditions, increasing reprofiling demand and affecting braking consistency. Because the condition could not be reproduced reliably outside revenue service, potential mitigations such as brake material changes could not be evaluated with confidence. Controlled full-scale testing established repeatable braking conditions that consistently reproduced the in-service mechanism, with wheel damage matching field observations. The resulting test method enables qualification of candidate brake materials and maintenance strategies prior to fleet introduction.',
      'Together, these cases demonstrate how controlled full-scale testing reduces operational risk by allowing operators to validate monitoring technologies and maintenance solutions before system-wide implementation.',
      'Source of information: NRC roller rig testing facility relevant project results (anonymous), supporting field operational data and MBS simulation inputs.',
      'Relevance to the railroad industry: Controlled wheel-rail testing provides a practical means to resolve field uncertainty, refine monitoring thresholds, and validate braking practices prior to deployment, improving maintenance reliability and implementation confidence.',
    ],
    speakers: [
      {
        name: 'Shuwen Gao',
        company: 'National Research Council Canada',
        imageSrc: '/shuwen-gao.jpg',
        title: 'Research Officer, National Research Council Canada (NRC)',
        bio: [
          'Shuwen Gao is a Research Officer at the National Research Council Canada (NRC) with over 18 years of experience across the aerospace, aircraft, and railway industries.',
          'At NRC’s Vehicle and Track Interaction (VTI) team, Shuwen specializes in railway instrumentation, data acquisition, and control system design. Her work integrates digital modeling and field measurements to bridge the gap between design, testing, and real-world performance. By combining instrumentation, control, and railway dynamics, she contributes to advancing understanding of vehicle–track interaction, enabling data-driven solutions that enhance rail safety, performance, and durability.',
          'Shuwen holds a Bachelor’s degree in Electrical Engineering and a Master’s degree in Mechanical Engineering, bringing a multidisciplinary perspective to railway research and innovation.',
        ],
      },
    ],
  },
  {
    topic:
      'Eddy Current Testing and Rail Milling of Severe Defects in Finland: A Case Study',
    abstract: [
      'In the summer 2025 the rails on the Ring Line in Helsinki, Finland were milled using the flexible rail-road-milling-truck from Linsinger. The milling was requested by the Finnish Transport Infrastructure Agency, FTIA, as a test campaign to investigate the potential by rail milling. Deeper damages and deformations in the rails were measured and milled to restore and extend the service lifetime of the rails. The removed rail damages were mainly in the form of head checks at various stages with depths up to 5–6 mm but also corrugation were present in the rails. Simultaneously, the rails were reprofiled from 60E1 to 60E2. With the flexible milling truck, it was possible to restore and reprofile the rails in curves with significant extensions of the rails service lifetime.',
      'Specific examples of defects and eddy current measurements will be shown. The possibilities and limitations by the eddy current measuring method is evaluated through examples. The presentation covers monitoring of rail conditions, needed milling, results, evaluation and business cases in connection to the restoration and extended service lifetime of the milled rails. Finally, the potential savings and benefits by adopting a general data-driven condition-based milling strategy in Finland is presented.',
    ],
    speakers: [
      {
        name: 'Carsten Rasmussen',
        company: 'Linsinger',
        imageSrc: '/carsten-rasmussen.jpg',
        title: 'Rail Maintenance and Innovation Specialist, Linsinger',
        bio: [
          'Carsten Jörn Rasmussen is Rail Maintenance and Innovation Specialist at Linsinger. Carsten has more than 25 years of railway experience concentrated on rail steel, rail profile, and all aspects of rail maintenance. He was the engineering supervisor of the rails in Denmark for 12 years, a period during which the number of rail breaks was reduced by more than 80%.',
          'Carsten has worked for the past 5 years as a consultant, analyzing, troubleshooting, and identifying rail defects and recommending rail maintenance strategies. He holds a Master of Science in Mechanical Engineering from the Technical University of Denmark.',
        ],
      },
    ],
  },
  {
    topic:
      'Experiences with Grinding and Milling in North America – A Supplier’s View',
    abstract: [
      'Although rail milling and rail grinding are core maintenance technologies on many continents, rail milling so far has found only limited application areas in North America despite several suppliers offering milling services (with different milling technologies).',
      'In general, rail maintenance aims at creating a damage-free rail surface in combination with a defined target rail profile. However, due to specific technological strengths and limitations grinding and milling achieve this goal quite differently. As rail grinding was exclusively used in North America for the last decades, specific strategies and approaches were developed and implemented that make the introduction of rail milling more challenging compared to other continents. Furthermore, assessing the grinding process it is sometimes challenging to make an apples-to-apples comparison because of the subtle (and occasionally significant) technological differences between different grinding machines. This presentation will look (specifically) at the supplier experience of offering milling and grinding services to a North American transit system highlighting the successes, lessons learned and frustrations. Lastly, the paper will discuss opportunities to improve future RFPs so that transit systems are better positioned to obtain the technologies best suited to their rail maintenance requirements.',
    ],
    speakers: [
      {
        name: 'Richard Stock',
        company: 'Plasser',
        imageSrc: '/richard-stock.jpg',
        title:
          'Global Head of Rail Solutions, Plasser American / Plasser & Theurer',
        bio: [
          'Richard Stock is Global Head of Rail Solutions for Plasser American and Plasser & Theurer where he has strategic responsibility for the topics of rail maintenance, rail welding, and rail measurements.',
          'Richard started his railroad career in the R&D department at voestalpine in Austria where he was responsible for rail grade selection, wear and RCF-related issues. During his 12 years at voestalpine, he was temporarily seconded to KELSAN Technologies (now L.B. Foster Rail Technologies) in Vancouver to further research collaboration between Kelsan/LB Foster and voestalpine. He subsequently worked for L.B. Foster Rail Technologies as Rail Technology Manager, where he was responsible for various R&D processes and projects, managing university collaborations and technical customer interaction. He then became Milling Technology Manager for LINSINGER and LINMAG. He also led the Application Engineering group to support and analyze field trials. He then moved to Plasser American / Plasser & Theurer, where he is Global Head of Rail Solutions.',
          'Richard holds a master’s and PhD in material sciences from the University of Leoben, Austria. He is a member of AREMA Committee 4, Committee 2, and the APTA – Track and Noise/Vibration Technical Forum. Richard is also part of the leadership team of the ICRI (International Collaborative Research Initiative).',
        ],
      },
    ],
  },
  {
    topic:
      'Safety Through Stability: A Conicity-Driven Analysis of Rail Grinding and L/V Force Reduction – Field Evidence from the Delhi Metro Network',
    abstract: [
      'Co-presenters: Manuj Singhal, Director (Infrastructure), and Atul Bhoosan Khare — Delhi Metro Rail Corporation; and Aishwary Vardhan Pandey, Research and Development Manager — Vandhana International Pvt Ltd',
      'Delhi Metro Rail Corporation (DMRC), India’s largest and most intensively used rapid transit network, carries over 2.6 billion passengers annually and depends on highly stable wheel-rail interaction to maintain stringent safety margins under dense traffic operations. Among the parameters governing safety critical vehicle behaviour, equivalent conicity, rolling radius difference (RRD) and the associated nonlinearity parameter (NP) play central roles in determining steering stability, hunting susceptibility and the overall dynamic response of metro rolling stock. Yet field-validated assessments of how these parameters evolve under real operating conditions remain limited in the context of urban rail systems.',
      'This study presents a field-driven evaluation of how changes in wheel-rail contact geometry influence equivalent conicity and nonlinearity behaviour in DMRC. Rail profiles from twenty plus track sections were measured using a twin-head MiniProf device under worn and restored (post-reprofiling using rail grinding) conditions. These profiles were analysed to quantify contact patch evolution, RRD trends, conicity variation with lateral displacement and the resulting nonlinearity parameter, a recognised indicator of steering sensitivity and nonlinear stability boundaries.',
      'Results show that progressive rail wear leads to increased conicity, amplified RRD gradients, and elevated nonlinearity parameter values, conditions that reduce stability margins and increase the likelihood of nonlinear steering and hunting onset on tangent track. Restored profiles, by contrast, reduce conicity, regulate RRD behaviour and stabilise nonlinearity parameter variation, thereby suppressing nonlinear tendencies and improving vehicle dynamic stability.',
      'Overall, this study demonstrates a clear empirical relationship between rail profile condition, conicity behaviour and nonlinear vehicle dynamics, reinforcing the value of contact-geometry-based monitoring in modern metro safety management. Given DMRC’s operational scale, disseminating these findings provides an evidence-based framework to support global metro systems in refining stability assessment methodologies and enhancing safety performance under high-density operating conditions.',
      'Modern metro systems operate at the intersection of high passenger demand, strict safety requirements and tight operational margins. Within this environment, the wheel-rail interface plays a decisive role in determining system performance, yet its behaviour is highly sensitive to changes in rail profile geometry. As rails wear, the resulting change in equivalent conicity can amplify lateral forces, elevate L/V ratios, accelerate wear and increase susceptibility to hunting instability — ultimately affecting both safety and maintenance costs across the network.',
      'Rail reprofiling using rail grinding is one of the few maintenance interventions capable of directly reshaping the wheel-rail contact geometry. While its benefits for surface defect mitigation are well established, its influence on dynamic stability parameters, particularly conicity and the resulting L/V force behaviour, remains insufficiently quantified in the context of urban metro operations and high-frequency service patterns.',
      'The Delhi Metro Rail Corporation (DMRC), widely regarded for its engineering excellence and condition-based maintenance strategies, provides an ideal setting to examine this relationship. With over 8 million passengers using the metro daily, this analysis is essential for long term passenger safety. This study investigates the mechanistic pathway from rail wear → conicity evolution → L/V response, using measured profiles from ten tangent track segments before and after grinding. Equivalent conicity curves were derived from wheel-rail geometry and corresponding L/V ratios were computed using linear creep-force modelling.',
      'The results reveal a consistent and significant reduction in conicity following grinding, accompanied by a measurable decrease in L/V ratios across all evaluated segments. Worn profiles produced steep conicity gradients with increasing lateral displacement, leading to elevated lateral forces and reduced dynamic stability. Ground profiles, in contrast, restored favourable contact geometry and suppressed L/V force development, thereby enhancing overall system robustness.',
      'By demonstrating how rail geometry correction directly governs lateral force behaviour, this study underscores the critical importance of conicity control for DMRC’s high-frequency operations. Sharing these findings is equally important: the evidence and framework developed here offer metro operators around the world a practical method to evaluate grinding effectiveness, extend asset life and enhance vehicle-track stability using transparent, data-driven metrics derived from real-world field conditions.',
    ],
    speakers: [
      {
        name: 'Manuj Singhal',
        company: 'Delhi Metro Rail Corporation',
        imageSrc: '/manuj-singhal.jpg',
        title: 'Director (Infrastructure), Delhi Metro Rail Corporation',
        bio: [
          'Manuj Singhal is Director (Infrastructure) of DMRC, where he is responsible for maintenance of infrastructure including Civil, Rolling Stock, Track, Traction, Electrical, Signaling, power tie-ups, and environmental initiatives across the 400-kilometer metro network across Delhi and the NCR region (which is the 4th largest network globally excluding China).',
          'Mr. Singhal began his career with National Thermal Power Corporation (NTPC) and thereafter joined the Department of Telecom through the Indian Engineering Service (IES). He has multidisciplinary experience of over three decades in the field of engineering in numerous key positions in the Department of Telecommunications and Delhi Metro Rail Corporation.',
          'He has been spearheading DMRC’s initiative to go Green for meeting the electrical energy requirements. He was involved in strategic planning, planning & co-ordination of Electrical Works for Delhi Metro Phase 3 and 4 projects, and other Metro projects in India.',
          'Mr. Singhal is an Electrical Engineering graduate of the 1993 batch from Delhi College of Engineering (DCE), and has also done his Post Graduation from DCE. He is a Fellow of The Institution of Engineers (India) since 2017 and received the prestigious ‘Eminent Engineers’ Award from The Institution of Engineers (India) in 2024. He has published many technical papers in national and international journals and conferences.',
        ],
      },
      {
        name: 'Atul Bhoosan Khare',
        company: 'Delhi Metro Rail Corporation',
        imageSrc: '/atul-khare.jpg',
        title: 'Executive Director, Delhi Metro Rail Corporation',
        bio: [
          'Mr. Atul B Khare is a distinguished professional in the Indian Railway Service of Engineers, renowned for his extensive expertise in rail infrastructure management, policy formulation, and implementation. With a rich background in mega project management, he has successfully led the construction and maintenance of metro, heavy haul, and semi-high-speed rail systems at senior management levels.',
          'Notably, Mr. Khare executed a landmark project involving the design and construction of a 353 km double line for freight rail traffic, which included a state-of-the-art Central Operation Control & Command Centre equipped with SCADA technology and a large video wall. Currently, he is engaged in civil construction for approximately 25 km of underground and elevated metro lines in New Delhi and Mumbai, along with the installation of Track with vibration mitigation measures for a 150 km metro rail network and associated with track maintenance of about 400 km of metro network in Delhi Metro Rail Corporation with specific focus on Rail grinding, Milling, and vibration mitigation.',
          'An advocate of innovation, Mr. Khare focuses on AI-enabled asset management systems, enhancing operational speed, optimizing resources, and developing cutting-edge technologies across various disciplines. His foresight into emerging rail markets and technologies underscores his commitment to advancing India’s railway infrastructure encompassing metro, heavy haul, and semi-high-speed rail systems.',
        ],
      },
      {
        name: 'Aishwary Vardhan Pandey',
        company: 'Vandhana International Pvt Ltd',
        imageSrc: '/aishwary-vardhan-pandey.jpg',
        title:
          'Research and Development Manager, Vandhana International Pvt Ltd',
        bio: [
          'Aishwary Vardhan Pandey is a railway enthusiast working as R&D Manager with Vandhana International Pvt Ltd., a premier consultancy in railway track engineering, offering strategic and operational support to global rail technology leaders across India and South East Asia. He holds over 6 years of research and industry experience in structure-property correlation, material characterization and structural integrity assessment. In his current role, he is involved in various research programs for Indian passenger, freight and rapid transit networks for rail life extension.',
          'His technical skills span SEM and XRD-based microstructural analysis, profilometry, mechanical testing (static, fatigue, and high-temperature), failure analysis and finite element modelling.',
          'He holds a Ph.D. in Mechanical Engineering from Indira Gandhi Centre for Atomic Research.',
        ],
      },
    ],
  },
  {
    topic:
      'Understanding Ground-Borne Vibration Propagation for Resilient Metro Infrastructure: Lessons from Delhi Metro’s Expansion',
    abstract: [
      'Co-presenters: Pradeep Kumar Sharma — Delhi Metro Rail Corporation; and Aishwary Vardhan Pandey, Research and Development Manager — Vandhana International Pvt Ltd',
      'Delhi, the capital city of India, with a population exceeding 34 million, is among the world’s most densely populated urban regions. The Delhi Metro Rail Corporation (DMRC) operates India’s largest urban rail network — nearly 400 route km — and continues to expand its reach to meet growing mobility needs sustainably. Under the ongoing Phase IV expansion, (1) the Janakpuri West – Majlis Park – RK Ashram extension of Line 8 (Magenta Line) and (2) the Tughlakabad to Aerocity extension of Line 10 (Golden Line) include approximately 27 km of tunnels passing through densely developed areas containing residential buildings, hospitals, educational institutions, and heritage structures that are particularly sensitive to ground-borne vibrations. During metro operations, these train-induced ground-borne vibrations generated at the rail-wheel interface propagate through the tunnel structure and surrounding soil, reaching the ground surface and adjacent buildings. This transmission can induce structural vibrations and secondary noise, potentially causing discomfort or disturbance to nearby occupants.',
      'The objective of the present study is to measure and evaluate train-induced ground-borne vibrations and assess their propagation characteristics from the tunnel to adjacent buildings along the corridor. Ambient vibration measurements were carried out to establish baseline vibration levels, while soil transmissibility and building transfer functions were determined through drop-weight tests conducted at different locations comprising different soil and structural conditions along the selected metro lines. The collected data provides a detailed understanding of vibration attenuation patterns and structural response behavior across varying geotechnical profiles and building typologies. These insights have been used to identify critical zones requiring vibration mitigation. Furthermore, the performance of existing vibration mitigation systems in operational sections was assessed to support the design of site-specific vibration isolation measures for the Line 8 and Line 10 extensions.',
      'This first-of-its-kind study in India reflects DMRC’s proactive approach to integrating vibration impact assessment into the design process. The framework developed through this research marks an important step toward predictive vibration management and optimized track design. Building on this foundation, DMRC continues to deepen its analysis to further enhance comfort for passengers and ensure a quieter, more resilient urban environment for the residents of Delhi.',
    ],
    speakers: [
      {
        name: 'Pradeep Kumar Sharma',
        company: 'Delhi Metro Rail Corporation',
        imageSrc: '/pradeep-kumar-sharma.jpg',
        title: 'Senior Civil Engineer, Delhi Metro Rail Corporation',
        bio: [
          'Pradeep Kumar Sharma is a senior civil engineering professional with more than 30 years of experience in railway and metro infrastructure, including track engineering, maintenance systems, and large-scale O&M management. An Indian Railway Service of Engineers (1994 batch) officer with an M.Tech in Civil Engineering from IIT Delhi, he has served in key technical and managerial positions in Indian Railways and Delhi Metro Rail Corporation. His work spans permanent way engineering, structural inspection and maintenance, depot and station facility management, contract administration, and technical oversight of metro corridor development.',
          'He has led major maintenance frameworks for multiple metro corridors, supervised infrastructure upkeep across depots, stations, ancillary buildings, and RSS installations, and contributed to planning and execution of track works for DMRC’s Phase-IV projects. His professional interests include ballastless track system design, vibration attenuation, asset management, structural reliability, and maintenance optimization in urban rail systems.',
        ],
      },
      {
        name: 'Aishwary Vardhan Pandey',
        company: 'Vandhana International Pvt Ltd',
        imageSrc: '/aishwary-vardhan-pandey.jpg',
        title:
          'Research and Development Manager, Vandhana International Pvt Ltd',
        bio: [
          'Aishwary Vardhan Pandey is a railway enthusiast working as R&D Manager with Vandhana International Pvt Ltd., a premier consultancy in railway track engineering, offering strategic and operational support to global rail technology leaders across India and South East Asia. He holds over 6 years of research and industry experience in structure-property correlation, material characterization and structural integrity assessment. In his current role, he is involved in various research programs for Indian passenger, freight and rapid transit networks for rail life extension.',
          'His technical skills span SEM and XRD-based microstructural analysis, profilometry, mechanical testing (static, fatigue, and high-temperature), failure analysis and finite element modelling.',
          'He holds a Ph.D. in Mechanical Engineering from Indira Gandhi Centre for Atomic Research.',
        ],
      },
    ],
  },
  {
    topic: 'State-of-Practice of Low-Impact Frogs in Rail Transit',
    abstract: [
      'Based on TCRP Report 260, “Low-Impact Frog Design Primer and Research Roadmap” (anticipated publication February 2026).',
      'The presentation will:',
      '•  Introduce the concept of a low-impact frog as a frog design that reduces impact forces, noise, and vibration compared to standard RBM frog designs.',
      '•  Identify the common low-impact frogs in use in the rail transit industry — moveable point frogs, spring frogs, flange-bearing frogs, and jump frogs. For each low-impact frog, discuss the implementation considerations such as speed restrictions, footprint, cost, maintenance, and potential noise and vibration benefits.',
      '•  Introduce the low-impact design features that can be incorporated into a traditional RBM frog to reduce impact forces and provide noise and vibration benefits.',
      '•  Discuss transit agencies’ current experience with different low-impact frog designs based on recent interviews.',
      'Relevance to the industry: Frogs are a track component that see some of the highest impact forces at the wheel-rail interface. This presentation will be based on recent research that documents what low-impact frog options are available to transit agencies today to reduce impact forces, improve life-cycle costs, and improve state-of-good-repair.',
    ],
    speakers: [
      {
        name: 'Shannon McKenna',
        company: 'Cross-Spectrum Acoustics',
        imageSrc: '/shannon-mckenna.jpg',
        title: 'Principal Associate, Cross-Spectrum Acoustics',
        bio: [
          'Shannon McKenna is Principal Associate at Cross-Spectrum Acoustics. An INCE Board Certified P.E., she brings 15 years of experience working on rail transit noise and vibration projects to Cross-Spectrum Acoustics. Her experience includes organizing and carrying out detailed noise and vibration measurement programs to document existing noise and vibration conditions and to predict future levels after the construction of new transit lines, and drafting noise and vibration impact assessments following National Environmental Protection Act (NEPA) and California Environmental Quality Act (CEQA) guidelines that withstand legal scrutiny. She has also participated in transportation noise and vibration research projects, including as principal investigator looking at the noise and vibration generated by different special trackwork designs. She is practiced at communicating complex technical analyses to a public audience.',
          'She holds a B.S. in General Engineering from Harvey Mudd College in Claremont, CA, and an M.S. in Electrical Engineering from Stanford University in Palo Alto, CA. Ms. McKenna is a registered Professional Engineer in the states of California, Washington, and Illinois, and is an active member of the Transportation Research Board committee on Transportation-Related Noise and Vibration (AEP 80) and the American Public Transportation Association (APTA) technical forum on Track, Noise and Vibration. She is certified by the Institute of Noise Control Engineering Board.',
        ],
      },
    ],
  },
  {
    topic: 'Lessons from HART: Rail Wheel Problems and Solutions',
    abstract: [
      'Changes in vehicles, stations, and systems, along with procurement and timing of decisions and designs, led to rail wheel problems at the Honolulu Authority for Rapid Transportation (HART). In addition to reviewing what went wrong and how technological, financial, and political factors exacerbated planning, design, and implementation of an expensive new-start elevated, automated urban rail system, this case provides an opportunity to learn more about transit planning, risk management, and project implementation. Tools and technologies for the longer-term maintenance and monitoring of the rail-wheel interface — involving sensors and fault-detection systems — will be discussed along with research and development, testing, and training. Research is based on studies and evaluations of the Honolulu system and interviews with system operators, engineers, and technical experts.',
    ],
    speakers: [
      {
        name: 'Karl Kim',
        company: 'University of Hawaii',
        imageSrc: '/karl-kim.jpg',
        title: 'Professor of Urban and Regional Planning, University of Hawaii',
        bio: [
          'Karl Kim is a Professor of Urban and Regional Planning at the University of Hawaii, Executive Director of the National Disaster Preparedness Training Center, and Editor of Transportation Research Interdisciplinary Perspectives. Educated at Brown University and MIT, he is an expert on risk management, technology assessment, and transport planning. He is a Consultant on rail transit and transportation planning and Principal Investigator of University of Hawaii, C-STTAR, and CRISI projects with ENSCO and the Federal Railroad Administration.',
        ],
      },
    ],
  },
  {
    topic:
      'Mitigating Resonant OOR Development in Rail Transit: SIMPACK Multi Body Dynamics Investigation of the 7000 Series',
    abstract: [
      'Wheel out-of-round (OOR) defects degrade ride quality, increase noise and vibration, accelerate maintenance cycles, and raise lifecycle costs. This paper presents a root cause assessment and mitigation options for the accelerated OOR observed on the 7000 Series railcars, which show an increased OOR occurrence rate versus ~5% in legacy fleets — indicating a coupled vehicle–track dynamics mechanism rather than wheel maintenance alone.',
      'The primary focus of this work is a SIMPACK multi-body dynamics (MBD) analysis of the 7000 Series vehicle–truck–wheelset system, used to identify the dynamic conditions that initiate and sustain OOR growth. The SIMPACK model is supported and validated with field observations and is paired with targeted modal/structural characterization and correlation to infrastructure parameters, including track geometry, track stiffness, and direct fixation fastener spacing.',
      'Across analyses, results converge on a dominant speed-dependent resonant response that is repeatedly excited in normal operating service. SIMPACK outputs indicate this response is associated with in-phase longitudinal wheelset motion, increasing wheel–rail longitudinal creep/slip. The resulting differential wear can evolve into stable OOR/polygonization patterns.',
      'The paper concludes with practical mitigation strategies evaluated through the MBD findings, including: (1) primary suspension tuning, (2) wheel truing optimization (intervals and removal targets), and (3) friction management (modifier selection and application practices). Recommendations are prioritized based on expected effectiveness, implementation feasibility, and operational/cost impacts.',
      'Source of research: WMATA 7000 Series OOR Investigation conducted jointly by WMATA and Hatch, including vehicle/track data and SIMPACK-based dynamics analysis.',
      'Relevance to WRI 2026: Provides a data-driven explanation of OOR growth and actionable mitigations to improve wheel/rail interface health, ride quality, and reliability in urban rail systems.',
    ],
    speakers: [
      {
        name: 'Anbo Wang',
        company: 'Hatch',
        imageSrc: '/anbo-wang.jpg',
        title: 'Senior Consultant, Hatch',
        bio: [
          'Dr. Anbo Wang is a Senior Consultant with Hatch. A certified project management professional, Anbo also has extensive project management experience through a variety of projects, including heavy rail metro vehicles, light rail vehicles, and commuter and high-speed railway vehicles.',
          'Anbo is familiar with and experienced in all stages of design and manufacturing for passenger rail vehicles, including carbody, truck (bogie), wheelset, doors, brakes, and coupler systems. He has completed many research projects including lightweight structure development, innovative energy absorption devices, vehicle crashworthiness, and fatigue assessment. He is also skilled in finite element analysis, vehicle dynamics, vehicle-track interactions, structural crashworthiness, structural design, failure analysis, materials science, metallurgy, composite/metal characterization, and additive manufacturing.',
          'He holds a B.S. in Materials Engineering from Tsinghua University in Beijing, and an M.S. and Ph.D. in Materials Science from Worcester Polytechnic Institute in Boston.',
        ],
      },
    ],
  },
  {
    topic:
      'Approach to Wheel-Rail Problems Solution on Metros and Light Rail Systems',
    abstract: [
      'Wheel-rail interaction problems, including wear and rolling contact fatigue, afflict nearly all metros and light rail systems in the world. Sometimes the solution is easy to find; in some other cases a deeper look and long experience are necessary. Consulting for PTAs is not always easy, but as the magic wand doesn’t exist a comprehensive and collaborative approach is needed. Not only must instrumentation and skills be acquired, but managing the system continuously with the greatest care is necessary. The presentation will describe the approach that the author normally applies to help operating companies keep their assets (trains and tracks) under control. Successful cases will be shown together with the golden rules for obtaining durable and tangible results.',
    ],
    speakers: [
      {
        name: 'Andrea Bracciali',
        company: 'AB Consulting',
        imageSrc: '/andrea-bracciali.png',
        title: 'Professor, University of Florence',
        bio: [
          'Prof. Andrea Bracciali has over 30 years of experience in the railway field and has published over 150 papers and a book on railway noise. As a Professor at the University of Florence he lectures on “Rolling Stock Design and Manufacturing” and “Integrated Design of Railway Systems” for the Master Course in Mechanical Engineering on Railway Vehicles Design. Prof. Bracciali also established an engineering consulting company in 1994. He has consulted for many private and public companies focusing on rolling stock, infrastructure, vehicle-track interaction, wheel-rail contact, and running dynamics.',
        ],
      },
    ],
  },
  {
    topic:
      'Big Data for Rail Health Assessment: Utilizing Existing Inspection Technologies to Forecast Rail Condition',
    abstract: [
      'Railroads regularly inspect track for geometry and fatigue to maintain federal compliance and prescribe corrective maintenance. Of increasing interest is how historic inspection data can be used to predict maintenance needs, benefiting asset lifespans and supporting maintenance budget decisions. This presentation showcases how Amtrak is utilizing existing inspection technologies to develop rail health metrics and better assess asset condition using a combined framework.',
      'The framework divides Amtrak’s network into analytical segments that best match maintenance practices. For each analytical segment, several critical rail health metrics are retrieved. This includes rail weight classified using machine learning, accurate vertical and gauge face rail wear values, rail wear rate, rail plugs, fatigue defects, and maintenance history. With combined rail health metrics, segments can be analyzed to define maintenance criticality and plan renewal activities. Here, the framework and its modules are laid out to demonstrate how analytical tools and existing data sources can be better utilized to assess asset condition.',
    ],
    speakers: [
      {
        name: 'Michael Palese',
        company: 'Amtrak',
        imageSrc: '/michael-palese.jpg',
        title: 'Track Engineer, Amtrak',
        bio: [
          'Mike Palese is a track engineer on Amtrak’s clearance, inspection, and testing team, focusing on the research and development of predictive analytics for track maintenance planning. Before joining Amtrak, he earned a Bachelor of Science degree in Physics at Rowan University and Doctoral and Master of Science degrees in Civil Engineering at the University of Delaware.',
        ],
      },
    ],
  },
  {
    topic: 'Modern Component Failures in Rail Transit Environment',
    abstract: [
      'Track infrastructure and rolling stock component failures in the transit environment have unique and important attributes that, left unaddressed, can lead to service failures and potentially derailments. This presentation discusses the current state of important component failures including the technical aspects of material failure mechanisms and unique operating scenarios. Additionally, the presentation discusses example case studies including broken rail from rail base corrosion, collector shoe electrical component failures, and a rail transit wheel failure. Each case study will discuss the investigation process to determine root cause, the impact to operations, and remediation approaches.',
    ],
    speakers: [
      {
        name: 'Joel Hassebrock',
        company: 'Engineering Systems Inc.',
        imageSrc: '/joel-hassebrock.jpg',
        title:
          'Senior Consultant and Regional Operations Manager, Engineering Systems Inc. (ESi)',
        bio: [
          'Joel D. Hassebrock is a Senior Consultant and Regional Operations Manager at Engineering Systems Inc. (ESi) in Omaha, Nebraska. A licensed metallurgical and materials engineer, he brings more than 15 years of experience specializing in failure analysis, metallurgical evaluation, and materials testing across the rail, industrial, and manufacturing sectors.',
          'Joel’s technical background includes extensive work with railroad wheels, axles, bearings, castings, welds, corrosion mechanisms, and mechanical testing. He is highly proficient in advanced analytical methods, including scanning electron microscopy (SEM), optical microscopy, optical emission spectrometry, hardness testing, and servo-hydraulic test systems.',
          'He holds a B.S. in Materials Engineering from Iowa State University, an MBA from Creighton University, and is currently pursuing an M.S. in Welding Engineering at The Ohio State University.',
        ],
      },
      {
        name: 'Anna Banks',
        company: 'Engineering Systems Inc.',
        imageSrc: '/anna-banks.jpg',
        title: 'Staff Consultant, Engineering Systems Inc. (ESi)',
        bio: [
          'Anna J. Banks is a Staff Consultant at Engineering Systems Inc. (ESi) in Omaha, Nebraska. She is a skilled metallurgical engineer with 9 years of experience in metallurgical analysis and condition assessment across the transportation, power, process, pipeline, and manufacturing industries.',
          'Her technical skills span metallography, scanning electron microscopy (SEM) analysis, mechanical testing, corrosion analysis, weld evaluations, high-temperature damage mechanisms, and adherence to industry standards such as International Organization for Standardization (ISO) and International Automotive Task Force (IATF).',
          'She holds a B.S. in Metallurgical and Materials Engineering from Colorado School of Mines.',
        ],
      },
    ],
  },
  {
    topic:
      'Optimizing Track Maintenance Limits Using Validated Vehicle–Track Interaction Simulations',
    abstract: [
      'Transit agencies rely on established maintenance limits for track geometry and rail wear to ensure safe and comfortable operations. While these limits provide important safeguards, they are often based on generalized assumptions that may not fully reflect the dynamic behavior of specific vehicle fleets operating over particular infrastructure conditions. As a result, maintenance limits and associated speed restrictions may in some cases be more conservative than necessary, leading to increased maintenance costs and reduced operational efficiency.',
      'This presentation describes the use of validated vehicle/track interaction “Digital Twin” simulations on the Massachusetts Bay Transportation Authority (MBTA) network to quantitatively evaluate the operational and safety implications of track geometry degradation and rail wear. The study began with instrumented field testing of multiple vehicle types operating over representative track segments. Vehicle response measurements were combined with detailed track geometry and rail profile data to develop high-fidelity multi-body dynamics simulation models representing the operating fleet.',
      'Simulation models were validated by comparing predicted vehicle responses to measured field data. Once validated, the models were used to simulate vehicle performance over a range of hypothetical track perturbations and rail wear scenarios extending outside of currently defined maintenance limits.',
      'Simulation outputs were evaluated using established performance indicators including derailment risk metrics and passenger ride quality thresholds. By examining how these performance indicators evolve as track conditions degrade, the study identifies data-driven practical limits at which safety or ride quality concerns begin to emerge. These results enable the development of maintenance limits tailored to the specific vehicle types and operating conditions of the MBTA network.',
      'Implementation of these findings has enabled the MBTA to safely expand certain track geometry and rail wear maintenance limits, eliminating unnecessary slow orders while maintaining compliance with safety and ride quality requirements. This has resulted in improved service efficiency and reduced maintenance costs associated with previously conservative limits.',
      'The results illustrate how validated digital twin simulations provide a robust, data-driven framework for evaluating and optimizing maintenance and operational limits. By enabling property-specific assessments grounded in measured data and validated models, this approach supports safer, more efficient, and more cost-effective transit operations.',
    ],
    speakers: [
      {
        name: 'Cory Hogan',
        company: 'ENSCO Rail',
        imageSrc: '/cory-hogan.jpg',
        title: 'Director – Vehicle Dynamics Studies, ENSCO Rail, Inc.',
        bio: [
          'Cory started his railway career as a research assistant for a Federal Railroad Administration-funded project to develop a non-contacting vertical track deflection measurement system from a loaded hopper car at full track speed. In 2007, Mr. Hogan joined TÜV Rheinland Rail Sciences, Inc., performing duties including software development, data processing, vehicle dynamics simulations with focus on derailment investigations, homologation, and on-track testing and data acquisition. He also served as the North and South American technical support for VAMPIRE vehicle dynamics software. In 2014, he joined ENSCO Rail, Inc., where he has continued to support efforts involving vehicle/track interaction measurements and simulations with focus on automated predictive analytics intended to prevent derailments and provide information for preventative maintenance. Over his career, Cory has assisted in investigations and cause finding for dozens of derailments including investigations for every Class I North American railroad. He has designed and carried out testing for vehicle homologation including vehicle dynamics and noise testing. He has also developed instrumentation and software for custom vehicle dynamics monitors, instrumented wheelsets, and automated predictive vehicle dynamics simulations using measured track data.',
          'Cory holds B.S. and M.S. degrees in Mechanical Engineering from the University of Nebraska at Lincoln.',
        ],
      },
    ],
  },
];

const SpeakerCard = ({ name, company, imageSrc, title, bio = [] }) => {
  const slug = generateSlug(name);

  return (
    <div
      id={`bio-${slug}`}
      className="flex flex-col mt-16 mb-0 lg:flex-row lg:items-start xl:my-16"
    >
      <div className="w-full mb-20 md:w-2/5 xl:w-1/6 xl:mx-24 lg:mb-8">
        <div className="relative">
          <div className="overflow-hidden border-t-4 aspect-w-2 aspect-h-1 xl:w-full border-wri-blue">
            <img
              src={imageSrc}
              alt={name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute left-0 right-0 transform translate-y-1/2 bg-white rounded shadow-md -bottom-5 xl:w-5/6 xl:mx-auto">
            <div className="p-4 text-center">
              <p className="font-bold text-wri-dark-blue lg:text-2xl">{name}</p>
              <p className="text-gray-600">{company}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-3/5 md:mx-12 xl:mt-8">
        {title && <h3 className="mb-2 text-xl font-bold">{title}</h3>}
        <div className="flex flex-col gap-6 lg:mr-20">
          {bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

const AbstractSection = ({ topic, abstract = [] }) => {
  return (
    <div className="flex flex-col mt-16 lg:flex-row lg:items-start">
      <div className="flex justify-center w-full mb-8 md:w-1/5 lg:mx-24 lg:mt-20">
        <div className="flex flex-col items-center">
          <figure>
            <Image
              src="/rail-transit-icon-blue.svg"
              width={360}
              height={200}
              alt="Rail Transit icon"
              className="w-full fill-current text-wri-blue"
            />
          </figure>
          <h2 className="mt-4 text-2xl text-wri-blue">ABSTRACT</h2>
        </div>
      </div>
      <div className="w-full p-8 md:w-4/5 bg-wri-blue/20">
        <h2 className="mb-6 text-2xl font-bold text-wri-blue">{topic}</h2>
        <div className="flex flex-col gap-6 pb-24">
          {abstract.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

const TopicLayout = ({ speakers, topic, abstract }) => {
  return (
    <div className="mb-8 overflow-hidden bg-white rounded-lg shadow-md">
      {speakers.map(speaker => (
        <SpeakerCard key={generateSlug(speaker.name)} {...speaker} />
      ))}
      <AbstractSection topic={topic} abstract={abstract} />
    </div>
  );
};

const BiosAbstractsRT = () => {
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
      <h2 className="text-5xl font-normal leading-normal text-center pb-11">
        <span className="text-wri-blue">
          <b>Rail Transit Seminar</b>
        </span>{' '}
        2026 Speaker Bios/Abstracts
      </h2>
      {topics.map((topicGroup, index) => (
        <TopicLayout
          key={index}
          speakers={topicGroup.speakers}
          topic={topicGroup.topic}
          abstract={topicGroup.abstract}
        />
      ))}
    </section>
  );
};

export default BiosAbstractsRT;
