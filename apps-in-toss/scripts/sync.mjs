// 저장소 루트의 index.html(GitHub Pages 테스트 버전)을 앱인토스 번들용으로 복사합니다.
// 게임 코드는 루트 index.html 하나만 고치면 되고, 이 폴더에서는 복사본으로 빌드합니다.
import { copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
copyFileSync(resolve(here, '../../index.html'), resolve(here, '../index.html'));
console.log('synced ../index.html -> apps-in-toss/index.html');
