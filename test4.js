var operatingSystem = require('os');

// console.log(operatingSystem.platform());
// console.log(operatingSystem.userInfo());

// console.log(operatingSystem.cpus());
// console.log(operatingSystem.totalmem());

// console.log(operatingSystem.freemem());

var info = {
    name: operatingSystem.userInfo().username,
    type: operatingSystem.type(),
    release: operatingSystem.release(),
    totalMem: (operatingSystem.totalmem() / (1024 * 1024 * 1024)).toFixed(2) + ' GB',
    freeMem: (operatingSystem.freemem() / (1024 * 1024 * 1024)).toFixed(2) + ' GB'
}

console.log(info);

