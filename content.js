const projects = activityProjects;

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
