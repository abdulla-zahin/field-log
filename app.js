const chapters = [
  { dates: '2016—2021', mark: 'ME', type: 'FOUNDATION', title: 'Mechanical Engineering', subtitle: 'PRIST University · B.Tech', story: 'The base layer: mechanics, systems thinking and the patience to work through technical problems properly.', worked: ['Built the engineering foundation behind later site and commercial work.', 'Learned to approach systems as connected parts, not isolated tasks.'], built: 'Technical grounding and systems thinking.' },
  { dates: '2022', mark: 'AAG', type: 'FIRST ROLE', title: 'AAG Centre for Aviation Training', subtitle: 'Workshop and simulator environment', story: 'First role after college, joining while an Airbus A320neo 2.0 flight-simulator environment was being developed from scratch.', worked: ['Received training on how flight systems work.', 'Supported the workshop and storage setup within a new technical environment.', 'Worked alongside an international group of colleagues.'], built: 'Confidence around complex systems and unfamiliar technical environments.' },
  { dates: 'Aug 2022—Feb 2023', mark: 'PS', type: 'COMMERCIAL', title: 'Plustech Systems & Solutions', subtitle: 'Sales Engineer', story: 'A first corporate, office-based role that showed how much engineering work depends on controlled information and follow-through.', worked: ['Followed documentation, quotations, BOQs and payment-related records.', 'Prepared and tracked technical-commercial information for enquiries and proposals.', 'Started using Excel and independent research to make work more structured.'], built: 'Commercial discipline and a growing business-analysis mindset.' },
  { dates: '2023—2024', mark: 'UK', type: 'STUDY / PIVOT', title: 'MSc Business Analytics', subtitle: 'Northumbria University · United Kingdom', story: 'A deliberate move to add structured analysis to an engineering background and build a wider direction independently.', worked: ['Worked alongside study and served as class representative in the final semester.', 'Led three semester projects.', 'Achieved 80% in the third semester, leading to a real-world group project as group lead.'], built: 'Analytical structure, communication and project leadership.' },
  { dates: '2024—2026', mark: 'SE', type: 'COORDINATION', title: 'SUSWEN', subtitle: 'Business development and project coordination support', story: 'A parallel coordination chapter that kept technical-commercial work connected to people, documents and client conversations.', worked: ['Supported small coordination tasks and client meetings.', 'Worked with BOQs, reports and project documentation.', 'Helped keep updates and follow-up visible across workstreams.'], built: 'Practical coordination and stakeholder follow-through.' },
  { dates: '2025', mark: 'PT', type: 'ANALYSIS', title: 'Pearlsoft Technologies', subtitle: 'Junior Business Analyst', story: 'A fully office-based business-analysis role that sharpened how requirements become workflows, tests and delivery actions.', worked: ['Worked with requirements documentation, workflows and wireframes.', 'Supported UAT and Jira-based follow-up.', 'Learned that analysis is strongest when it stays connected to technical, practical work.'], built: 'Requirement clarity and structured problem definition.' },
  { dates: '2025—2026', mark: 'IM', type: 'OWNERSHIP', title: 'Infinity Max Contracting', subtitle: 'Business Development Manager', story: 'The chapter where commercial and operational responsibilities came through one working path—from quotations to people and client representation.', worked: ['Handled BOQs, quotations, payments and client representation.', 'Coordinated with main contractors and followed contracting opportunities.', 'Supported labour handling, site administration and manpower planning.'], built: 'Operational ownership across cost, people and coordination.' },
  { dates: '2025', mark: 'AM', type: 'CREDENTIAL', title: 'AMPP / NACE', subtitle: 'Coating Inspector Levels 1 & 2', story: 'A deliberate step toward stronger technical credibility and inspection discipline.', worked: ['Completed both levels on the first attempt.', 'Added a standards-led approach to condition checks, evidence and quality records.'], built: 'Inspection awareness and quality discipline.' },
  { dates: 'Jun 2026—Now', mark: 'AR', type: 'CURRENT CHAPTER', title: 'Aroma International Building Contracting', subtitle: 'MEP Engineer', current: true, story: 'The reset: a live MEP role where engineering, commercial awareness, coordination and analytical thinking meet on site.', worked: ['Working in contractor-side MEP coordination and execution follow-up.', 'Applying drawing review, site verification and structured follow-through in a live environment.', 'Live field-board evidence is recorded below.'], built: 'A working site-execution mindset.' }
];

