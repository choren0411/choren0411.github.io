// 프로젝트와 연도별 활동 타임라인.
const activityProjects = [
  {
    "id": "colla-zoo",
    "title": "Colla-ZOO",
    "event": "Unity AI Game Jam",
    "description": "6종의 동물이 머리·몸통·다리를 나눠 맡아 연구소를 탈출하는 협동 게임입니다. 216가지 조합에 따라 외형과 능력이 달라지며, 서로 다른 기믹이 있는 7개 방을 통과합니다.",
    "award": "Unity CLI Special Prize",
    "outcome": "24시간 동안 개발했으며, 수상 후 지스타 유니티 부스에 전시했습니다.",
    "linkLabel": "공개 예정",
    "facts": [
      [
        "기간",
        "2026.11 · 24시간"
      ],
      [
        "인원",
        "4명"
      ],
      [
        "개발 환경",
        "Unity 6, OpenAI"
      ],
      [
        "플랫폼",
        "PC"
      ]
    ],
    "intent": [
      [
        null,
        null,
        "Unity CLI로 개발 과정을 간소화하고, 아트·개발·기획 전반에 AI를 활용해 24시간 안에 완성도 높은 게임을 만드는 것을 목표로 했습니다."
      ]
    ],
    "process": [
      [
        null,
        null,
        "Codex로 게임잼 전용 개발 앱인 Unity Game Jam을 제작하고, OpenAI Responses API를 Unity 에디터에 연동했습니다."
      ]
    ],
    "role": "아티스트로 참여해 게임의 핵심 콘셉트와 레벨 구조를 제안했습니다. 인게임 배경 리소스를 중점적으로 제작하고, 인트로와 아웃트로 컷신의 스토리보드를 설계했습니다.",
    "tools": [
      "Unity",
      "OpenAI Platform",
      "ChatGPT"
    ],
    "contributions": [
      [
        "기획",
        30,
        "yellow"
      ],
      [
        "아트",
        70,
        "pink"
      ]
    ],
    "ai": true,
    "cover": "colla-cover",
    "video": "colla.mp4",
    "photos": [
      "colla-cover",
      "colla-game",
      "colla-stage"
    ],
    "processMedia": [
      [
        "colla-zoo-process-1.png",
        "Unity Game Jam 개발 앱의 채팅 화면"
      ],
      [
        "colla-zoo-process-2.png",
        "Unity Game Jam 개발 앱의 사용량 화면"
      ],
      [
        "colla-zoo-process-3.png",
        "Colla-ZOO의 AI 아트 제작 자료"
      ],
      [
        "colla-zoo-process-4.png",
        "Colla-ZOO의 AI 개발 흐름"
      ]
    ]
  },
  {
    "id": "nara",
    "title": "나라장터 HOW MUCH?",
    "event": "조달청 AI 게임·콘텐츠 공모전 출품",
    "headline": "나라장터 입찰에 도전해 익숙한 물건의 가격을 맞혀 보세요!",
    "description": "일상에서 자주 보는 물건의 가격을 맞히며 나라장터와 조달청의 역할을 알아가는 시뮬레이션 퀴즈입니다. 플레이어는 입찰 참가자가 되어 10라운드 동안 제한된 기회 안에 가격을 맞히고 전국 순위에 도전합니다.",
    "status": "결과 발표 대기 중",
    "playUrl": "https://k56754665.github.io/nara-price-quiz/",
    "linkLabel": "게임 플레이",
    "facts": [
      [
        "기간",
        "2026.11 · 2주"
      ],
      [
        "인원",
        "3명 · 개발 2명 · 아트 1명"
      ],
      [
        "개발 환경",
        "Unity 6"
      ],
      [
        "플랫폼",
        "PC"
      ]
    ],
    "intent": [
      [
        "nara-game",
        "가격 추정 화면",
        "조달청 API를 분석하고 물품의 흥미도, 가격, 규격, 출처를 검토해 104개의 문제를 선정했습니다."
      ],
      [
        "nara-result",
        "점수 결과 화면",
        "10문제를 무작위로 출제하고 정답 허용 오차를 ±10%로 설정했습니다. 시도 횟수에 따라 점수를 차등 지급하고 기기별 최고 점수를 랭킹에 반영했습니다."
      ]
    ],
    "process": [
      [
        "nara-prototype",
        "초기 웹 프로토타입",
        "Codex로 초기 웹 프로토타입을 제작하고 기능 테스트를 통해 게임의 진행 방식과 재미를 검증했습니다."
      ],
      [
        "nara-design",
        "초기 타이틀 화면",
        "Figma로 화면을 설계한 뒤 PC·모바일 화면과 결과 등급을 개선하고 음악·효과음 시안을 비교했습니다."
      ]
    ],
    "role": "화면 레이아웃과 UI/UX를 디자인하고, 인게임 리소스 제작과 영상 편집을 맡았습니다. 추가 시스템도 기획하고 문서를 정리했습니다.",
    "tools": [
      "Figma",
      "Codex",
      "Claude Code"
    ],
    "contributions": [
      [
        "기획",
        20,
        "yellow"
      ],
      [
        "아트",
        100,
        "pink"
      ]
    ],
    "ai": true,
    "cover": "nara",
    "video": "nara.mp4",
    "photos": [
      "nara",
      "nara-game",
      "nara-result"
    ]
  },
  {
    "id": "hai",
    "title": "HAI: 너 정말 핵심을 찔렀어",
    "event": "NHN AI 해커톤",
    "headline": "AI인 척 인간들의 요청을 처리하세요!",
    "description": "전 세계가 주목하는 AI 프로그램 ‘HAI’의 출시를 앞둔 개발자가 마지막 학습 데이터를 채우기 위해 AI인 척 사람들의 요청에 답하는 대화형 미니게임입니다. 일상적인 요청부터 엉뚱한 요청까지 처리해 토큰을 모으고, 새로운 모델과 능력을 해금합니다.",
    "award": "챌린저상",
    "linkLabel": "공개 미정",
    "facts": [
      [
        "기간",
        "2026.09"
      ],
      [
        "개발 환경",
        "Unity 6"
      ],
      [
        "플랫폼",
        "PC"
      ]
    ],
    "intent": [
      [
        "hai-12",
        "HAI 시연 장면",
        "AI 밈을 활용한 채팅과 LLM 기반 대화를 통해 사람이 AI처럼 응답하는 상황을 경험하도록 설계했습니다."
      ]
    ],
    "process": [
      [
        "hai-12",
        "HAI 구현 화면",
        "게임잼 주제인 ‘2026’을 AI와 밈으로 해석했습니다. 기능별 구현 계획을 검토한 뒤 Unity CLI로 컴파일 상태, 콘솔 메시지, 테스트 결과를 자동으로 검증했습니다."
      ],
      [
        "hai-25",
        "HAI 시연 화면",
        "LLM을 연동해 캐릭터의 페르소나에 맞춰 자동으로 응답하는 기능을 구현했습니다."
      ]
    ],
    "role": "인게임 리소스를 제작하고 UI/UX를 구성했습니다. 등장인물의 페르소나를 설계하고 LLM에 연동했습니다.",
    "tools": [
      "Claude Code",
      "Codex",
      "ChatGPT",
      "Motion Vid. AI"
    ],
    "contributions": [
      [
        "기획",
        40,
        "yellow"
      ],
      [
        "아트",
        100,
        "pink"
      ]
    ],
    "ai": true,
    "cover": "hai-12",
    "video": "hai.mp4",
    "photos": [
      "hai-12",
      "hai-25"
    ],
    "processMedia": [
      [
        "hai-process-1.png",
        "HAI의 분야별 AI 도구 활용 자료"
      ],
      [
        "hai-process-2.png",
        "HAI의 LLM 페르소나 연동 자료"
      ]
    ]
  },
  {
    "id": "play-your-way",
    "title": "PLAY it YOUR WAY",
    "event": "PlayStation 협업 프로젝트",
    "headline": "비공개",
    "playUrl": "https://dotoridoguldan.github.io/Project-PHD/",
    "linkLabel": "프로젝트 웹사이트",
    "facts": [
      [
        "기간",
        "2026.08"
      ],
      [
        "인원",
        "4명"
      ],
      [
        "플랫폼",
        "Web"
      ]
    ],
    "ai": false,
    "cover": "play-your-way-1",
    "photos": [
      "play-your-way-1",
      "play-your-way-2"
    ],
    "processMedia": [
      [
        "play-your-way-process-1.png",
        "PLAY it YOUR WAY 화면 디자인 시안"
      ]
    ]
  },
  {
    "id": "monstone",
    "title": "몬스톤: 알까기 대전쟁",
    "event": "넥슨 2026 메커톤 1회차",
    "headline": "부딪히고 터지는 알까기 슈팅 액션!",
    "description": "간단한 드래그 조작으로 사방에서 몰려오는 적을 튕겨 내는 캐주얼 알까기 게임입니다. 적을 물리치며 나만의 몬스톤을 성장시키고, 고유 능력을 지닌 몬스톤을 수집하고 조합해 적의 공세를 막아 보세요.",
    "outcome": "플레이어 203명, 조회수 294회를 기록했습니다.",
    "playUrl": "https://maplestoryworlds.nexon.com/ko/play/932ca835460d49b58e84c1c4eb1d2b7e/",
    "linkLabel": "게임 플레이",
    "facts": [
      [
        "기간",
        "2026.07"
      ],
      [
        "인원",
        "4명"
      ],
      [
        "개발 환경",
        "메이플스토리 월드"
      ],
      [
        "플랫폼",
        "Web (메이플스토리 월드)"
      ]
    ],
    "process": [
      [
        null,
        null,
        "메이플스토리 월드 MCP를 활용해 개발했습니다."
      ]
    ],
    "role": "아트 콘셉트를 잡고 UI/UX 레이아웃을 구성했습니다. 인게임 캐릭터와 배경 구성도 기획했습니다.",
    "tools": [
      "Claude",
      "ChatGPT"
    ],
    "contributions": [
      [
        "기획",
        25,
        "yellow"
      ],
      [
        "아트",
        100,
        "pink"
      ]
    ],
    "ai": false,
    "cover": "monstone-1",
    "video": "monstone.mp4",
    "photos": [
      "monstone-1",
      "monstone-2"
    ]
  },
  {
    "id": "stickerbook",
    "title": "햄스터의 스티커북",
    "event": "텀블벅 펀딩 · Steam 출시",
    "headline": "귀여운 스티커로 데스크톱을 꾸며 보세요!",
    "description": "다양한 스티커를 데스크톱 화면 위에 자유롭게 붙이고 뗄 수 있는 입력 반응형 오버레이 앱입니다. 일하거나, 게임하거나, 공부하는 동안 화면 어디든 스티커를 배치해 나만의 데스크톱을 꾸며 보세요.",
    "outcome": "텀블벅 전체 6위와 펀딩 목표 286%를 달성했습니다. Steam 다운로드 16,153회, 일평균 사용자 약 30명을 기록했습니다.",
    "playUrl": "https://store.steampowered.com/app/4281140/_/",
    "linkLabel": "Steam 상점",
    "facts": [
      [
        "기간",
        "2026.04–05"
      ],
      [
        "인원",
        "2명"
      ],
      [
        "개발 환경",
        "Unity"
      ],
      [
        "플랫폼",
        "PC"
      ]
    ],
    "tools": [
      "Aseprite",
      "Figma",
      "Procreate"
    ],
    "contributions": [
      [
        "기획",
        50,
        "yellow"
      ],
      [
        "아트",
        100,
        "pink"
      ]
    ],
    "ai": false,
    "cover": "stickerbook-1",
    "video": "stickerbook.mp4",
    "photos": [
      "stickerbook-1",
      "stickerbook-2"
    ],
    "processMedia": [
      [
        "stickerbook-process-1.png",
        "햄스터의 스티커북 상점 스크린샷 1"
      ],
      [
        "stickerbook-process-2.png",
        "햄스터의 스티커북 상점 스크린샷 2"
      ],
      [
        "stickerbook-process-3.png",
        "햄스터의 스티커북 상점 스크린샷 3"
      ],
      [
        "stickerbook-process-4.png",
        "햄스터의 스티커북 상점 스크린샷 4"
      ],
      [
        "stickerbook-process-5.png",
        "햄스터의 스티커북 상점 스크린샷 5"
      ],
      [
        "stickerbook-process-basics.webm",
        "기본 기능"
      ],
      [
        "stickerbook-process-album.webm",
        "스티커북 둘러보기"
      ],
      [
        "stickerbook-process-memo.webm",
        "메모지 사용"
      ],
      [
        "stickerbook-process-letters.webm",
        "알파벳 스티커 붙이기"
      ],
      [
        "stickerbook-process-shop.webm",
        "상점"
      ],
      [
        "stickerbook-process-draw.webm",
        "스티커 뽑기"
      ],
      [
        "stickerbook-process-figma.webm",
        "Figma 화면"
      ]
    ]
  },
  {
    "id": "hamstory",
    "title": "Hamstory",
    "event": "Steam 출시",
    "headline": "점프하고, 추락하고, 다시 일어서는 여정.",
    "description": "점프 타이밍을 맞춰 길을 찾아가는 2D 픽셀 플랫포머입니다. 추락하더라도 눈앞의 길을 살피며 다시 도전할 수 있습니다. 동물 주민들의 따뜻한 위로를 받으며 해씨별로 향하고, 계절마다 변하는 세계를 경험해 보세요.",
    "outcome": "활동 기록 기준 250장을 판매했습니다. 2026 PlayX4 IGIB 부스, 2026 동아시아 게임축제, 2026 Indie Live Expo에 선정됐으며 Steam·스토브·콘솔에 출시했습니다.",
    "playUrl": "https://store.steampowered.com/app/4008550/Hamstory/",
    "linkLabel": "Steam 상점",
    "facts": [
      [
        "기간",
        "2024.05–2026.06"
      ],
      [
        "인원",
        "4명"
      ],
      [
        "개발 환경",
        "Unity"
      ],
      [
        "플랫폼",
        "PC"
      ]
    ],
    "role": "전체 아트 에셋을 제작하고 레이아웃을 디자인했습니다. 내러티브와 캐릭터를 기획하고 UI/UX를 설계·제작했습니다. 비즈니스 리더로서 외부 행사 참여와 콘솔 계약을 담당했습니다.",
    "tools": [
      "Aseprite",
      "Unity"
    ],
    "contributions": [
      [
        "기획",
        30,
        "yellow"
      ],
      [
        "아트",
        100,
        "pink"
      ],
      [
        "비즈니스 매니징·마케팅",
        100,
        "green"
      ]
    ],
    "ai": false,
    "cover": "hamstory-1",
    "video": "hamstory.mp4",
    "photos": [
      "hamstory-1",
      "hamstory-2",
      "hamstory-screenshot-1",
      "hamstory-screenshot-2",
      "hamstory-screenshot-3",
      "hamstory-screenshot-4",
      "hamstory-screenshot-5",
      "hamstory-screenshot-6"
    ],
    "process": [
      [
        null,
        null,
        "아트·기획·개발 전반에 참여하며 게임 제작부터 Steam 출시까지 전 과정을 경험했습니다. 출시를 준비하며 스토브 Indie Boost Lab과 PlayX4 전시에 참여했고, 해외 콘솔 퍼블리싱 계약을 체결해 실제 매출로 이어지는 과정도 경험했습니다."
      ],
      [
        null,
        null,
        "출시를 준비하면서 브랜드 SNS 계정을 개설하고 운영했습니다. 유튜브 구독자 178명, 인스타그램 팔로워 약 1,200명으로 채널을 성장시키며 콘텐츠로 새로운 이용자를 유입시키는 역량을 키웠습니다."
      ]
    ],
    "processMedia": [
      [
        "hamstory-process-youtube.png",
        "Hamstory 유튜브 쇼츠 개발 일지",
        true
      ],
      [
        "hamstory-process-instagram.png",
        "도토리도굴단 인스타그램 프로필",
        true
      ]
    ]
  },
  {
    "id": "suncheon",
    "title": "천만해요, 순천만",
    "event": "2025 순천 AI 게임잼",
    "headline": "아름다운 순천만의 생물들을 만나보세요.",
    "description": "순천만의 갈대 군락과 구하도를 탐험하며 실제 서식 생물 30여 종을 도감에 등록하는 수집 게임입니다. 미니게임으로 보상을 얻고 순천사랑상품권 1,000만 원을 모으면 엔딩에 도달합니다.",
    "award": "특별상",
    "playUrl": "https://youtu.be/nziwvdoJuYs",
    "linkLabel": "소개 영상",
    "facts": [
      [
        "기간",
        "2025.09 · 2박 3일"
      ],
      [
        "인원",
        "5명"
      ],
      [
        "개발 환경",
        "Unity"
      ],
      [
        "플랫폼",
        "PC"
      ]
    ],
    "intent": [
      [
        "suncheon-full-1",
        "순천만 생물 포획 미니게임",
        "실제로 순천만에 서식하는 생물을 발견하고 도감에 등록하며 순천만의 생태를 자연스럽게 알아가도록 설계했습니다."
      ]
    ],
    "process": [
      [
        "suncheon-full-2",
        "순천만 탐험 지도",
        "GameAIfy로 수채화 시안을 생성하고 Procreate에서 후처리해 아트 스타일을 맞췄습니다."
      ]
    ],
    "role": "인게임 리소스를 제작하고 아트 디렉팅을 맡았습니다. 게임 내 도감 리소스와 UI/UX도 기획했습니다.",
    "tools": [
      "GameAIfy",
      "Procreate"
    ],
    "contributions": [
      [
        "기획",
        25,
        "yellow"
      ],
      [
        "아트",
        100,
        "pink"
      ]
    ],
    "ai": true,
    "cover": "suncheon-full-1",
    "video": "suncheon-full.mp4",
    "photos": [
      "suncheon-full-1",
      "suncheon-full-2"
    ],
    "processMedia": [
      [
        "suncheon-process-1.png",
        "천만해요, 순천만의 아트·개발 AI 활용 자료"
      ]
    ]
  },
  {
    "id": "memories",
    "title": "How Can I Make Memories",
    "event": "제2회 스파르타게임잼",
    "headline": "우리는 어떻게 기억을 만들까요?",
    "facts": [
      [
        "기간",
        "2025.08"
      ],
      [
        "인원",
        "4명"
      ],
      [
        "개발 환경",
        "Unity"
      ],
      [
        "플랫폼",
        "PC"
      ]
    ],
    "role": "아트 리소스를 제작하고 인게임 HUD를 기획·디자인했습니다.",
    "contributions": [
      [
        "기획",
        20,
        "yellow"
      ],
      [
        "아트",
        100,
        "pink"
      ]
    ],
    "ai": false,
    "cover": "memories-2",
    "photos": [
      "memories-1",
      "memories-2"
    ]
  },
  {
    "id": "horrops",
    "title": "Horrops",
    "event": "GameAIfy AI 기반 게임제작 공모전",
    "headline": "종이 세상에서 펼쳐지는 기묘한 이야기",
    "description": "‘외눈박이 마을에 간 두눈박이’ 우화를 모티프로 한 공포 게임입니다. 플레이어는 자신을 세눈박이로 바꾸려는 주민들을 피해 고향으로 돌아가야 합니다.",
    "award": "우수상",
    "playUrl": "https://dotoridoguldan.itch.io/horrops",
    "linkLabel": "게임 플레이",
    "facts": [
      [
        "기간",
        "2025.08"
      ],
      [
        "인원",
        "2명"
      ],
      [
        "개발 환경",
        "Unity"
      ],
      [
        "플랫폼",
        "PC · Web"
      ]
    ],
    "intent": [
      [
        "horrops-full-1",
        "Horrops 화면",
        "군중이 이질적인 존재를 배척하는 상황을 1인칭 공포로 표현했습니다."
      ]
    ],
    "process": [
      [
        "horrops-full-2",
        "Horrops 화면",
        "GameAIfy로 종이 질감의 그래픽을 실험했습니다. 시야 제한과 플레이어를 응시하는 오브젝트로 긴장감을 높였습니다."
      ]
    ],
    "role": "GameAIfy로 게임 내 아트 에셋을 모두 제작한 뒤 보정해 적용했습니다. 레벨의 장면과 공간을 설계하고 전체 플레이 흐름을 기획했습니다.",
    "tools": [
      "GameAIfy"
    ],
    "contributions": [
      [
        "기획",
        50,
        "yellow"
      ],
      [
        "개발",
        20,
        "blue"
      ],
      [
        "아트",
        100,
        "pink"
      ]
    ],
    "ai": true,
    "cover": "horrops-full-1",
    "photos": [
      "horrops-full-1",
      "horrops-full-2"
    ],
    "processMedia": [
      [
        "horrops-plan-1.png",
        "Horrops 기획서 1쪽",
        true
      ],
      [
        "horrops-plan-2.png",
        "Horrops 기획서 2쪽",
        true
      ],
      [
        "horrops-plan-3.png",
        "Horrops 기획서 3쪽",
        true
      ],
      [
        "horrops-plan-4.png",
        "Horrops 기획서 4쪽",
        true
      ],
      [
        "horrops-plan-5.png",
        "Horrops 기획서 5쪽",
        true
      ],
      [
        "horrops-plan-6.png",
        "Horrops 기획서 6쪽",
        true
      ],
      [
        "horrops-plan-7.png",
        "Horrops 기획서 7쪽",
        true
      ],
      [
        "horrops-plan-8.png",
        "Horrops 기획서 8쪽",
        true
      ],
      [
        "horrops-plan-9.png",
        "Horrops 기획서 9쪽",
        true
      ],
      [
        "horrops-gameaify-1.png",
        "GameAIfy 아트 에셋 제작 화면 1",
        true
      ],
      [
        "horrops-gameaify-5.png",
        "GameAIfy 아트 에셋 제작 화면 5",
        true
      ],
      [
        "horrops-gameaify-10.png",
        "GameAIfy 아트 에셋 제작 화면 10",
        true
      ]
    ]
  },
  {
    "id": "ssangryuk",
    "title": "쌍륙",
    "event": "2025 게임인재단 공모전",
    "description": "백제 시대부터 명절과 일상에서 즐겨 온 한국 전통 놀이 ‘쌍륙’을 디지털 게임으로 옮겼습니다. 전래 동화 ‘해와 달이 된 오누이’를 모티프로 한 해님과 달님으로 전통 놀이를 즐길 수 있습니다.",
    "award": "대상",
    "playUrl": "https://dotoridoguldan.itch.io/ssangryuk",
    "linkLabel": "게임 플레이",
    "facts": [
      [
        "기간",
        "2025.07"
      ],
      [
        "인원",
        "2명"
      ],
      [
        "개발 환경",
        "Unity"
      ],
      [
        "플랫폼",
        "PC · Web"
      ]
    ],
    "intent": [
      [
        "ssangryuk-1",
        "쌍륙 게임 화면",
        "점차 잊혀 가는 쌍륙의 가치와 매력을 다시 알리고자 했습니다. 전래 동화 속 캐릭터와 직관적인 조작으로 진입 장벽을 낮췄습니다. 백개먼과 비슷한 규칙을 활용해 해외 플레이어도 쉽게 이해하고 누구나 집에서 즐길 수 있도록 기획했습니다."
      ]
    ],
    "process": [
      [
        null,
        null,
        "GameAIfy로 아트 에셋을 제작한 뒤 보정해 적용했습니다."
      ]
    ],
    "role": "전체 아트 에셋을 제작하고 아트 콘셉트와 UI/UX를 기획했습니다.",
    "tools": [
      "GameAIfy",
      "Figma",
      "Procreate"
    ],
    "contributions": [
      [
        "기획",
        55,
        "yellow"
      ],
      [
        "아트",
        100,
        "pink"
      ]
    ],
    "ai": true,
    "cover": "ssangryuk-1",
    "video": "ssangryuk.mp4",
    "photos": [
      "ssangryuk-1"
    ]
  },
  {
    "id": "floor",
    "title": "FLOOR",
    "event": "커피한잔 게임 콘테스트",
    "headline": "큐브를 쌓으며 올라가세요.",
    "description": "큐브를 차곡차곡 쌓으며 올라가는 캐주얼 게임입니다. 세피리아의 아이템 정리 방식에서 영감을 받아 큐브를 정돈하고 쌓는 재미를 담았습니다.",
    "playUrl": "https://dotoridoguldan.itch.io/floor",
    "linkLabel": "게임 플레이",
    "facts": [
      [
        "기간",
        "2025.06"
      ],
      [
        "인원",
        "2명"
      ],
      [
        "개발 환경",
        "Unity"
      ],
      [
        "플랫폼",
        "PC · Web"
      ]
    ],
    "contributions": [
      [
        "기획",
        10,
        "yellow"
      ],
      [
        "아트",
        100,
        "pink"
      ]
    ],
    "ai": false,
    "cover": "floor-1",
    "photos": [
      "floor-1",
      "floor-2"
    ]
  },
  {
    "id": "hamster-legacy",
    "title": "HamsterLegacy",
    "event": "이화여자대학교 게임제작동아리 오르카",
    "headline": "햄스터 요원 Pip의 우주 여정!",
    "description": "평화롭던 햄스터별 ‘Hamintis’에 정체불명의 거대한 침입자가 나타나 별의 보물 ‘생명의 씨앗’을 빼앗아 갑니다. 혼란에 빠진 별에 단 한 명의 요원, ‘Pip’이 호출됩니다. 작전명 ‘Hamster Legacy’. 괴물의 흔적을 쫓아 생명의 씨앗을 되찾는 우주 여정이 시작됩니다.",
    "playUrl": "https://mandlemandle.com/projects/hamsterlegacy",
    "linkLabel": "게임 플레이",
    "facts": [
      [
        "기간",
        "2025.03–06"
      ],
      [
        "인원",
        "4명"
      ],
      [
        "개발 환경",
        "Unity"
      ],
      [
        "플랫폼",
        "PC · Web"
      ]
    ],
    "intent": [
      [
        null,
        null,
        "아인슈페너 한 잔처럼 달콤하고 부드럽게 즐길 수 있는 게임을 만들고자 했습니다. 부드러운 크림 아래 진한 커피가 있듯, 편안한 모험 속에 깊이 있는 이야기와 메시지를 담았습니다. 커피 한 잔 가격으로 달콤함과 사색이 어우러진 우주 모험을 즐길 수 있도록 기획했습니다."
      ]
    ],
    "role": "레벨 디자인을 기획했습니다.",
    "tools": [
      "Unity",
      "Figma"
    ],
    "contributions": [
      [
        "기획",
        80,
        "yellow"
      ],
      [
        "개발",
        10,
        "blue"
      ]
    ],
    "ai": false,
    "cover": "hamster-legacy-1",
    "photos": [
      "hamster-legacy-1",
      "hamster-legacy-2"
    ]
  },
  {
    "id": "bystander",
    "title": "방관자: Bystander",
    "event": "만들래 10분 게임콘테스트",
    "headline": "불빛에서 태어난 당신은 과거로 돌아갈 수 없는 세계를 탐험합니다.",
    "description": "빛이 없으면 살아갈 수 없는 세계에서 타인을 도울 수 있을까요? ‘위험에 처한 다섯 명을 구하기 위해 한 명을 희생할 것인가?’라는 트롤리 딜레마를 통해 플레이어가 자신의 가치관을 돌아보도록 구성했습니다.",
    "outcome": "공모전 7위",
    "playUrl": "https://play.unity.com/en/games/5b2c0300-c291-4f9b-bd0d-40d489dab8c8/bystander",
    "linkLabel": "게임 플레이",
    "facts": [
      [
        "기간",
        "2025.02"
      ],
      [
        "인원",
        "3명"
      ],
      [
        "개발 환경",
        "Unity"
      ],
      [
        "플랫폼",
        "PC · Web"
      ]
    ],
    "intent": [
      [
        null,
        null,
        "‘방치’라는 주제를 타인에 대한 방관으로 해석했습니다. 도덕적 딜레마 속에서 자신의 선택을 시험하는 선택지형 게임으로 기획했습니다."
      ]
    ],
    "tools": [
      "Aseprite",
      "Unity"
    ],
    "contributions": [
      [
        "기획",
        40,
        "yellow"
      ],
      [
        "아트",
        100,
        "pink"
      ]
    ],
    "ai": false,
    "cover": "bystander-2",
    "photos": [
      "bystander-1",
      "bystander-2"
    ]
  },
  {
    "id": "snow-love",
    "title": "눈사랑",
    "event": "만들래 10분 게임콘테스트",
    "headline": "눈사람이 녹으면, 봄이 오겠지. 그때 다시 놀자.",
    "description": "겨울이 깊어질수록 엄마의 숨도 가빠졌습니다. 창밖에는 여전히 눈사람이 서 있었고, 겨울은 끝나지 않을 것만 같았습니다. 엄마는 창문 너머 하얀 세상을 바라보며 조용히 숨을 골랐습니다. 아이에게 눈사람은 엄마와 함께한 모든 추억이었습니다. 눈사람이 녹아야 봄이 올 것입니다.",
    "outcome": "공모전 10위",
    "playUrl": "https://play.unity.com/en/games/1d1b722c-e0df-481e-96a2-2255d95bd800/snowman",
    "linkLabel": "게임 플레이",
    "facts": [
      [
        "기간",
        "2025.02"
      ],
      [
        "인원",
        "3명"
      ],
      [
        "개발 환경",
        "Unity"
      ],
      [
        "플랫폼",
        "Web"
      ]
    ],
    "contributions": [
      [
        "기획",
        35,
        "yellow"
      ],
      [
        "아트",
        100,
        "pink"
      ]
    ],
    "ai": false,
    "cover": "snow-love-1",
    "photos": [
      "snow-love-1",
      "snow-love-2"
    ]
  },
  {
    "id": "unbelibubble",
    "cover": "unbelibubble-process-1.png",
    "title": "Unbubblibubble",
    "event": "2025 젬파이 × in Seoul 게임잼",
    "headline": "위험한 주방에서 비눗방울을 지켜 주세요!",
    "description": "주방 안을 떠다니는 비눗방울을 끝까지 지키는 게임입니다. 여러 주방용품과 상호작용해 비눗방울이 터지지 않도록 보호하세요!",
    "outcome": "2박 3일 게임잼 완주",
    "playUrl": "https://globalgamejam.org/games/2025/unbelibubble-6",
    "linkLabel": "Global Game Jam 프로젝트",
    "facts": [
      [
        "기간",
        "2025.01"
      ],
      [
        "인원",
        "5명"
      ],
      [
        "개발 환경",
        "Unity"
      ],
      [
        "플랫폼",
        "PC"
      ]
    ],
    "process": [
      [
        null,
        null,
        "도트 그래픽으로 텍스처 UV 맵을 제작하고 3D 모델에 적용했습니다."
      ]
    ],
    "tools": [
      "Aseprite",
      "Blender",
      "Unity"
    ],
    "contributions": [
      [
        "기획",
        30,
        "yellow"
      ],
      [
        "아트",
        50,
        "pink"
      ]
    ],
    "ai": false,
    "processMedia": [
      [
        "unbelibubble-process-1.png",
        "Unbubblibubble 타이틀 화면 시안"
      ],
      [
        "unbelibubble-process-2.png",
        "Unbubblibubble 시작 버튼 시안"
      ],
      [
        "unbelibubble-process-3.png",
        "Unbubblibubble 만화 연출 시안"
      ]
    ]
  }
];

