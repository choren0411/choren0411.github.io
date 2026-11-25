const view = document.querySelector('#view');
const site = document.querySelector('#site');
const intro = document.querySelector('#intro');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const canEditProjects = location.protocol === 'file:';
const projectDraftKey = id => `portfolio-project-draft:${id}`;
if (canEditProjects) try {
  for (const project of projects) {
    const draft = JSON.parse(localStorage.getItem(projectDraftKey(project.id)));
    if (draft && typeof draft === 'object') Object.assign(project, draft);
  }
} catch {
  // The original project data remains usable when browser storage is unavailable.
}
const labels = ['참여 프로젝트', '수상', 'AI 프로젝트'];
const colors = ['blue', 'yellow', 'pink'];
const categories = [projects, projects.filter(project => project.award), projects.filter(project => project.ai)];
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
const aiRoleLabels = ['내가 판단한 것', 'AI에게 맡긴 것'];
let projectCategory = 0;
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
    ${project.award && project.id !== 'hai' ? `<img class="card-badge card-medal" src="assets/win.png${assetRevision}" alt="">` : ''}
    ${project.playUrl?.startsWith('https://store.steampowered.com/app/') ? '<img class="card-badge card-steam" src="assets/steam-badge.png?v=59" alt="Steam 출시">' : ''}
    ${project.ai ? `<img class="card-badge card-ai" src="assets/ai.png${assetRevision}" alt="AI 프로젝트">` : ''}
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
  view.innerHTML = `<section class="project-index">
    <div class="wrap project-summary">
      <div class="project-summary-copy">
        <h1><span class="summary-line"><span class="pink">5 번</span>의 게임잼,</span>
          <span class="summary-line"><span class="yellow">2 번</span>의 Steam·콘솔 출시,</span>
          <span class="summary-line"><span class="blue">${projects.length}건</span>의 프로젝트를 완주했습니다.</span></h1>
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
      <a class="work-process-link" href="#project/all">모든 프로젝트 바로보기 <span aria-hidden="true">↗</span></a>
    </div>
  </section>`;
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
  </section>${renderWorkProcess()}${renderMainProfile()}`;
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

function storyMediaItem([filename, label, fullSize], caption = true) {
  const url = `assets/${escapeHtml(filename)}`;
  const title = escapeHtml(label);
  if (/\.(?:webm|mp4)$/i.test(filename)) {
    const video = `<video src="${url}" aria-label="${title}" preload="none" controls playsinline></video>`;
    return caption ? `<figure>${video}<figcaption>${title}</figcaption></figure>` : video;
  }
  const photo = `<img src="${url}" alt="${title}" loading="lazy">`;
  return fullSize ? `<a href="${url}" target="_blank" rel="noopener">${photo}</a>` : photo;
}

function renderStoryMedia(media = [], layout = '') {
  return media.length ? `<div class="story-photos ${layout}">${media.map(item => storyMediaItem(item)).join('')}</div>` : '';
}

function storyRows(section, rows = [], media = []) {
  const remaining = [...media];
  const pairs = rows.map(([image, alt, description]) => [
    image ? [imagePath(image).slice('assets/'.length), alt] : remaining.shift(),
    description
  ]);
  const occurrences = new Map();
  return [...pairs, ...remaining.map(item => [item, item[1], true])].map(([item, description, isCaption]) => {
    const filename = item?.[0] ?? 'text';
    const occurrence = (occurrences.get(filename) ?? 0) + 1;
    occurrences.set(filename, occurrence);
    return { id: `${section}:${filename}:${occurrence}`, item, description, isCaption };
  });
}

function orderedStoryRows(project) {
  const rows = [
    ...storyRows('intent', project.intent, project.intentMedia),
    ...storyRows('process', project.process, project.processMedia)
  ];
  const byId = new Map(rows.map(row => {
    const label = project.storyMediaLabels?.[row.id];
    if (row.item && label) {
      row.item = [row.item[0], label, row.item[2]];
      if (row.isCaption) row.description = label;
    }
    return [row.id, row];
  }));
  const ordered = [];
  for (const id of project.storyOrder ?? []) {
    if (!byId.has(id)) continue;
    ordered.push(byId.get(id));
    byId.delete(id);
  }
  return [...ordered, ...byId.values()];
}

function story(project) {
  const rows = orderedStoryRows(project);
  const aiRoles = project.aiRoles ?? [];
  if (!rows.length && !aiRoles.length) return '';
  return `<section class="story wrap"><h2>기획 의도 및 개발 과정</h2>
    ${aiRoles.length ? `<dl class="ai-roles">${aiRoles.map((description, index) =>
      `<div><dt>${aiRoleLabels[index]}</dt><dd>${escapeHtml(description)}</dd></div>`).join('')}</dl>` : ''}
    ${rows.map(({ item, description, isCaption }) => `<div class="story-row${item ? '' : ' story-text'}">
      ${item ? `<div class="story-row-media">${storyMediaItem(item, false)}</div>` : ''}
      <div class="story-row-copy">
        ${item && !isCaption ? `<h3>${escapeHtml(item[1])}</h3>` : ''}
        ${description ? `<p>${escapeHtml(description)}</p>` : ''}
      </div>
    </div>`).join('')}
  </section>`;
}

const projectTextFields = [
  ['title', '프로젝트명'], ['event', '행사·프로젝트 구분'], ['headline', '소개 제목'],
  ['description', '프로젝트 소개'], ['role', '기여도 요약'], ['award', '수상명'],
  ['status', '진행 상태'], ['outcome', '주요 성과'], ['linkLabel', '플레이 링크 문구']
];

function projectEditor(project) {
  const field = (name, label, value = '') => `<label>${escapeHtml(label)}
    <textarea name="${name}" rows="2">${escapeHtml(value)}</textarea></label>`;
  const paragraphFields = (key, label) => (project[key]?.length ? project[key] : [[null, null, '']])
    .map(([, , text], index) => field(`${key}-${index}`, `${label} 문단 ${index + 1}`, text)).join('');
  const storyItems = orderedStoryRows(project);
  return `<form id="project-editor" class="project-editor" data-project-id="${project.id}" hidden>
    <h2>프로젝트 텍스트 편집</h2>
    <p>수정한 내용은 이 브라우저에 저장됩니다.</p>
    <div class="project-editor-fields">
      ${projectTextFields.map(([key, label]) => field(key, label, project[key])).join('')}
      ${(project.facts ?? []).map(([label, value], index) => field(`fact-${index}`, label, value)).join('')}
      ${(project.contributions ?? []).map(([label], index) => field(`contribution-${index}`, `기여도 항목 ${index + 1}`, label)).join('')}
      ${field('detailedContributions', '상세 기여 (한 줄에 한 항목)', project.detailedContributions?.join('\n'))}
      ${field('tools', '활용 도구 (한 줄에 한 항목)', project.tools?.join('\n'))}
      ${project.ai ? aiRoleLabels.map((label, index) => field(`aiRole-${index}`, label, project.aiRoles?.[index])).join('') : ''}
      ${paragraphFields('intent', '기획 의도')}
      ${paragraphFields('process', '개발 과정')}
    </div>
    ${storyItems.some(row => row.item) || storyItems.length > 1 ? `<fieldset class="story-order-editor">
      <legend>기획 의도 및 개발 과정 이름·순서</legend>
      <ol data-story-order>
        ${storyItems.map(({ id, item, description }, index) => {
          const label = escapeHtml(item?.[1] || description.slice(0, 70) || '텍스트 문단');
          return `<li data-original-position="${index}">
            ${item ? `<input type="text" name="storyLabel:${escapeHtml(id)}" value="${label}" aria-label="${label} 표시 이름">` : `<span>${label}</span>`}
            <input type="hidden" name="storyOrder" value="${escapeHtml(id)}">
            <button type="button" data-move-story="up" aria-label="${label} 위로">↑</button>
            <button type="button" data-move-story="down" aria-label="${label} 아래로">↓</button>
          </li>`;
        }).join('')}
      </ol>
    </fieldset>` : ''}
    <div class="project-editor-actions">
      <button type="submit">저장</button>
      <button type="button" data-toggle-editor>취소</button>
      <button type="button" data-export-project>저장된 수정본 다운로드</button>
    </div>
    <p data-editor-status role="status"></p>
  </form>`;
}

function renderProject(project) {
  const sequence = projects;
  const index = sequence.indexOf(project);
  const next = sequence[(index + 1) % sequence.length];
  const previous = sequence[(index + sequence.length - 1) % sequence.length];
  const gallery = project.photos?.length || project.video;
  view.innerHTML = `<article>
    <header class="project-header wrap">
      <div class="project-header-actions"><a class="back" href="#project">프로젝트 목록</a>
        ${canEditProjects ? '<button type="button" data-toggle-editor aria-controls="project-editor" aria-expanded="false">편집 모드</button>' : ''}
      </div>
      <div class="project-heading"><div><h1>${escapeHtml(project.title)}</h1><p>${escapeHtml(project.event)}</p></div>
        ${project.award ? `<div class="award yellow"><img src="assets/win.png${assetRevision}" alt="">${escapeHtml(project.award)}</div>` : ''}
      </div>
      ${canEditProjects ? projectEditor(project) : ''}
    </header>
    ${gallery ? '<section id="gallery" class="gallery" aria-label="프로젝트 시연 및 스크린샷"></section>' : ''}
    ${project.headline || project.description || project.playUrl || project.githubUrl ? `<section class="game-description wrap">
      <div class="project-intro-heading">
        <h2>프로젝트 소개</h2>
        ${project.githubUrl ? `<a href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.49c-2.23.48-2.7-.95-2.7-.95-.36-.92-.89-1.17-.89-1.17-.73-.5.06-.49.06-.49.8.06 1.22.82 1.22.82.72 1.22 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.96 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.08-1.87 3.76-3.65 3.96.29.25.54.73.54 1.48v2.21c0 .21.15.46.55.38A8 8 0 0 0 8 0Z"/></svg>GitHub
          ${project.githubRequiresAccess ? '<small>권한 필요</small>' : ''}
        </a>` : ''}
        ${project.playUrl ? `<a href="${escapeHtml(project.playUrl)}" target="_blank" rel="noopener noreferrer">
          <span aria-hidden="true">▶</span>${escapeHtml(project.linkLabel || '게임 플레이')}
        </a>` : ''}
      </div>
      ${project.headline ? `<h3>${escapeHtml(project.headline)}</h3>` : ''}
      ${project.description ? `<p>${escapeHtml(project.description)}</p>` : ''}</section>` : ''}
    ${project.facts ? `<dl class="facts wrap">${project.facts.map(([label, value]) =>
      `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join('')}</dl>` : ''}
    ${story(project)}
    <section class="contribution wrap"><h2>기여도</h2>
      ${project.role ? `<p>${escapeHtml(project.role)}</p>` : ''}
      ${(project.contributions ?? []).map(([label, amount, color]) => `<div class="bar ${color}">
        <label>${escapeHtml(label)} ${amount}%<meter min="0" max="100" value="${amount}">${amount}%</meter></label></div>`).join('')}
      ${project.detailedContributions?.length || canEditProjects ? `<details class="detailed-contribution"${project.detailedContributions?.length ? ' open' : ''}>
        <summary>상세 기여</summary>
        ${project.detailedContributions?.length
          ? `<ul>${project.detailedContributions.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
          : '<p>등록된 상세 기여가 없습니다.</p>'}
        ${canEditProjects ? '<button type="button" data-toggle-editor data-focus-detail>상세 기여 편집</button>' : ''}
      </details>` : ''}
      ${project.tools?.length ? `<h3 class="tools-heading">활용 도구</h3>
        <ul class="chips">${project.tools.map(tool => `<li>${escapeHtml(tool)}</li>`).join('')}</ul>` : ''}
    </section>
    ${project.status || project.award || project.outcome || project.outcomeMedia?.length || project.outcomeLinks?.length ? `<section class="outcome wrap"><h2>주요 성과</h2>
      ${[project.award, project.status, project.outcome].filter(Boolean).map(item => `<p>${escapeHtml(item)}</p>`).join('')}
      ${project.outcomeLinks?.length ? `<ul class="outcome-links" aria-label="관련 기사">
        ${project.outcomeLinks.map(([label, url]) => `<li><a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`).join('')}
      </ul>` : ''}
      ${renderStoryMedia(project.outcomeMedia, project.id === 'colla-zoo' ? 'booth-photos' : '')}</section>` : ''}
    ${!project.playUrl && project.linkLabel ? `<p class="release-status wrap">${escapeHtml(project.linkLabel)}</p>` : ''}
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
      galleryTimer = setInterval(() => advance(1), 1300);
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
    </div>${experienceRows(rows, year !== '2023-')}`;
}

function experienceRows(rows, monthOnly, compact = false) {
  return `<ul class="experience-list">${rows.length ? rows.map(item => {
      const project = projects.find(entry => entry.id === item.project);
      const record = project || otherAwards.find(entry => entry.id === item.project);
      const title = record && !item.label.includes(record.title) ? `${item.label} 〈${record.title}〉` : item.label;
      const label = escapeHtml(title);
      const award = record?.award && !(record.id === 'oilgenie' && item.tag === '교내활동') ? record.award : '';
      return `<li><b>${escapeHtml(monthOnly ? item.date.slice(5) : item.date)}<span${compact ? '' : ' class="sr-only"'}>월</span></b>
        <div>${project ? `<a href="${projectLink(project)}">${label}</a>` :
          item.url ? `<a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">${label}</a>` : label}
          ${award ? `<span class="yellow experience-award">${compact ? '<img src="assets/win.png" alt="">' : ' · '}${escapeHtml(award)}</span>` : ''}
          ${item.note ? `<p class="experience-note">${escapeHtml(item.note)}</p>` : ''}
          ${project && item.url ? `<a class="experience-link" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">관련 링크</a>` : ''}
        </div>${compact ? '' : `<strong>${escapeHtml(item.tag)}</strong>`}</li>`;
    }).join('') : '<li class="empty">등록된 활동이 없습니다.</li>'}</ul>`;
}

function renderMainProfile() {
  const years = [...new Set(experience.map(item => item.year))].sort((a, b) => b - a);
  return `<section class="main-profile" aria-labelledby="main-profile-title">
    <div class="wrap">
      <h2 id="main-profile-title">Profile</h2>
      <div class="main-profile-grid">
        <div class="main-profile-info">
          <img src="${imagePath('portrait')}" alt="김지민 프로필 사진" width="409" height="475" loading="lazy">
          ${education}
          <div class="main-profile-card">
            <p>${github}</p>
            <dl>${skills.map(([label, , items]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(items.join(' · '))}</dd></div>`).join('')}</dl>
          </div>
        </div>
        <div class="main-profile-timeline" aria-label="연도별 활동">
          ${years.map(value => `<section><h3>${value}</h3>${experienceRows(experience.filter(item => item.year === value), true, true)}</section>`).join('')}
        </div>
      </div>
      <button class="back-to-top" type="button" data-back-to-top><span aria-hidden="true">↑</span>맨 위로</button>
    </div>
  </section>`;
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
    projectCategory = 0;
    renderProjectIndex(true);
  }
  document.title = project && page === 'project' ? project.title + ' | 김지민' : '김지민 | AI GAME DESIGNER';
  window.scrollTo(0, 0);
  if (moveFocus) view.focus({ preventScroll: true });
}

view.addEventListener('submit', event => {
  const form = event.target;
  if (!canEditProjects || form.id !== 'project-editor') return;
  event.preventDefault();
  const project = projects.find(item => item.id === form.dataset.projectId);
  const fields = new FormData(form);
  const read = key => String(fields.get(key) ?? '').trim();
  const lines = key => read(key).split(/\r?\n/).map(line => line.trim()).filter(Boolean);
  const draft = Object.fromEntries(projectTextFields.map(([key]) => [key, read(key)]));
  if (!draft.title) {
    form.querySelector('[data-editor-status]').textContent = '프로젝트명을 입력해 주세요.';
    form.elements.title.focus();
    return;
  }
  draft.detailedContributions = lines('detailedContributions');
  draft.storyOrder = fields.getAll('storyOrder');
  draft.storyMediaLabels = Object.fromEntries(orderedStoryRows(project).flatMap(({ id, item }) => {
    const label = read(`storyLabel:${id}`);
    return item && label ? [[id, label]] : [];
  }));
  draft.tools = lines('tools');
  if (project.facts) draft.facts = project.facts.map(([label], index) => [label, read(`fact-${index}`)]);
  if (project.contributions) {
    draft.contributions = project.contributions.map(([, amount, color], index) => [read(`contribution-${index}`), amount, color]);
  }
  if (project.ai) {
    const roles = aiRoleLabels.map((_, index) => read(`aiRole-${index}`));
    draft.aiRoles = roles.some(Boolean) ? roles : [];
  }
  for (const key of ['intent', 'process']) {
    const existing = project[key]?.length ? project[key] : [[null, null]];
    draft[key] = existing.map(([image, alt], index) => [image, alt, read(`${key}-${index}`)])
      .filter(([image, , text]) => image || text);
  }
  try {
    localStorage.setItem(projectDraftKey(project.id), JSON.stringify(draft));
  } catch {
    form.querySelector('[data-editor-status]').textContent = '브라우저 저장소에 쓸 수 없습니다. 입력한 내용은 편집창에 남아 있습니다.';
    return;
  }
  Object.assign(project, draft);
  categories[1] = projects.filter(item => item.award);
  renderRoute(true);
});

view.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.hasAttribute('data-back-to-top')) {
    document.querySelector('[data-page="main"]').focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
    return;
  }
  if (button.dataset.moveStory) {
    const item = button.closest('li');
    if (button.dataset.moveStory === 'up') {
      item.previousElementSibling?.before(item);
    } else {
      item.nextElementSibling?.after(item);
    }
    const direction = button.dataset.moveStory;
    const sibling = direction === 'up' ? item.previousElementSibling : item.nextElementSibling;
    const opposite = direction === 'up' ? 'down' : 'up';
    (sibling ? button : item.querySelector(`[data-move-story="${opposite}"]`)).focus();
    return;
  }
  if (button.hasAttribute('data-toggle-editor')) {
    const form = view.querySelector('#project-editor');
    const trigger = view.querySelector('[aria-controls="project-editor"]');
    const focusDetail = button.hasAttribute('data-focus-detail');
    form.hidden = !form.hidden && !focusDetail;
    trigger.setAttribute('aria-expanded', String(!form.hidden));
    if (form.hidden) {
      form.reset();
      const order = form.querySelector('[data-story-order]');
      if (order) order.append(...[...order.children].sort((a, b) => a.dataset.originalPosition - b.dataset.originalPosition));
      form.querySelector('[data-editor-status]').textContent = '';
      trigger.focus();
    } else {
      form.elements[focusDetail ? 'detailedContributions' : 'title'].focus();
    }
    return;
  }
  if (button.hasAttribute('data-export-project')) {
    const form = button.form;
    const status = form.querySelector('[data-editor-status]');
    try {
      const id = form.dataset.projectId;
      const draft = localStorage.getItem(projectDraftKey(id));
      if (!draft) {
        status.textContent = '먼저 변경 사항을 저장해 주세요.';
        return;
      }
      const link = document.createElement('a');
      const url = URL.createObjectURL(new Blob([JSON.stringify({ id, ...JSON.parse(draft) }, null, 2)], { type: 'application/json' }));
      link.href = url;
      link.download = `${id}-portfolio-draft.json`;
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch {
      status.textContent = '저장된 수정본을 읽을 수 없습니다.';
    }
    return;
  }
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
    [['지금 보고 계신 페이지,', '']],
    [['사람', 'blue'], ['이 [', ''], ['FIGMA', 'blue', true], [']로 설계하고,', '']],
    [['AI', 'pink'], [' 툴 [', ''], ['CODEX', 'pink', true], [']로 구현했습니다.', '']]
  ];
  const tools = [['FIGMA', 'BLENDER', 'PROCREATE'], ['CODEX', 'CLAUDE', 'CHATGPT']];
  const typing = document.querySelector('#typing');
  const segments = lines.flatMap(line => {
    const row = typing.appendChild(document.createElement('div'));
    return line.map(([value, color, rotates]) => {
      const span = row.appendChild(document.createElement('span'));
      span.className = color;
      return { span, value, rotates };
    });
  });
  const variable = segments.filter(({ rotates }) => rotates);
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