const fieldControls = [
  { title: 'Location verification', tag: 'ROUTINE CONTROL', detail: 'Boxes, earth pits and related provisions cross-checked against coordinated references when required.' },
  { title: 'Service-interface coordination', tag: 'ROUTINE CONTROL', detail: 'Basement, roof and service-area interfaces reviewed with the relevant trade as work develops.' },
  { title: 'Sequence and access review', tag: 'ROUTINE CONTROL', detail: 'Open points noted before follow-on work reduces access or changes the working sequence.' }
];

const proofOfWork = { title: 'Daily field log', tag: 'PROOF OF WORK', detail: 'A live working record of manpower, shift activity, inspection references, open coordination points, photo evidence and the next action—so handovers do not lose the technical thread.' };

const projectNotes = [
  { tag: 'TECHNICAL ENVIRONMENT', title: 'A320neo simulator environment', subtitle: 'AAG Centre for Aviation Training · 2022', context: 'An early technical workplace, joined while the simulator environment and its workshop/storage support were being established.', contribution: 'Received aircraft-system exposure and supported the working environment alongside an international team.', boundary: 'Presented as technical-environment and setup support, not aircraft maintenance certification or simulator delivery ownership.' },
  { tag: 'COMMERCIAL / MANPOWER SUPPORT', title: 'Al Maktoum International Airport', subtitle: 'Infinity Max Contracting · 2025—2026', context: 'A large aviation-infrastructure opportunity that brought commercial follow-through, contractor interfaces and manpower planning into one working stream.', contribution: 'Supported BOQ, client/contractor follow-up and manpower planning within the contracting workflow.', boundary: 'Presented as commercial and coordination support only; it does not claim direct package execution.', link: { href: 'https://dubaiairports.ae/corporate/our-story/dwc-dubai-world-central', label: 'Public project context ↗' } },
  { tag: 'PREQUALIFICATION / TENDER SUPPORT', title: 'DAMAC Hills 2', subtitle: 'Infinity Max Contracting · 2025—2026', context: 'A residential contracting opportunity handled through submission and commercial-preparation work.', contribution: 'Supported prequalification, BOQ/tender preparation and proposal coordination.', boundary: 'Presented as prequalification and proposal support only; it does not claim site delivery or direct execution.', link: { href: 'https://www.damacproperties.com/en-us/communities/damac-hills-2/projects/evergreens/', label: 'Public project context ↗' } }
];

const tools = [
  { name:'Drawing & site verification', category:'site', desc:'Coordinated-drawing checks, provisions, access and sequence.' },
  { name:'MEP coordination', category:'site', desc:'HVAC, plumbing, drainage, fire and cross-trade interfaces.' },
  { name:'Inspection records', category:'site', desc:'Hold points, photo evidence, IR follow-up and closure status.' },
  { name:'Civil release controls', category:'site', desc:'Verification points before shuttering, reinforcement or finishing closes access.' },
  { name:'BOQ & commercial review', category:'analysis', desc:'Quantities, scope clarity and technical-commercial coordination.' },
  { name:'Excel & Power BI', category:'analysis', desc:'Clean field information, trackers and decision-ready reporting.' },
  { name:'SQL & Python', category:'analysis', desc:'Growing toolkit for structured data, checks and automation.' },
  { name:'Revit / BIM learning', category:'engineering', desc:'MEP model literacy, service routing and coordination context.' },
  { name:'AutoCAD', category:'engineering', desc:'Drawing review, mark-ups and practical site references.' },
  { name:'AMPP inspection practice', category:'engineering', desc:'Condition verification, standards, records and quality discipline.' },
  { name:'Mechanical systems', category:'engineering', desc:'Engineering grounding across site execution and maintenance.' },
  { name:'Stakeholder alignment', category:'analysis', desc:'Make the issue, owner, decision and next action clear.' }
];

