// 저장소 루트의 index.html(웹 버전)을 www/index.html 로 복사합니다.
// 구글 글꼴 링크는 앱에 넣은 글꼴(www/fonts)로 바꿔, 앱이 외부 서버에 접속하지 않게 합니다.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
let html = readFileSync(resolve(here, '../../index.html'), 'utf8');
const before = html.length;
html = html.replace(/<link rel="preconnect" href="https:\/\/fonts\.(googleapis|gstatic)\.com"[^>]*>\n?/g, '')
  .replace(/<link rel="stylesheet" href="https:\/\/fonts\.googleapis\.com\/css2[^"]*">/, '<link rel="stylesheet" href="fonts/fonts.css">')
  .replace('<html lang="ko">', '<html lang="ko" class="android">');
if (html.includes('fonts.googleapis.com') || !html.includes('fonts/fonts.css') || !html.includes('class="android"')) throw new Error('index.html 구조가 바뀌어 글꼴 링크를 바꾸지 못했습니다');
writeFileSync(resolve(here, '../www/index.html'), html);
console.log(`synced ../index.html -> android-app/www/index.html (${before} -> ${html.length} bytes)`);
