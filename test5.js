const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./first.txt', 'utf8');

writeFileSync(
    './result-sync.txt',
    `Here is the result: \n${first}`,
);

console.log('done with this task');
