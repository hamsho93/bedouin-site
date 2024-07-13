const fs = require('fs');
const path = require('path');

const packageJson = require('../package.json');
const sourceDir = path.join(__dirname, '..', 'src');

function getAllFiles(dir) {
  return fs.readdirSync(dir).reduce((files, file) => {
    const name = path.join(dir, file);
    const isDirectory = fs.statSync(name).isDirectory();
    return isDirectory ? [...files, ...getAllFiles(name)] : [...files, name];
  }, []);
}

const allFiles = getAllFiles(sourceDir);
const jsFiles = allFiles.filter(file => /\.(js|jsx|ts|tsx)$/.test(file));

const importRegex = /from\s+['"]([^'"]+)['"]/g;
const requiredPackages = new Set();

jsFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const pkg = match[1].split('/')[0];
    if (!pkg.startsWith('.') && !pkg.startsWith('@')) {
      requiredPackages.add(pkg);
    }
  }
});

const missingPackages = [...requiredPackages].filter(pkg => !packageJson.dependencies[pkg] && !packageJson.devDependencies[pkg]);

if (missingPackages.length > 0) {
  console.error('Missing packages in package.json:', missingPackages);
  process.exit(1);
} else {
  console.log('All required packages are present in package.json');
}