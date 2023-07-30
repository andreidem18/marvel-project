require('dotenv').config();
const { mkdirSync, writeFileSync } = require('fs');

const targetPath = './src/environments/environments.ts';

const envFileContent = `
export const environtment = {
  apiUrl: "${ process.env['API_URL'] }",
  apiKey: "${ process.env['API_KEY'] }"
}
`;

mkdirSync('./src/environments/', { recursive: true });

writeFileSync( targetPath, envFileContent );
