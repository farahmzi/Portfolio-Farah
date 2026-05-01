/* ══════════════════════════════════════════════════════
   Portfolio — Project Carousel
   ══════════════════════════════════════════════════════ */

const projects = [
  {
    id: '01', total: '05',
    name: 'AtharTech',
    description: [
      'A youth-focused tech initiative I founded to empower Saudi students through design, technology, and innovation — with bootcamps, mentorship, and community programs.'
    ],
    details: [
      { label: 'MISSION', value: 'Make tech education accessible, inspiring, and community-driven', bold: false },
      { label: 'ROLE',    value: 'Founder & Lead Designer — brand, curriculum, programs, partnerships', bold: false },
      { label: 'REACH',   value: '200+ participants, 3+ bootcamps, strategic partnerships', bold: true },
    ],
    tags: [
      { text: 'FOUNDER',   cls: 'tag--teal' },
      { text: 'COMMUNITY', cls: 'tag--pink' },
      { text: 'ED-TECH',   cls: 'tag--light' },
    ],
    cover: {
      style: 'background: linear-gradient(135deg, #7C3AED 0%, #2AB5B8 100%);',
      html: '<span style="color:white;font-family:\'Noto Sans Arabic\',serif;font-size:20px;direction:rtl;padding:24px;text-align:right;">تعلم.. فنبتكر.. لنحدث الأثر</span>',
    },
    galleryClass: 'gallery--athartech',
    images: [
      { src: 'assets/athartech-1.jpg', cls: '' },
      { src: 'assets/athartech-2.jpg', cls: '' },
      { src: 'assets/athartech-3.jpg', cls: 'gallery-img--col-span' },
      { src: 'assets/athartech-4.jpg', cls: 'gallery-img--row-span' },
      { src: 'assets/athartech-5.jpg', cls: '' },
    ],
  },
  {
    id: '02', total: '05',
    name: 'Yansoon',
    description: [
      'An energy-based productivity app that helps users work with their natural energy rhythms not against them.',
      'Inspired by the anise plant\'s gentle, adaptive qualities.',
    ],
    details: [
      { label: 'PROBLEM', value: 'Burnout from productivity tools that ignore human energy cycles', bold: false },
      { label: 'OUTCOME', value: 'Designed an app that supports progress awareness and sustainable performance', bold: false },
    ],
    tags: [
      { text: 'PRODUCTIVITY', cls: 'tag--orange' },
      { text: 'ADAPTIVE UX',  cls: 'tag--pink' },
      { text: 'FIGMA',        cls: 'tag--light' },
    ],
    cover: {
      style: 'background: #F5DFB8;',
      html: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none">
               <polygon points="40,4 52,30 80,34 60,54 65,80 40,67 15,80 20,54 0,34 28,30" fill="#E8820C"/>
             </svg>`,
    },
    galleryClass: 'gallery--yansoon',
    images: [
      { src: 'assets/yansoon-1.jpg', cls: '' },
      { src: 'assets/yansoon-2.jpg', cls: '' },
      { src: 'assets/yansoon-3.jpg', cls: '' },
      { src: 'assets/yansoon-4.jpg', cls: '' },
    ],
  },
  {
    id: '03', total: '05',
    name: 'Project Three',
    description: ['Coming soon — details to be added.'],
    details: [],
    tags: [{ text: 'UX DESIGN', cls: 'tag--teal' }],
    cover: {
      style: 'background: linear-gradient(135deg, #1B3838, #2AB5B8);',
      html: '',
    },
    galleryClass: 'gallery--generic',
    images: [
      { src: '', cls: '' }, { src: '', cls: '' },
      { src: '', cls: '' }, { src: '', cls: '' },
    ],
  },
  {
    id: '04', total: '05',
    name: 'Project Four',
    description: ['Coming soon — details to be added.'],
    details: [],
    tags: [{ text: 'PRODUCT', cls: 'tag--orange' }],
    cover: {
      style: 'background: linear-gradient(135deg, #E8820C, #F5DFB8);',
      html: '',
    },
    galleryClass: 'gallery--generic',
    images: [
      { src: '', cls: '' }, { src: '', cls: '' },
      { src: '', cls: '' }, { src: '', cls: '' },
    ],
  },
  {
    id: '05', total: '05',
    name: 'Project Five',
    description: ['Coming soon — details to be added.'],
    details: [],
    tags: [{ text: 'SWIFTUI', cls: 'tag--pink' }],
    cover: {
      style: 'background: linear-gradient(135deg, #C896BE, #1B3838);',
      html: '',
    },
    galleryClass: 'gallery--generic',
    images: [
      { src: '', cls: '' }, { src: '', cls: '' },
      { src: '', cls: '' }, { src: '', cls: '' },
    ],
  },
];

/* ── State ── */
let current = 0;

/* ── Render ── */
function renderProject(index, animate) {
  const p = projects[index];
  const gallery = document.getElementById('projectGallery');
  const card    = document.getElementById('projectCard');

  if (animate) {
    gallery.style.opacity = '0';
    card.style.opacity    = '0';
  }

  setTimeout(() => {
    /* Gallery */
    gallery.className = 'project-gallery ' + p.galleryClass;

    const galleryItems = p.images.map(img => {
      const colCls = img.cls.includes('col-span') ? 'gallery-placeholder--col-span' : '';
      const rowCls = img.cls.includes('row-span') ? 'gallery-placeholder--row-span' : '';

      if (img.src) {
        return `<img class="gallery-img ${img.cls}"
                     src="${img.src}" alt="${p.name}"
                     onerror="this.outerHTML='<div class=\\'gallery-placeholder ${colCls}${rowCls}\\'></div>'">`;
      }
      return `<div class="gallery-placeholder ${colCls} ${rowCls}"></div>`;
    });
    gallery.innerHTML = galleryItems.join('');

    /* Card */
    const detailsHTML = p.details.length
      ? `<div class="card-details">${p.details.map(d => `
          <div class="card-row">
            <span class="row-label">${d.label}</span>
            <span class="row-value${d.bold ? ' row-value--bold' : ''}">${d.value}</span>
          </div>`).join('')}
        </div>`
      : '';

    const tagsHTML = p.tags.map(t =>
      `<span class="tag ${t.cls}">${t.text}</span>`
    ).join('');

    const descHTML = p.description.map(para => `<p>${para}</p>`).join('');

    card.innerHTML = `
      <div class="card-cover-div" style="${p.cover.style}">
        ${p.cover.html}
      </div>
      <div class="card-body">
        <span class="card-counter">${p.id} / ${p.total}</span>
        <h3 class="card-title">${p.name}</h3>
        <div class="card-desc">${descHTML}</div>
        ${detailsHTML}
        <div class="card-tags">${tagsHTML}</div>
      </div>
    `;

    /* Fade back in */
    gallery.style.opacity = '1';
    card.style.opacity    = '1';
  }, animate ? 220 : 0);

  /* Nav buttons */
  document.getElementById('prevProject').disabled = index === 0;
  document.getElementById('nextProject').disabled = index === projects.length - 1;
}

function changeProject(delta) {
  const next = current + delta;
  if (next < 0 || next >= projects.length) return;
  current = next;
  renderProject(current, true);
}

/* ── Nav scroll shadow ── */
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

/* ── Keyboard navigation for projects ── */
document.addEventListener('keydown', e => {
  const workSection = document.getElementById('work');
  const rect = workSection.getBoundingClientRect();
  const inView = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
  if (!inView) return;
  if (e.key === 'ArrowRight') changeProject(1);
  if (e.key === 'ArrowLeft')  changeProject(-1);
});

/* ── Init ── */
document.getElementById('prevProject').addEventListener('click', () => changeProject(-1));
document.getElementById('nextProject').addEventListener('click', () => changeProject(1));

/* CSS transition for fade */
const style = document.createElement('style');
style.textContent = '.project-gallery, .project-card { transition: opacity 0.22s ease; }';
document.head.appendChild(style);

renderProject(0, false);
