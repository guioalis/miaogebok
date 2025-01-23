const fs = require('fs');
const path = require('path');

function checkRequiredFiles() {
  const requiredFiles = [
    '.env',
    'next.config.js',
    'package.json',
    'prisma/schema.prisma',
  ];

  const missingFiles = requiredFiles.filter(file => !fs.existsSync(path.join(process.cwd(), file)));

  if (missingFiles.length > 0) {
    console.error('Missing required files:', missingFiles);
    process.exit(1);
  }
}

function checkEnvVariables() {
  const requiredEnvVars = ['DATABASE_URL', 'NEXT_PUBLIC_SITE_URL'];
  
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

  if (missingVars.length > 0) {
    console.error('Missing required environment variables:', missingVars);
    process.exit(1);
  }
}

checkRequiredFiles();
checkEnvVariables();
console.log('All deployment checks passed!'); 