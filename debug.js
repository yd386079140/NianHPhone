
const path = require('path');

const context = process.cwd();
/*
const iconv = require('iconv-lite');
const ChildProcess = require('child_process');

const childProcess = ChildProcess.exec(
  'node ./node_modules/@vue/cli-service/bin/vue-cli-service.js', {
    encoding: 'buffer',
    cwd: context,
    env: {
      VUE_CLI_SERVICE_CONFIG_PATH: path.resolve(context, 'test.vue.config.js'),
    },
  },
);
const send = (msg, nType) => {
  const notice = iconv.decode((msg || '').toString(), 'utf-8');
  console.log(nType, notice);
};
childProcess.stdout.on('data', (data) => {
  send(data, 'out');
});
childProcess.stderr.on('data', (data) => {
  send(data, 'err');
});
childProcess.on('close', (data) => {
  send(data, 'close');
}); */

process.env = { VUE_CLI_SERVICE_CONFIG_PATH: path.resolve(context, 'test.vue.config.js') };
require('./node_modules/@vue/cli-service/bin/vue-cli-service');
