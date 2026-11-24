const view = document.querySelector('#view');
const site = document.querySelector('#site');
const intro = document.querySelector('#intro');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const labels = ['참여 프로젝트', '수상', 'AI 프로젝트'];
const colors = ['blue', 'yellow', 'pink'];
const categories = [projects, featuredAwards, projects.filter(project => project.ai)];
const assetRevision = '?v=4';
const metricIcons = ['progect.png', 'win.png', 'ai.png'];
const posterStills = [
  'horrops.jpg', 'horrops-full-1.jpg', 'horrops-full-2.jpg',
  'colla-game.jpg', 'colla-stage.jpg', 'monstone-1.jpg',
  'suncheon-full-1.jpg', 'suncheon-full-2.jpg', 'hai-12.jpg', 'hai-25.jpg',
  'memories-1.jpg', 'ssangryuk-1.jpg', 'nara-game.jpg'
];
const posterAnimations = ['monstone-intent.gif', 'bystander-process-player.gif', 'snow-love-character-girl.gif'];
const posterTileCount = 12;
const posterAnimationSlots = [2, 9];
const aiRoleLabels = ['내가 판단한 것', 'AI에 맡긴 것'];
const aiProjectCategory = labels.indexOf('AI 프로젝트');
let projectCategory = aiProjectCategory;
let year = '2026';
let galleryTimer;
let posterTimer;

