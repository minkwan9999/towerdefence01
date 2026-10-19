// 저장소 루트의 index.html(GitHub Pages 테스트 버전)을 앱인토스 번들용으로 복사합니다.
// 게임 코드는 루트 index.html 하나만 고치면 되고, 이 폴더에서는 복사본으로 빌드합니다.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
// <html>에 ait 클래스를 붙여, 앱인토스 오른쪽 위 ••• ✕ 버튼 자리를 비우는 CSS가 켜지게 합니다.
const html = readFileSync(resolve(here, '../../index.html'), 'utf8').replace('<html lang="ko">', '<html lang="ko" class="ait">');
if (!html.includes('class="ait"')) throw new Error('index.html에서 <html lang="ko">를 찾지 못했습니다');
writeFileSync(resolve(here, '../index.html'), html);
console.log('synced ../index.html -> apps-in-toss/index.html');