const storyTree = document.querySelector('#story-tree');
chapters.forEach((item) => {
  const el = document.createElement('article');
  el.className = `story-branch${item.current ? ' current' : ''}`;
  el.innerHTML = `<span class="story-dates">${item.dates}</span><span class="story-node" aria-hidden="true">${item.mark}</span><div class="story-summary"><span class="story-type">${item.type}</span><h3>${item.title}</h3><p>${item.subtitle}</p></div><button class="story-toggle" aria-label="Open story for ${item.title}" aria-expanded="false">+</button><div class="story-detail"><p>${item.story}</p><div><span>WHAT I WORKED ON</span><ul>${item.worked.map((point) => `<li>${point}</li>`).join('')}</ul></div><div class="story-built"><span>WHAT THIS CHAPTER BUILT</span><strong>${item.built}</strong></div></div>`;
  el.addEventListener('click', () => {
    const open = el.classList.toggle('open');
    el.querySelector('.story-toggle').setAttribute('aria-expanded', String(open));
  });
  storyTree.appendChild(el);
});

const fieldWorkList = document.querySelector('#field-work-list');
fieldControls.forEach((item) => {
  const el = document.createElement('article');
  el.className = 'field-control';
  el.innerHTML = `<span>${item.tag}</span><h3>${item.title}</h3><p>${item.detail}</p>`;
  fieldWorkList.appendChild(el);
});

const proof = document.createElement('article');
proof.className = 'proof-card';
proof.innerHTML = `<div class="proof-card-header"><div><span>${proofOfWork.tag}</span><h3>${proofOfWork.title}</h3></div><button aria-label="Show daily field log detail">+</button></div><p>${proofOfWork.detail}</p>`;
proof.addEventListener('click', () => proof.classList.toggle('open'));
fieldWorkList.appendChild(proof);

const projectNoteGrid = document.querySelector('#project-note-grid');
projectNotes.forEach((item) => {
  const el = document.createElement('article');
  el.className = 'project-note';
  const link = item.link ? `<a href="${item.link.href}" target="_blank" rel="noreferrer">${item.link.label}</a>` : '';
  el.innerHTML = `<span>${item.tag}</span><h3>${item.title}</h3><p class="project-note-subtitle">${item.subtitle}</p><button class="project-note-toggle" aria-label="Open note for ${item.title}" aria-expanded="false">Read note <b>+</b></button><div class="project-note-detail"><p>${item.context}</p><div><span>MY CONTRIBUTION</span><p>${item.contribution}</p></div><div class="project-boundary"><span>ROLE BOUNDARY</span><p>${item.boundary}</p></div>${link}</div>`;
  el.addEventListener('click', (event) => {
    if (event.target.closest('a')) return;
    const open = el.classList.toggle('open');
    el.querySelector('.project-note-toggle').setAttribute('aria-expanded', String(open));
  });
  projectNoteGrid.appendChild(el);
});

const toolGrid = document.querySelector('#tool-grid');
tools.forEach((tool) => {
  const el = document.createElement('article');
  el.className = `tool ${tool.category}`;
  el.innerHTML = `<span>${tool.category}</span><h3>${tool.name}</h3><p>${tool.desc}</p>`;
  toolGrid.appendChild(el);
});
document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach((b) => b.classList.remove('active'));
    button.classList.add('active');
    document.querySelectorAll('.tool').forEach((tool) => tool.classList.toggle('hidden', button.dataset.filter !== 'all' && !tool.classList.contains(button.dataset.filter)));
  });
});
