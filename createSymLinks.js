const os = require('os');
const { exec } = require("child_process");
const { join, resolve } = require("path");
const { existsSync } = require('fs');
const { PowerShell } = require('node-powershell');

const opsys = os.platform();
const isWindows = opsys == "win32" || opsys == "win64";

const createSymLink = ({
    path, linkPath, linkName
}) => {
    if(existsSync(join(path, linkName))) return;
    if(isWindows) {
        PowerShell.$`Start-Process -Verb RunAs cmd.exe -Args '/c', 'cd ${resolve(path)} & mklink /D ${linkName} ${linkPath}'`
    } else {
        exec(`cd ${path}; ln -s ${linkPath} ${linkName}`);
    }
};

const createFrameworksSharedSymLink = (framework) => {
    const path = join('packages', 'sfui', 'frameworks', framework);
    const linkPath = join('..', '..', 'shared');

    createSymLink({ path, linkPath, linkName: 'sharedRoot' });
}
const createNextTestSfuiSymLink = () => {
    const nextSfuiPath = join('apps', 'preview', 'next', 'sfui');
    const nextSfuiTestsLinkPath = join('..', '..', '..', '..', 'packages', 'sfui', 'tests')
    createSymLink({ path: nextSfuiPath, linkPath: nextSfuiTestsLinkPath, linkName: 'tests' });
}

createFrameworksSharedSymLink('react');
createFrameworksSharedSymLink('vue');

createNextTestSfuiSymLink();
