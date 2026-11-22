const naraDetails = {
    id: 'nara', title: '나라장터 HOW MUCH?', event: '조달청 AI 게임·콘텐츠 공모전 출품',
    status: '결과 발표 대기 중', cover: 'nara', video: 'nara.mp4',
    photos: ['nara', 'nara-game', 'nara-result'],
    headline: '나라장터 입찰에 도전해 보세요! 익숙한 물건의 가격을 맞혀 보세요!',
    description: '일상에서 자주 보는 물건의 가격을 맞히며 나라장터와 조달청의 역할을 알아가는 시뮬레이션 퀴즈입니다. 플레이어는 입찰 참가자가 되어 10라운드 동안 제한된 기회 안에 가격을 맞히고 전국 순위에 도전합니다.',
    facts: [['기간', '2026.11 · 2주'], ['인원', '3인 · 개발 2, 아트 1'], ['툴', 'Unity 6'], ['플랫폼', 'PC']],
    intent: [
      ['nara-game', '가격 추정 화면', '조달청 API를 분석하고 물품의 흥미도, 가격, 규격, 출처를 검토해 104개의 문제를 선정했습니다.'],
      ['nara-result', '점수 결과 화면', '10문제를 무작위로 출제하고 정답 허용 오차를 ±10%로 설정했습니다. 시도 횟수에 따라 점수를 차등 지급하고 기기별 최고 점수를 랭킹에 반영했습니다.']
    ],
    process: [
      ['nara-prototype', '초기 웹 프로토타입', 'Codex로 초기 웹 프로토타입을 제작하고 기능 테스트를 통해 게임의 진행 방식과 재미를 검증했습니다.'],
      ['nara-design', '초기 타이틀 화면', 'Figma로 화면을 설계한 뒤 PC·모바일 화면과 결과 등급을 개선하고 음악·효과음 시안을 비교했습니다.']
    ],
    contributions: [['기획', 20, 'yellow'], ['아트', 100, 'pink']],
    tools: ['Figma', 'Codex', 'Claude Code'],
    role: '화면 레이아웃과 UI/UX 디자인, 인게임 리소스 제작, 영상 편집, 추가 시스템 기획, 문서 정리',
    playUrl: ''
  };

const projects = activityProjects.map(project => ({
  facts: [['기간', project.date]],
  ...project,
  photos: project.photos ?? (project.cover ? [project.cover] : undefined),
  ...(project.id === 'nara' ? { ...naraDetails, playUrl: project.playUrl } : {})
}));

const featuredAwards = projects.filter(project => project.award);

const experience = activityLog.map(([date, label, tag, project, note, url]) => ({
  year: Number(date.slice(0, 4)),
  date,
  label,
  tag,
  project,
  note,
  url
}));

const skills = [
  ['디자인', 'pink', ['Figma', 'Aseprite', 'Blender', 'Procreate', 'Photoshop']],
  ['엔진 · 코드', 'blue', ['Unity', 'AI 코딩 에이전트']],
  ['협업 · 문서', 'yellow', ['Notion', 'Git', 'MS Office']],
  ['AI', 'green', ['ChatGPT', 'Codex', 'Claude', 'ElevenLabs']]
];
