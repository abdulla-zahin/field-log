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

const cases = [
  { title: 'Box & earth-pit location checks', tag: 'LOCATION CONTROL', detail: 'Cross-checking location and readiness against coordinated information before protection or follow-on work. The record is about a clear reference and accountable follow-up—not an unverified completion claim.' },
  { title: 'Basement service coordination', tag: 'INTERFACE CONTROL', detail: 'Reviewing service levels, routing interfaces and access conditions in basement and plant areas; then routing the point to the responsible trade for confirmation.' },
  { title: 'Roof / service-roof reviews', tag: 'SEQUENCE CONTROL', detail: 'Turning service-zone observations into practical, owned actions before access becomes constrained by the next activity.' },
  { title: 'Daily field log', tag: 'TRACEABILITY', detail: 'Tracking trade manpower, shift activity, inspection references, open coordination points, photo evidence and the next action so handovers do not lose the technical thread.' }
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

const caseList = document.querySelector('#case-study-list');
cases.forEach((item) => {
  const el = document.createElement('article');
  el.className = 'case-card';
  el.innerHTML = `<div class="case-card-header"><div><span>${item.tag}</span><h3>${item.title}</h3></div><button aria-label="Show case study">+</button></div><p>${item.detail}</p>`;
  el.addEventListener('click', () => el.classList.toggle('open'));
  caseList.appendChild(el);
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
