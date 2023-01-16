// Util to determine if some env is passed as true, if so exit process and fail other scripts in chain
// usage "NOT_GENERATE_ICON=true && yarn node hasEnv NOT_GENERATE_ICON && yarn generate-icons
// yarn generate-icons will fail
const filteredArgvs = Object.values(process.argv).filter(argv => !argv.startsWith('/'));
filteredArgvs.forEach(argv => {
    if(process.env[argv] === 'true') process.exit(128);
});

