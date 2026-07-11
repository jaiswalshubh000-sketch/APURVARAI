import { loadEnv } from 'vite';
import fs from 'fs';

const env = loadEnv('development', '.', '');
const apiKey = env.GEMINI_API_KEY;

fs.writeFileSync('api_key.txt', apiKey || 'not found');
console.log('API key written to api_key.txt');
