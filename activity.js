// 활동 로그의 작품, 수상, 연도별 타임라인.
const activityProjects = [
  {
    "id": "colla-zoo",
    "title": "Colla-ZOO",
    "event": "Unity AI Game Jam",
    "date": "2026.11",
    "description": "6종의 동물이 머리·몸통·다리를 나눠 맡아 연구소를 탈출하는 협동 게임입니다. 216가지 조합에 따라 외형과 능력이 달라지며, 서로 다른 기믹이 있는 7개 방을 통과합니다.",
    "award": "Unity CLI Special Prize",
    "ai": true,
    "cover": "colla-cover",
    "video": "colla.mp4",
    "photos": ["colla-cover", "colla-game", "colla-stage"],
    "outcome": "24시간 동안 개발했으며, 수상 후 지스타 유니티 부스에 전시했습니다.",
    "facts": [
      [
        "기간",
        "2026.11 · 24시간"
      ]
    ]
  },
  {
    "id": "nara",
    "title": "나라장터 HOW MUCH?",
    "event": "조달청 AI 게임·콘텐츠 공모전 출품",
    "date": "2026.11",
    "ai": true,
    "cover": "nara",
    "video": "nara.mp4",
    "playUrl": "https://k56754665.github.io/nara-price-quiz/",
    "linkLabel": "게임 플레이 링크"
  },
  {
    "id": "hai",
    "title": "HAI: 너 정말 핵심을 찔렀어",
    "event": "NHN AI 해커톤",
    "date": "2026.09",
    "award": "챌린저상",
    "ai": true,
    "cover": "hai-12",
    "photos": [
      "hai-12",
      "hai-25"
    ],
    "video": "hai.mp4",
    "headline": "AI인 척 인간들의 요청을 처리하세요!",
    "description": "출시를 앞둔 AI를 완성하기 위해 개발자가 AI처럼 행동하는 대화형 미니게임입니다. 채팅으로 들어오는 요청을 처리해 토큰을 모으고 새로운 모델과 능력을 해금합니다.",
    "facts": [
      [
        "기간",
        "2026.09"
      ],
      [
        "툴",
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
        "AI 밈을 활용한 채팅과 LLM 기반 대화로 인간과 AI 사이의 역할을 경험하게 했습니다."
      ]
    ],
    "process": [
      [
        "hai-25",
        "HAI 시연 장면",
        "기능별 구현 계획을 검토한 뒤 Unity CLI로 컴파일, 콘솔, 테스트를 자동 검증했습니다."
      ]
    ],
    "tools": [
      "Claude Code",
      "Codex",
      "ChatGPT",
      "Motion Vid. AI"
    ]
  },
  {
    "id": "play-your-way",
    "title": "PLAY it YOUR WAY",
    "event": "PlayStation 협업 프로젝트",
    "date": "2026.08",
    "ai": false,
    "cover": "play-your-way-1",
    "playUrl": "https://dotoridoguldan.github.io/Project-PHD/",
    "linkLabel": "프로젝트 웹사이트",
    "photos": [
      "play-your-way-1",
      "play-your-way-2"
    ]
  },
  {
    "id": "monstone",
    "title": "몬스톤: 알까기 대전쟁",
    "event": "넥슨 2026 메커톤 2기",
    "date": "2026.07",
    "description": "메이플스토리 월드에서 펼쳐지는 캐주얼 슬링샷 액션입니다. 드래그로 몬스톤을 튕겨 적을 물리치고, 고유 능력을 지닌 몬스톤을 수집하고 조합합니다.",
    "ai": false,
    "cover": "monstone-1",
    "video": "monstone.mp4",
    "playUrl": "https://maplestoryworlds.nexon.com/ko/play/932ca835460d49b58e84c1c4eb1d2b7e/",
    "linkLabel": "게임 플레이 링크",
    "photos": [
      "monstone-1",
      "monstone-2"
    ]
  },
  {
    "id": "stickerbook",
    "title": "햄스터의 스티커북",
    "event": "텀블벅 펀딩 · Steam 출시",
    "date": "2026.04–05",
    "ai": false,
    "cover": "stickerbook-1",
    "video": "stickerbook.mp4",
    "playUrl": "https://store.steampowered.com/app/4281140/_/",
    "linkLabel": "Steam 상점",
    "outcome": "텀블벅 전체 6위, 펀딩 286% 달성",
    "photos": [
      "stickerbook-1",
      "stickerbook-2"
    ]
  },
  {
    "id": "hamstory",
    "title": "Hamstory",
    "event": "PlayX4 전시 · Steam·스토브·콘솔 출시",
    "date": "2024.05–2026.06 활동 기록",
    "ai": false,
    "cover": "hamstory-1",
    "video": "hamstory.mp4",
    "playUrl": "https://store.steampowered.com/app/4008550/Hamstory/",
    "linkLabel": "Steam 상점",
    "outcome": "활동 로그 기준 250장 판매. 2026 PlayX4 IGIB 부스 선정.",
    "photos": [
      "hamstory-1",
      "hamstory-2"
    ]
  },
  {
    "id": "suncheon",
    "title": "천만해요, 순천만",
    "event": "2025 순천 AI 게임잼",
    "date": "2025.09",
    "award": "특별상",
    "ai": true,
    "cover": "suncheon-full-1",
    "video": "suncheon-full.mp4",
    "playUrl": "https://youtu.be/nziwvdoJuYs",
    "linkLabel": "소개 영상",
    "photos": [
      "suncheon-full-1",
      "suncheon-full-2"
    ],
    "description": "순천만의 갈대군락과 구하도를 탐험하며 실제 서식 생물 30여 종을 도감에 등록하는 수집 게임입니다. 미니게임으로 보상을 얻고 순천사랑상품권 1,000만 원을 모으면 엔딩에 도달합니다.",
    "facts": [
      [
        "기간",
        "2025.09 · 2박 3일"
      ],
      [
        "인원",
        "5명"
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
    "tools": [
      "GameAIfy",
      "Procreate"
    ]
  },
  {
    "id": "memories",
    "title": "How Can I Make Memories",
    "event": "제2회 스파르타게임잼",
    "date": "2025.08",
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
    "date": "2025.08",
    "description": "‘외눈박이 마을에 간 두눈박이’ 우화를 모티브로 한 공포 게임입니다. 플레이어는 자신을 세눈박이로 바꾸려는 주민을 피해 고향으로 돌아가야 합니다.",
    "award": "우수상",
    "ai": true,
    "cover": "horrops-full-1",
    "playUrl": "https://youtu.be/Ui8zh9C8g2E",
    "linkLabel": "소개 영상",
    "photos": [
      "horrops-full-1",
      "horrops-full-2"
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
    "tools": [
      "GameAIfy"
    ]
  },
  {
    "id": "ssangryuk",
    "title": "쌍륙",
    "event": "2025 게임인재단 공모전",
    "date": "2025.07",
    "description": "한국 전통 놀이 쌍륙을 디지털 게임으로 옮겼습니다. 전래동화 ‘해와 달이 된 오누이’를 모티프로 해님과 달님을 디자인하고, 간단한 조작으로 전통 놀이를 즐길 수 있게 했습니다.",
    "award": "대상",
    "ai": true,
    "cover": "ssangryuk-1",
    "video": "ssangryuk.mp4",
    "playUrl": "https://youtu.be/0BXAGEi5Whg",
    "linkLabel": "소개 영상",
    "photos": [
      "ssangryuk-1"
    ],
    "intent": [
      [
        "ssangryuk-1",
        "쌍륙 게임 화면",
        "전래동화에서 가져온 해님·달님 캐릭터와 직관적인 조작으로 전통 놀이의 진입 장벽을 낮췄습니다."
      ]
    ]
  },
  {
    "id": "floor",
    "title": "FLOOR",
    "event": "커피한잔 게임 콘테스트",
    "date": "2025.06",
    "description": "큐브를 차곡차곡 쌓으며 올라가는 캐주얼 게임입니다. 세피리아의 아이템 정리 방식에서 영감을 받아 큐브를 정돈하고 쌓는 재미를 담았습니다.",
    "ai": false,
    "cover": "floor-1",
    "playUrl": "https://youtu.be/K7kkkGWsLPA",
    "linkLabel": "소개 영상",
    "photos": [
      "floor-1",
      "floor-2"
    ]
  },
  {
    "id": "hamster-legacy",
    "title": "HamsterLegacy",
    "event": "이화여자대학교 게임제작동아리 오르카",
    "date": "2025.03–06",
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
    "date": "2025.02",
    "description": "빛이 있어야 살아갈 수 있는 세계에서 타인을 도울지 선택하는 게임입니다. 트롤리 딜레마를 통해 플레이어가 자신의 가치관을 돌아보도록 구성했습니다.",
    "ai": false,
    "cover": "bystander-2",
    "playUrl": "https://play.unity.com/en/games/5b2c0300-c291-4f9b-bd0d-40d489dab8c8/bystander",
    "linkLabel": "게임 플레이 링크",
    "outcome": "공모전 7위",
    "photos": [
      "bystander-1",
      "bystander-2"
    ]
  },
  {
    "id": "snow-love",
    "title": "눈사랑",
    "event": "만들래 10분 게임콘테스트",
    "date": "2025.02",
    "description": "끝나지 않는 겨울, 창밖의 눈사람에 담긴 어린 시절의 추억을 돌아봅니다. 눈사람이 녹아야 다시 봄이 옵니다.",
    "ai": false,
    "cover": "snow-love-1",
    "playUrl": "https://play.unity.com/en/games/1d1b722c-e0df-481e-96a2-2255d95bd800/snowman",
    "linkLabel": "게임 플레이 링크",
    "outcome": "공모전 10위",
    "photos": [
      "snow-love-1",
      "snow-love-2"
    ]
  },
  {
    "id": "unbelibubble",
    "title": "Unbubblibubble",
    "event": "2025 젬파이 × in Seoul 게임잼",
    "date": "2025.01",
    "description": "주방을 떠다니는 비눗방울이 터지지 않도록 여러 물건과 상호작용하며 끝까지 보호하는 게임입니다.",
    "ai": false,
    "playUrl": "https://globalgamejam.org/games/2025/unbelibubble-6",
    "linkLabel": "Global Game Jam 프로젝트"
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
    "넥슨 2026 메커톤 2기 참여",
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
