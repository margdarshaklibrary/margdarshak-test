const { spawn } = require('child_process');
const path = require('path');

const routes = JSON.stringify([
  {
    screenId: "bf537232905046a5aaf6d81ac65a91bb",
    route: "/"
  }
]);

const env = {
  ...process.env,
  STITCH_API_KEY: process.env.STITCH_API_KEY
};

const nodePath = path.resolve(__dirname, '.node20/node-v20.18.0-win-x64/node.exe');
const cliPath = path.resolve(__dirname, 'node_modules/@_davideast/stitch-mcp/dist/cli.js');

const child = spawn(
  nodePath,
  [
    cliPath,
    'site',
    '-p', '12324743983384068957',
    '-r', routes,
    '-o', __dirname
  ],
  { env, stdio: 'inherit' }
);

child.on('close', (code) => {
  console.log(`Process exited with code ${code}`);
  process.exit(code);
});