const otherAwards = [
  {
    "id": "greencycle",
    "title": "GreenCycle",
    "event": "Ewha-KAIST 기후테크 이노베이션 스프린트",
    "award": "장려상",
    "facts": [
      [
        "기간",
        "2025.04"
      ]
    ],
    "description": "유기성 폐기물 공급부터 바이오가스 유통까지 이어지는 에너지 공급 솔루션."
  },
  {
    "id": "oilgenie",
    "title": "오일지니",
    "event": "2024 수도권역 미니 아이코어",
    "award": "장려상",
    "facts": [
      [
        "기간",
        "2024.11"
      ]
    ],
    "description": "천연 첨가물을 활용한 폐식용유 정제제."
  },
  {
    "id": "snow-queen",
    "title": "눈의 여왕",
    "event": "제30회 태백산 눈축제 대학생 눈조각 경연대회",
    "award": "은상 · 태백시장상",
    "facts": [
      [
        "기간",
        "2023.01"
      ]
    ],
    "description": "태백의 겨울 풍경에서 어린 시절의 새하얀 마음을 떠올리도록 기획한 눈조각."
  }
];

const activityLog = [
  [
    "2026.11",
    "2026 조달청 AI 게임·콘텐츠 공모전",
    "공모전",
    "nara"
  ],
  [
    "2026.11",
    "2026 Unity AI Game Jam 참여",
    "게임잼",
    "colla-zoo"
  ],
  [
    "2026.11",
    "스마일게이트 희망스튜디오 〈우리동네 플레이어〉 청년 창작 멘토 활동",
    "대외활동",
    null,
    "청소년과 7주간 AI 활용 게임 제작 및 전시"
  ],
  [
    "2026.09",
    "NHN AI 해커톤 참여",
    "게임잼",
    "hai"
  ],
  [
    "2026.08",
    "PlayStation 협업 프로젝트",
    "팀 활동",
    "play-your-way"
  ],
  [
    "2026.07",
    "넥슨 2026 메커톤 1회차 참여",
    "게임잼",
    "monstone"
  ],
  [
    "2026.06",
    "Hamstory 콘솔 버전 출시",
    "팀 활동",
    "hamstory",
    "Nintendo Switch · Xbox · PlayStation · Microsoft Store",
    "https://www.xbox.com/ko-KR/games/store/hamstory/9nt4chd8db54"
  ],
  [
    "2026.05",
    "햄스터의 스티커북 Steam 출시",
    "팀 활동",
    "stickerbook"
  ],
  [
    "2026.05",
    "PlayX4 Hamstory 전시",
    "팀 활동",
    "hamstory",
    "IGIB 부스 선정"
  ],
  [
    "2026.04",
    "햄스터의 스티커북 텀블벅 펀딩",
    "팀 활동",
    "stickerbook",
    "전체 6위 · 286% 펀딩 달성",
    "https://tumblbug.com/hamstersstickerbook/community/backer"
  ],
  [
    "2026.03",
    "Hamstory Steam·스토브 정식 출시",
    "팀 활동",
    "hamstory",
    "활동 로그 기준 250장 판매"
  ],
  [
    "2025.11",
    "Hamstory 데모 Steam·스토브 출시",
    "팀 활동",
    "hamstory",
    null,
    "https://youtu.be/tnpF9C6B9rE"
  ],
  [
    "2025.09",
    "2025 순천 AI 게임잼 참가",
    "게임잼",
    "suncheon"
  ],
  [
    "2025.08",
    "제2회 스파르타게임잼 참가",
    "게임잼",
    "memories"
  ],
  [
    "2025.08",
    "GameAIfy AI 기반 게임제작 공모전 2025",
    "공모전",
    "horrops"
  ],
  [
    "2025.07",
    "2025 게임인재단 한국전통놀이문화 창작 콘텐츠 공모전",
    "공모전",
    "ssangryuk"
  ],
  [
    "2025.06",
    "인디게임 커뮤니티 채널 BUD 운영진 활동",
    "프리랜서"
  ],
  [
    "2025.06",
    "커피한잔 게임 콘테스트 참가",
    "공모전",
    "floor"
  ],
  [
    "2025.04",
    "Ewha-KAIST 기후테크 이노베이션 스프린트",
    "부트캠프",
    "greencycle",
    "유기성 폐기물 공급부터 바이오가스 유통까지의 에너지 공급 솔루션"
  ],
  [
    "2025.03–06",
    "이화여자대학교 게임제작동아리 오르카 부회장",
    "동아리",
    "hamster-legacy"
  ],
  [
    "2025.02",
    "만들래 10분 게임콘테스트 참가",
    "공모전",
    "bystander",
    "7위"
  ],
  [
    "2025.02",
    "만들래 10분 게임콘테스트 참가",
    "공모전",
    "snow-love",
    "10위"
  ],
  [
    "2025.01",
    "2025 젬파이 × in Seoul 게임잼",
    "게임잼",
    "unbelibubble"
  ],
  [
    "2024.11",
    "2024 수도권역 미니 아이코어(Mini I-Corps)",
    "대회",
    "oilgenie"
  ],
  [
    "2024.09–10",
    "ASAN-EWHA SEED 팀 VIM 활동",
    "교내활동",
    "oilgenie"
  ],
  [
    "2024.08",
    "넥슨 메이플스토리 커리어 캠프 ‘메토링’ 참여",
    "부트캠프",
    null,
    "메이플 코디 IP를 활용한 패션 플랫폼 협업 제안서",
    "https://drive.google.com/file/d/17EYTKyf8zXeVajBBc4ys2DIqFXkY0pC1/view?usp=sharing"
  ],
  [
    "2024.07–12",
    "18기 도전학기제 활동",
    "교내활동",
    null,
    "ESG 기반 환경문제 해결 아트 게임 개발 및 출시 · A등급 · 지원금 400만 원 확보"
  ],
  [
    "2024.07",
    "ASAN-EWHA 유니버시티 기후기술 부트캠프",
    "부트캠프"
  ],
  [
    "2024.05",
    "PlayX4 Hamstory 전시",
    "전시",
    "hamstory"
  ],
  [
    "2023.09~",
    "세종대 게임제작동아리 판도라큐브",
    "동아리",
    null,
    null,
    "https://cafe.naver.com/pcube"
  ],
  [
    "2023.01",
    "제30회 태백산 눈축제 대학생 눈조각 경연대회",
    "대회",
    "snow-queen"
  ],
  [
    "2022.12",
    "제2회 이화 조랭이 해커톤 ‘함께 폄’",
    "해커톤"
  ]
];