const escapeHtml = value => String(value).replace(/[&<>"']/g, char =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]
);
const imagePath = name => 'assets/' + (/\.(?:png|gif)$/i.test(name) ? name : name + '.jpg');
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

function animateProjectSummary() {
  const summary = view.querySelector('.project-summary-copy');
  const walker = document.createTreeWalker(summary, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  const letters = [];
  for (const node of textNodes) {
    if (!node.textContent.trim()) continue;
    const fragment = document.createDocumentFragment();
    for (const character of node.textContent) {
      if (/\s/.test(character)) {
        fragment.append(character);
        continue;
      }
      const letter = document.createElement('span');
      letter.className = 'summary-letter-pending';
      letter.textContent = character;
      fragment.append(letter);
      letters.push(letter);
    }
    node.replaceWith(fragment);
  }

  let revealed = 0;
  const start = performance.now();
  function reveal(now) {
    if (!summary.isConnected) return;
    const count = reducedMotion.matches ? letters.length : Math.min(letters.length, 1 + Math.floor((now - start) / 23));
    while (revealed < count) letters[revealed++].classList.remove('summary-letter-pending');
    if (revealed < letters.length) requestAnimationFrame(reveal);
  }
  requestAnimationFrame(reveal);
}

function renderProjectIndex(animate = false) {
  const completedProjects = projects.filter(project => project.id !== 'community-mentor').length;
  view.innerHTML = `<section class="project-index">
    <div class="wrap project-summary">
      <div class="project-summary-copy">
        <h1><span class="summary-line"><span class="pink">5 번</span>의 게임잼,</span>
          <span class="summary-line"><span class="yellow">2 번</span>의 Steam·콘솔 출시,</span>
          <span class="summary-line"><span class="blue">${completedProjects} 건</span>의 프로젝트를 완주했습니다.</span></h1>
        <p>먼저 판단하고, AI와 함께 끝까지 완성하는 기획자입니다.</p>
      </div>
      ${metrics(projectCategory)}
    </div>
    <div class="project-gallery">
      <div class="gallery-glow" aria-hidden="true"></div>
      <div class="wrap ${colors[projectCategory]}">
        <p class="gallery-prompt">= 궁금한 활동은 클릭해주세요 =</p>
        <div class="cards">${cards(categories[projectCategory].filter(project =>
          !['play-your-way', 'community-mentor'].includes(project.id)))}</div>
      </div>
    </div>
  </section>`;
  if (animate && !reducedMotion.matches) animateProjectSummary();
}

function shuffled(items) {
  const remaining = [...items];
  return items.map(() => remaining.splice(Math.floor(Math.random() * remaining.length), 1)[0]);
}

function renderWorkProcess() {
  const steps = [
    ['설계', 'yellow', '한 줄로 정의하고, 실행할 단위로 쪼갭니다.', 'colla-zoo-process-1.png', 'colla-zoo'],
    ['판단', 'blue', 'AI가 만든 여러 안 중에서, 방향은 제가 정합니다.', 'suncheon-process-1.png', 'suncheon'],
    ['구현', 'pink', '구현은 AI 에이전트에게, 반복 작업은 툴로', 'nara-prototype.jpg', 'nara', 'Figma 화면을 기준으로 Claude Code·Codex가 구현하고, 반복 작업은 전용 툴로 만들어 에이전트가 쓰게 합니다.'],
    ['검증', 'green', '동작은 자동 테스트로, 재미는 직접 플레이로', 'hai-process-2.png', 'hai']
  ];
  return `<section class="work-process" aria-labelledby="work-process-title">
    <div class="wrap">
      <h2 id="work-process-title">; How 🙋 Work With 🤖</h2>
      <ol class="work-process-flow" aria-label="작업 순서">
        ${steps.map(([title, color]) => `<li class="${color}">${title}</li>`).join('')}
      </ol>
      <div class="work-process-steps">
        ${steps.map(([title, color, description, image, id, detail]) => {
          const project = projects.find(item => item.id === id);
          return `<article class="work-step">
            <img src="assets/${image}" alt="${escapeHtml(project.title)} 작업 화면" loading="lazy">
            <div class="work-step-copy">
              <h3 class="${color}">${title}</h3>
              <p>${description}</p>
              ${detail ? `<p class="work-step-detail">${detail}</p>` : ''}
              <a href="${projectLink(project)}">${escapeHtml(id === 'hai' ? 'HAI' : project.title)} <span aria-hidden="true">↗</span></a>
            </div>
          </article>`;
        }).join('')}
      </div>
      <a class="work-process-link" href="#project">AI 프로젝트 바로보기 <span aria-hidden="true">↓</span></a>
    </div>
  </section><div class="work-process-scroll-end" aria-hidden="true"></div>`;
}

function renderMain() {
  const stills = shuffled(posterStills);
  const animations = shuffled(posterAnimations);
  const posterMedia = stills.slice(0, posterTileCount);
  if (!reducedMotion.matches) {
    posterAnimationSlots.forEach((slot, index) => { posterMedia[slot] = animations[index]; });
  }
  view.innerHTML = `<section class="hero">
    <div class="poster-media" aria-hidden="true">
      ${posterMedia.map(filename => `<div><img src="assets/${filename}" alt=""></div>`).join('')}
    </div>
    <div id="hero-default" class="hero-content">
      <button type="button" class="name-trigger" data-hero aria-expanded="false" aria-controls="hero-profile">KIM JIMIN</button>
      <p class="hero-korean">기획, 개발, 아트를 연결하는–</p>
      <h1>AI GAME DESIGNER</h1>
      <p class="hero-description">먼저 판단하고, AI와 함께 끝까지 완성하는 기획자입니다.</p>
    </div>
    <div id="hero-profile" class="hero-content" hidden>
      <div class="contacts">${phone}${email}${github}</div>
      <button type="button" class="name-trigger expanded-name" data-hero aria-expanded="true" aria-controls="hero-profile">KIM JIMIN</button>
      ${education}
    </div>
  </section>${renderWorkProcess()}`;
  if (!reducedMotion.matches) {
    const tiles = [...view.querySelectorAll('.poster-media img')];
    posterTimer = setInterval(() => {
      if (reducedMotion.matches) {
        tiles.forEach((tile, index) => { tile.src = 'assets/' + stills[index]; });
        clearInterval(posterTimer);
        return;
      }
      const index = Math.floor(Math.random() * tiles.length);
      const pool = posterAnimationSlots.includes(index) ? animations : stills;
      const candidates = pool.filter(filename => !posterMedia.includes(filename));
      const filename = candidates[Math.floor(Math.random() * candidates.length)];
      posterMedia[index] = filename;
      tiles[index].src = 'assets/' + filename;
    }, 1900);
  }
}

function renderStoryMedia(media = [], layout = '') {
  return media.length ? `<div class="story-photos ${layout}">
    ${media.map(([filename, label, fullSize]) => {
      const url = `assets/${escapeHtml(filename)}`;
      const title = escapeHtml(label);
      if (/\.(?:webm|mp4)$/i.test(filename)) {
        return `<figure><video src="${url}" aria-label="${title}" preload="none" controls playsinline></video><figcaption>${title}</figcaption></figure>`;
      }
      const photo = `<img src="${url}" alt="${title}" loading="lazy">`;
      return fullSize ? `<a href="${url}" target="_blank" rel="noopener">${photo}</a>` : photo;
    }).join('')}
  </div>` : '';
}

function story(title, rows = [], reverse = false, media = [], aiRoles = []) {
  if (!rows.length && !media.length && !aiRoles.length) return '';
  return `<section class="story wrap ${reverse ? 'reverse' : ''}"><h2>${title}</h2>
    ${rows.map(([image, alt, description]) => `<div class="story-row${image ? '' : ' story-text'}">
      <p>${escapeHtml(description)}</p>${image ? `<img src="${imagePath(image)}" alt="${escapeHtml(alt)}" loading="lazy">` : ''}
    </div>`).join('')}${renderStoryMedia(media)}
    ${aiRoles.length ? `<dl class="ai-roles">${aiRoles.map((description, index) =>
      `<div><dt>${aiRoleLabels[index]}</dt><dd>${escapeHtml(description)}</dd></div>`).join('')}</dl>` : ''}
  </section>`;
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
    ${story('기획 의도', project.intent, false, project.intentMedia, project.aiRoles)}
    ${story('개발 과정', project.process, true, project.processMedia)}
    ${project.contributions || project.tools?.length || project.role ? `<section class="contribution wrap"><h2>기여도</h2>
      ${project.role ? `<p>${escapeHtml(project.role)}</p>` : ''}
      ${(project.contributions ?? []).map(([label, amount, color]) => `<div class="bar ${color}">
        <label>${escapeHtml(label)} ${amount}%<meter min="0" max="100" value="${amount}">${amount}%</meter></label></div>`).join('')}
      ${project.tools?.length ? `<h3 class="tools-heading">활용 도구</h3>
        <ul class="chips">${project.tools.map(tool => `<li>${escapeHtml(tool)}</li>`).join('')}</ul>` : ''}
    </section>` : ''}
    ${project.status || project.award || project.outcome || project.outcomeMedia?.length || project.outcomeLinks?.length ? `<section class="outcome wrap"><h2>주요 성과</h2>
      ${[project.award, project.status, project.outcome].filter(Boolean).map(item => `<p>${escapeHtml(item)}</p>`).join('')}
      ${project.outcomeLinks?.length ? `<ul class="outcome-links" aria-label="관련 기사">
        ${project.outcomeLinks.map(([label, url]) => `<li><a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`).join('')}
      </ul>` : ''}
      ${renderStoryMedia(project.outcomeMedia, project.id === 'colla-zoo' ? 'booth-photos' : '')}</section>` : ''}
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
    if (!showingVideo && !paused && multiplePhotos) {
      galleryTimer = setInterval(() => advance(1), project.slideIntervalMs ?? 4200);
    }
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
  clearInterval(posterTimer);
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
  else {
    projectCategory = aiProjectCategory;
    renderProjectIndex(true);
  }
  document.title = project && page === 'project' ? project.title + ' | 김지민' : '김지민 | AI GAME DESIGNER';
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
  if (button.dataset.category !== undefined) {
    const selected = Number(button.dataset.category);
    projectCategory = selected;
    renderProjectIndex();
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
addEventListener('scroll', () => {
  const end = view.querySelector('.work-process-scroll-end');
  if (!site.hidden && end && end.getBoundingClientRect().top <= window.innerHeight - 56) {
    location.hash = '#project';
  }
}, { passive: true });
renderRoute();
if (!location.hash || location.hash === '#main') startIntro();
