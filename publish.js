const gh = require('gh-pages');
gh.publish('build', () => console.log('done'));