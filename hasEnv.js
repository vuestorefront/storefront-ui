// Exits 0 if all specified env vars are set to 'true', 1 otherwise.
// Usage: node hasEnv VAR_NAME || yarn some-command
// (the command runs only when the env var is NOT set)
const filteredArgvs = Object.values(process.argv).filter(argv => !argv.startsWith('/'));
const allSet = filteredArgvs.every(argv => process.env[argv] === 'true');
process.exit(allSet ? 0 : 1);

