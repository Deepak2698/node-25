// OS Module = Operating System Module
// This module provides a way of interacting with the operating system

const os = require('node:os');

// Get the system architecture
const architecture = os.arch();
console.log(`System Architecture: ${architecture}`);

// Get the CPU information
// const cpuInfo = os.cpus();
// console.log(`CPU Information: ${JSON.stringify(cpuInfo, null, 2)}`);

// Platform information
const platform = os.platform();
console.log(`Platform: ${platform}`);

// Release information
const release = os.release();
console.log(`Release: ${release}`);


// Hostname information
const hostname = os.hostname();
console.log(`Hostname: ${hostname}`);