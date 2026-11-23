const view = document.querySelector('#view');
const site = document.querySelector('#site');
const intro = document.querySelector('#intro');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const labels = ['참여 프로젝트', '수상', 'AI 프로젝트'];
const colors = ['blue', 'yellow', 'pink'];
const categories = [projects, featuredAwards, projects.filter(project => project.ai)];
const assetRevision = '?v=4';
const metricIcons = ['progect.png', 'win.png', 'ai.png'];
let category = 2;
let projectCategory = 0;
let year = '2026';
let galleryTimer;

const escapeHtml = value => String(value).replace(/[&<>"']/g, char =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]
);
const imagePath = name => 'assets/' + (name.endsWith('.png') ? name : name + '.jpg');
const projectLink = project => '#project/' + project.id;
const education = `<div class="education"><span class="quiet">학력</span>
  <p>이화여자대학교 조소 전공 / 기업가정신 복수전공 <small>2021.03–2026 (졸업유예)</small></p>
  <p>계원예술고등학교 <small>2017.03–2020 (졸업)</small></p></div>`;
const email = '<a href="mailto:jimin7540@naver.com">jimin7540@naver.com</a>';
const github = '<a class="github-link" href="https://github.com/choren0411" target="_blank" rel="noopener noreferrer">GitHub · choren0411</a>';
const phone = '<a href="tel:+821039824154">010-3982-4154</a>';

function cards(items) {
  return items.map(project => `<a class="card ${project.cover && !['colla', 'hai'].includes(project.cover) ? 'full-cover' : ''}" href="${projectLink(project)}">
    ${project.cover ? `<img src="${imagePath(project.cover)}" alt="" loading="lazy">` : ''}
    ${project.award ? `<img class="card-medal" src="assets/win.png${assetRevision}" alt="">` : ''}
    <div class="card-copy">${project.award || project.status ? `<small>${escapeHtml(project.award || project.status)}</small>` : ''}
    <span>${escapeHtml(project.event)}</span><strong>${escapeHtml(project.title)}</strong></div>
  </a>`).join('');
}

function metrics(selected) {
  return `<div class="metrics" role="group" aria-label="프로젝트 분류">
    ${labels.map((label, index) => `<button class="${colors[index]}" type="button" data-category="${index}" aria-pressed="${selected === index}">
      <img class="metric-icon" src="assets/${metricIcons[index]}${assetRevision}" alt="">
      <span>${label}</span><span><b>${categories[index].length}</b> 건</span>
    </button>`).join('')}</div>`;
}

function renderPreview() {
  const preview = document.querySelector('#preview');
  preview.className = 'preview wrap ' + colors[category];
  preview.innerHTML = `${metrics(category)}
    <div class="cards">${cards(categories[category])}</div>
    <a class="all-projects" href="#project">프로젝트 모두 보기</a>`;
}

function renderProjectIndex() {
  view.innerHTML = `<section class="project-index">
    <div class="wrap project-summary">
      <h1><span class="pink">[${projects.length}]건</span>의 프로젝트를 완주했습니다.</h1>
      ${metrics(projectCategory)}
    </div>
    <div class="project-gallery">
      <div class="gallery-glow" aria-hidden="true"></div>
      <div class="wrap ${colors[projectCategory]}">
        <p class="gallery-prompt">= 궁금한 활동은 클릭해주세요 =</p>
        <div class="cards">${cards(categories[projectCategory])}</div>
      </div>
    </div>
  </section>`;
}

function renderMain() {
  view.innerHTML = `<section class="hero wrap">
    <div id="hero-default" class="hero-content">
      <button type="button" class="name-trigger" data-hero aria-expanded="false" aria-controls="hero-profile">KIM JIMIN</button>
      <p class="hero-korean">기획, 개발, 아트를 연결하는–</p>
      <h1>CREATIVE DESIGNER</h1>
      <p class="hero-description">[재미]를 최우선으로 하는 게임을 고민합니다.</p>
    </div>
    <div id="hero-profile" class="hero-content" hidden>
      <div class="contacts">${phone}${email}${github}</div>
      <button type="button" class="name-trigger expanded-name" data-hero aria-expanded="true" aria-controls="hero-profile">KIM JIMIN</button>
      ${education}
    </div>
    <button class="preview-jump" type="button" data-preview><span aria-hidden="true">↓</span>Preview</button>
  </section><section id="preview" aria-label="프로젝트 미리보기"></section>`;
  renderPreview();
}

function story(title, rows = [], reverse = false, photos = []) {
  if (!rows.length && !photos.length) return '';
  const gallery = photos.length ? `<div class="story-photos">
    ${photos.map(([filename, alt]) => `<img src="assets/${escapeHtml(filename)}" alt="${escapeHtml(alt)}" loading="lazy">`).join('')}
  </div>` : '';
  return `<section class="story wrap ${reverse ? 'reverse' : ''}"><h2>${title}</h2>
    ${rows.map(([image, alt, description]) => `<div class="story-row${image ? '' : ' story-text'}">
      <p>${escapeHtml(description)}</p>${image ? `<img src="${imagePath(image)}" alt="${escapeHtml(alt)}" loading="lazy">` : ''}
    </div>`).join('')}${gallery}</section>`;
}

function renderProject(project) {
  const sequence = projects;
  const index = sequence.indexOf(project);
  const next = sequence[(index + 1) % sequence.length];
  const previous = sequence[(index + sequence.length - 1) % sequence.length];
  const gallery = project.photos?.length || project.video;
  view.innerHTML = `<article>
    <header class="project-header wrap">
      <a class="back" href="#project">프로젝트 목록</a>
      <div class="project-heading"><div><h1>${escapeHtml(project.title)}</h1><p>${escapeHtml(project.event)}</p></div>
        ${project.award ? `<div class="award yellow"><img src="assets/win.png${assetRevision}" alt="">${escapeHtml(project.award)}</div>` : ''}
      </div>
    </header>
    ${project.facts ? `<dl class="facts wrap">${project.facts.map(([label, value]) =>
      `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join('')}</dl>` : ''}
    ${gallery ? '<section id="gallery" class="gallery" aria-label="프로젝트 시연 및 스크린샷"></section>' : ''}
    ${project.headline || project.description ? `<section class="game-description wrap"><h2>프로젝트 소개</h2>
      ${project.headline ? `<h3>${escapeHtml(project.headline)}</h3>` : ''}
      ${project.description ? `<p>${escapeHtml(project.description)}</p>` : ''}</section>` : ''}
    ${story('기획 의도', project.intent)}
    ${story('개발 과정', project.process, true, project.processPhotos)}
    ${project.contributions || project.tools?.length || project.role ? `<section class="contribution wrap"><h2>기여도</h2>
      ${project.role ? `<p>${escapeHtml(project.role)}</p>` : ''}
      ${(project.contributions ?? []).map(([label, amount, color]) => `<div class="bar ${color}">
        <label>${escapeHtml(label)} ${amount}%<meter min="0" max="100" value="${amount}">${amount}%</meter></label></div>`).join('')}
      ${project.tools?.length ? `<h3 class="tools-heading">활용 도구</h3>
        <ul class="chips">${project.tools.map(tool => `<li>${escapeHtml(tool)}</li>`).join('')}</ul>` : ''}
    </section>` : ''}
    ${project.status || project.award || project.outcome ? `<section class="outcome wrap"><h2>주요 성과</h2>
      ${[project.award, project.status, project.outcome].filter(Boolean).map(item => `<p>${escapeHtml(item)}</p>`).join('')}</section>` : ''}
    ${project.playUrl ? `<a class="play" href="${escapeHtml(project.playUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(project.linkLabel || '게임 플레이')}</a>`
      : project.linkLabel ? `<p class="release-status wrap">${escapeHtml(project.linkLabel)}</p>` : ''}
    <nav class="project-next" aria-label="다른 프로젝트"${next.cover ? ` style="--cover:url('${imagePath(next.cover)}')"` : ''}>
      <a href="${projectLink(previous)}" aria-label="이전 프로젝트 ${escapeHtml(previous.title)}">◀ <span>Previous</span></a>
      <a class="next-title" href="${projectLink(next)}">${escapeHtml(next.title)}</a>
      <a href="${projectLink(next)}" aria-label="다음 프로젝트 ${escapeHtml(next.title)}"><span>Next</span> ▶</a>
    </nav>
  </article>`;
  if (gallery) setupGallery(project);
}

function setupGallery(project) {
  const gallery = document.querySelector('#gallery');
  const photos = project.photos ?? [];
  const multiplePhotos = photos.length > 1;
  let slide = 0;
  let paused = reducedMotion.matches;
  let showingVideo = Boolean(project.video);
  gallery.innerHTML = `
    ${project.video ? `<video poster="${imagePath(project.cover)}" preload="metadata" muted playsinline controls><source src="assets/${project.video}${assetRevision}" type="video/mp4"></video>` : ''}
    <img class="gallery-photo" hidden alt="">
    <div class="gallery-controls"><button type="button" data-step="-1" aria-label="이전 사진">◀</button>
    <span class="gallery-position"></span><button type="button" data-step="1" aria-label="다음 사진">▶</button>
    <button type="button" class="toggle-gallery"></button>
    ${project.video ? '<button type="button" class="replay-video" hidden>영상 다시 보기</button>' : ''}</div>`;
  const video = gallery.querySelector('video');
  const photo = gallery.querySelector('img');
  const position = gallery.querySelector('.gallery-position');
  const toggle = gallery.querySelector('.toggle-gallery');
  const replay = gallery.querySelector('.replay-video');

  function show() {
    if (!gallery.isConnected) return;
    clearInterval(galleryTimer);
    if (video) {
      video.hidden = !showingVideo;
      if (!showingVideo) video.pause();
      replay.hidden = showingVideo;
    }
    photo.hidden = showingVideo;
    if (!showingVideo) {
      photo.src = imagePath(photos[slide]);
      photo.alt = project.title + ' 스크린샷 ' + (slide + 1);
    }
    position.textContent = showingVideo ? '시연 영상' : `${slide + 1} / ${photos.length}`;
    toggle.textContent = showingVideo ? '사진 보기' : paused ? '슬라이드 재생' : '슬라이드 일시정지';
    gallery.querySelectorAll('[data-step]').forEach(button => { button.hidden = !multiplePhotos; });
    toggle.hidden = !showingVideo && !multiplePhotos;
    if (!showingVideo && !paused && multiplePhotos) galleryTimer = setInterval(() => advance(1), 4200);
  }

  function advance(step) {
    slide = showingVideo ? (step < 0 ? photos.length - 1 : 0) :
      (slide + step + photos.length) % photos.length;
    showingVideo = false;
    show();
  }

  gallery.querySelectorAll('[data-step]').forEach(button =>
    button.addEventListener('click', () => advance(Number(button.dataset.step)))
  );
  toggle.addEventListener('click', () => {
    if (showingVideo) advance(1);
    else {
      paused = !paused;
      show();
    }
  });
  if (video) {
    video.muted = true;
    video.addEventListener('ended', () => advance(1));
    video.querySelector('source').addEventListener('error', () => { if (showingVideo) advance(1); });
    replay.addEventListener('click', () => {
      showingVideo = true;
      show();
      video.currentTime = 0;
      video.play().catch(() => { /* Native controls remain available when autoplay is blocked. */ });
    });
    if (showingVideo && !paused) video.play().catch(() => { /* Native controls remain available when autoplay is blocked. */ });
  }
  show();
}

function renderExperience() {
  const panel = document.querySelector('#experience');
  const rows = experience.filter(item => year === '2023-' ? item.year <= 2023 : String(item.year) === year);
  panel.innerHTML = `<div class="years" role="group" aria-label="경력 연도">
    ${['2026', '2025', '2024', '2023-'].map(value => `<button type="button" data-year="${value}" aria-pressed="${year === value}">${value}</button>`).join('')}
    </div><ul class="experience-list">${rows.length ? rows.map(item => {
      const project = projects.find(entry => entry.id === item.project);
      const record = project || otherAwards.find(entry => entry.id === item.project);
      const title = record && !item.label.includes(record.title) ? `${item.label} 〈${record.title}〉` : item.label;
      const label = escapeHtml(title);
      const award = record?.award && !(record.id === 'oilgenie' && item.tag === '교내활동') ? record.award : '';
      return `<li><b>${escapeHtml(year === '2023-' ? item.date : item.date.slice(5))}<span class="sr-only">월</span></b>
        <div>${project ? `<a href="${projectLink(project)}">${label}</a>` :
          item.url ? `<a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">${label}</a>` : label}
          ${award ? `<span class="yellow"> · ${escapeHtml(award)}</span>` : ''}
          ${item.note ? `<p class="experience-note">${escapeHtml(item.note)}</p>` : ''}
          ${project && item.url ? `<a class="experience-link" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">관련 링크</a>` : ''}
        </div><strong>${escapeHtml(item.tag)}</strong></li>`;
    }).join('') : '<li class="empty">등록된 활동이 없습니다.</li>'}</ul>`;
}

function renderProfile() {
  view.innerHTML = `<section class="profile-intro wrap">
    <img src="${imagePath('portrait')}" alt="김지민 프로필 사진" width="409" height="475">
    <div><h1>김지민</h1>${education}${email}</div>
    </section>
    <section class="profile-section wrap"><h2>Experience</h2><div id="experience"></div></section>
    <section class="profile-section wrap"><h2 class="skills-heading">SKILLS</h2>
      <div class="skills">${skills.map(([label, color, items]) => `<div class="${color}"><h3>${label}</h3>
        <p><b>${items.length}</b> 개</p><ul class="chips">${items.map(item => `<li>${item}</li>`).join('')}</ul></div>`).join('')}</div>
    </section>
    <footer class="profile-footer wrap"><div><h2>SNS</h2>${github}</div>
      <div class="contacts">${phone}${email}</div></footer>`;
  renderExperience();
}

function renderRoute(moveFocus = false) {
  clearInterval(galleryTimer);
  const [route, id] = location.hash.slice(1).split('/');
  const page = ['project', 'profile'].includes(route) ? route : 'main';
  document.querySelectorAll('[data-page]').forEach(link => {
    if (link.dataset.page === page) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  const project = projects.find(item => item.id === id);
  if (page === 'main') renderMain();
  else if (page === 'profile') renderProfile();
  else if (project) renderProject(project);
  else renderProjectIndex();
  document.title = project && page === 'project' ? project.title + ' | 김지민' : '김지민 | CREATIVE DESIGNER';
  window.scrollTo(0, 0);
  if (moveFocus) view.focus({ preventScroll: true });
}

view.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.hasAttribute('data-hero')) {
    const regular = document.querySelector('#hero-default');
    const profile = document.querySelector('#hero-profile');
    regular.hidden = !regular.hidden;
    profile.hidden = !profile.hidden;
    (regular.hidden ? profile : regular).querySelector('button').focus({ preventScroll: true });
  }
  if (button.hasAttribute('data-preview')) {
    document.querySelector('#preview').scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth' });
    document.querySelector('[data-category][aria-pressed="true"]').focus({ preventScroll: true });
  }
  if (button.dataset.category !== undefined) {
    const selected = Number(button.dataset.category);
    if (button.closest('.project-index')) {
      projectCategory = selected;
      renderProjectIndex();
    } else {
      category = selected;
      renderPreview();
    }
    document.querySelector(`[data-category="${selected}"]`).focus({ preventScroll: true });
  }
  if (button.dataset.year) {
    year = button.dataset.year;
    renderExperience();
    document.querySelector(`[data-year="${year}"]`).focus({ preventScroll: true });
  }
});

function startIntro() {
  const lines = [
    [['지금 보고계신 페이지,', '']],
    [['사람', 'blue'], ['이 ', ''], ['[FIGMA]', 'blue'], ['로 설계하고,', '']],
    [['AI', 'pink'], [' 툴 ', ''], ['[CODEX]', 'pink'], ['로 구현했습니다.', '']]
  ];
  const tools = [['[FIGMA]', '[BLENDER]', '[PROCREATE]'], ['[CODEX]', '[CLAUDE]', '[CHATGPT]']];
  const typing = document.querySelector('#typing');
  const segments = lines.flatMap(line => {
    const row = typing.appendChild(document.createElement('div'));
    return line.map(([value, color]) => {
      const span = row.appendChild(document.createElement('span'));
      span.className = color;
      return { span, value };
    });
  });
  const variable = segments.filter(({ value }) => value.startsWith('['));
  const start = performance.now();
  function type(now) {
    const elapsed = now - start;
    let remaining = reducedMotion.matches ? Infinity : Math.floor(elapsed / 30) + 1;
    segments.forEach(({ span, value }) => {
      span.textContent = value.slice(0, Math.max(0, remaining));
      remaining -= value.length;
    });
    if (!reducedMotion.matches && elapsed > 1950 && elapsed < 3440) {
      const frame = 1 + Math.floor((elapsed - 1950) / 420) % 2;
      variable.forEach(({ span }, index) => { span.textContent = tools[index][frame]; });
    }
    if (elapsed < 4000) requestAnimationFrame(type);
  }
  site.hidden = true;
  intro.hidden = false;
  requestAnimationFrame(type);
  setTimeout(() => {
    intro.hidden = true;
    site.hidden = false;
  }, 4000);
}

addEventListener('hashchange', () => renderRoute(true));
renderRoute();
if (!location.hash || location.hash === '#main') startIntro();
