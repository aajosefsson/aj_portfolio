/* ===========================================================================
   RENDERER — builds the dynamic parts of the page from CONTENT (content.js).

   You normally never need to touch this file. To change text or add a
   project, edit js/content.js instead.

   Sections handled here:
     - skill chips
     - project cards
     - resume timelines
     - project detail view (opened via #project=<id>)
     - footer year
   =========================================================================== */

(function () {
  'use strict';

  /* --- small helpers ---------------------------------------------------- */

  const $ = (sel) => document.querySelector(sel);

  // Escape user text so content.js can never break the markup
  const esc = (str) => String(str ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  // Image or a neutral empty placeholder box
  const img = (src, alt) =>
    src ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy">` : '';


  /* --- home: skills ----------------------------------------------------- */

  function renderSkills() {
    $('#skills-list').innerHTML =
      CONTENT.skills.map((s) => `<li>${esc(s)}</li>`).join('');
  }


  /* --- home: project cards --------------------------------------------- */

  function renderProjects() {
    const { projects } = CONTENT;

    $('#work-count').textContent =
      `${projects.length} project${projects.length === 1 ? '' : 's'}, ${projects[0].year}`;

    $('#projects-grid').innerHTML = projects.map((p) => `
      <button class="card" type="button" data-project="${esc(p.id)}">
        <div class="card__media">${img(p.cover, p.title + ' cover')}</div>
        <div class="card__row">
          <div>
            <h3 class="card__title">${esc(p.title)}</h3>
            <p class="card__meta">${esc(p.category)}</p>
          </div>
          <span class="card__year">${esc(p.year)}</span>
        </div>
      </button>
    `).join('');
  }


  /* --- home: resume timelines ------------------------------------------ */

  function renderTimeline(target, rows) {
    $(target).innerHTML = rows.map((r) => `
      <div class="timeline__row">
        <p class="timeline__dates">${esc(r.dates)}</p>
        <div>
          <p class="timeline__role">${esc(r.role)}</p>
          ${r.org ? `<p class="timeline__org">${esc(r.org)}</p>` : ''}
          <p class="timeline__desc">${esc(r.desc)}</p>
        </div>
      </div>
    `).join('');
  }


  /* --- project detail view --------------------------------------------- */

  function projectMarkup(p) {
    const facts = Object.entries(p.facts).map(([label, value]) => `
      <div>
        <dt>${esc(label)}</dt>
        <dd>${esc(value)}</dd>
      </div>
    `).join('');

    const insights = p.insights.map((text, i) => `
      <div class="insight">
        <p class="insight__n">${String(i + 1).padStart(2, '0')}</p>
        <p class="insight__text">${esc(text)}</p>
      </div>
    `).join('');

    const gallery = p.gallery.map((g) => `
      <figure>${img(g.src, g.alt)}</figure>
    `).join('');

    return `
      <button class="project__back" type="button" data-close>← All projects</button>

      <header class="project__head">
        <div class="project__tags">
          <p class="eyebrow eyebrow--accent">${esc(p.category)}</p>
          <p class="eyebrow">${esc(p.year)}</p>
        </div>
        <h1 class="project__title">${esc(p.title)}</h1>
        <p class="project__tagline">${esc(p.tagline)}</p>
      </header>

      <div class="project__cover">${img(p.cover, p.title + ' cover')}</div>

      <dl class="project__facts">${facts}</dl>

      <section class="project__prose">
        <h2 class="h2">The challenge</h2>
        ${p.challenge.map((t) => `<p>${esc(t)}</p>`).join('')}
      </section>

      <section class="project__insights">
        <h2 class="h2">Key insights</h2>
        <div class="insight-grid">${insights}</div>
      </section>

      <section class="project__prose">
        <h2 class="h2">Design process</h2>
        <p>${esc(p.process)}</p>
      </section>

      <div class="project__gallery">${gallery}</div>

      <section class="project__outcome">
        <h2 class="h2">Outcome</h2>
        <p>${esc(p.outcome)}</p>
      </section>
    `;
  }

  function openProject(id) {
    const project = CONTENT.projects.find((p) => p.id === id);
    if (!project) return closeProject();

    const detail = $('#project-detail');
    detail.innerHTML = projectMarkup(project);
    detail.hidden = false;
    $('#home-view').hidden = true;
    window.scrollTo({ top: 0, behavior: 'auto' });
    document.title = `${project.title} — Anthony Josefsson`;
  }

  function closeProject() {
    $('#project-detail').hidden = true;
    $('#project-detail').innerHTML = '';
    $('#home-view').hidden = false;
    document.title = 'Anthony Josefsson — UX/UI Designer';
  }

  // Read #project=<id> so a case study can be linked and shared directly
  function syncFromHash() {
    const match = location.hash.match(/^#project=(.+)$/);
    if (match) openProject(decodeURIComponent(match[1]));
    else closeProject();
  }


  /* --- wiring ----------------------------------------------------------- */

  document.addEventListener('click', (e) => {
    const card = e.target.closest('[data-project]');
    if (card) {
      location.hash = `project=${card.dataset.project}`;
      return;
    }
    if (e.target.closest('[data-close]')) {
      history.pushState('', document.title, location.pathname + location.search);
      closeProject();
    }
  });

  window.addEventListener('hashchange', syncFromHash);


  /* --- init ------------------------------------------------------------- */

  renderSkills();
  renderProjects();
  renderTimeline('#experience-list', CONTENT.experience);
  renderTimeline('#education-list', CONTENT.education);
  $('#year').textContent = new Date().getFullYear();
  syncFromHash();
})();
