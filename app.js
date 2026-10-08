const timeline = [
  { year: '2016—2021', title: 'Mechanical Engineering', subtitle: 'PRIST University · B.Tech', detail: 'The base layer: mechanics, systems thinking and the patience to work through real technical problems.' },
  { year: '2022—2023', title: 'First site and commercial exposure', subtitle: 'Aviation maintenance → Sales Engineering', detail: 'Early experience across maintenance, engineering sales and client-facing technical conversations made one thing clear: engineering has to work commercially and operationally, not only on paper.' },
  { year: '2023—2024', title: 'Business Analytics', subtitle: 'Northumbria University · MSc', detail: 'Added the data lens—learning how to turn incomplete information into a decision, a pattern that now shows up in every site coordination issue.' },
  { year: '2024—2026', title: 'Coordination, BOQs and project systems', subtitle: 'SUSWEN · Pearlsoft · Infinity Max', detail: 'Built the bridge between technical-commercial work: BOQs, quotations, prequalification, project coordination and practical stakeholder follow-up.' },
  { year: '2025', title: 'AMPP Coating Inspector Level 2', subtitle: 'Quality and inspection discipline', detail: 'A stronger quality mindset: verify the condition, work to the standard, retain evidence and do not close an issue by assumption.' },
  { year: '2026—Now', title: 'MEP site execution', subtitle: 'Aroma · Nshama Address Grand Residence', detail: 'Now working in live contractor-side MEP coordination: connecting drawings, site conditions, specialist teams, inspections and Civil release into a traceable execution route.' }
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

const timelineList = document.querySelector('#timeline-list');
timeline.forEach((item) => {
  const el = document.createElement('article');
  el.className = 'timeline-item';
  el.innerHTML = `<span class="timeline-year">${item.year}</span><div><h3>${item.title}</h3><p>${item.subtitle}</p></div><button class="timeline-toggle" aria-label="Show details for ${item.title}">+</button><div class="timeline-detail">${item.detail}</div>`;
  el.addEventListener('click', () => el.classList.toggle('open'));
  timelineList.appendChild(el);
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
