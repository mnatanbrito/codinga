const tasks = arr => arr.join(' && ');

module.exports = {
  header: 'Meu HPD Changelog',
  types: [
    { type: 'feat', section: 'Features' },
    { type: 'fix', section: 'Bug Fixes' },
    { type: 'chore', section: 'Chores' },
    { type: 'docs', section: 'Docs' },
    { type: 'style', hidden: true },
    { type: 'refactor', hidden: 'Refactor' },
    { type: 'perf', hidden: true },
    { type: 'test', hidden: true },
  ],
  scripts: {
    precommit: tasks(['git add --all']),
  },
};