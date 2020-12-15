const { exec } = require('child_process');
const { promisify } = require('util');

const run = promisify(exec);

const ytdl = (url, { format = 'best' } = {}) => {
  return Promise
    .resolve()
    .then(() => run(`youtube-dl --no-check-certificate --dump-json -f ${format} '${url}'`))
    .then(({ stderr, stdout }) => {
      if (stderr) throw new Error(stderr);
      return stdout;
    }).then(JSON.parse);
};

module.exports = ytdl;