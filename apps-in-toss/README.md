# 앱인토스 출시용 프로젝트

토스 앱 안에서 돌아가는 **앱인토스(Apps in Toss) WebView 미니앱**으로 협곡 방어전을 올리기 위한 폴더입니다.
게임 코드는 저장소 루트의 `index.html` 하나이고, 이 폴더는 그 파일을 복사해 앱인토스 번들(`.ait`)로 만듭니다.

## 구성

| 파일 | 역할 |
|---|---|
| `apps-in-toss.config.ts` | 앱인토스 설정(앱 이름, 브랜드 색, 내비게이션 바, WebView 옵션) |
| `vite.config.js` | Vite 빌드 + 앱인토스 개발 도구 플러그인 |
| `scripts/sync.mjs` | 루트 `index.html`을 이 폴더로 복사 |
| `package.json` | SDK(`@apps-in-toss/web-framework` 3.6.0)와 빌드·배포 스크립트 |

## 명령어

```bash
cd apps-in-toss
npm install
npm run dev      # 로컬 개발 서버
npm run build    # 루트 index.html 복사 → vite build → ait build → canyon-hold.ait 생성
npm run deploy   # 콘솔에서 발급한 API 키로 .ait 업로드 (ait deploy --api-key <키>)
```

## 출시 순서

1. 앱인토스 콘솔에서 워크스페이스를 만들고 앱을 등록합니다.
2. 콘솔에 등록한 앱 이름(케밥-케이스)을 `apps-in-toss.config.ts`의 `appName`에 넣습니다. 지금은 임시로 `canyon-hold`입니다.
3. `npm run build`로 `canyon-hold.ait`를 만들고, 콘솔에 업로드하거나 `npm run deploy`로 올립니다.
4. 콘솔의 **테스트하기**로 QR 코드를 받아 토스 앱에서 실행해 봅니다.
5. 검토를 요청하고, 승인되면 콘솔에서 **출시하기**를 누릅니다.

## 출시 전에 확인할 것

- **게임제작업 등록**: 앱인토스에 게임을 올리려면 사업자 등록과 별도로 게임산업진흥법에 따른 게임제작업 등록이 필요합니다.
- **저장 데이터**: 진행 기록은 브라우저 저장소(localStorage)에 저장됩니다. 토스 앱에서는 앱 오리진이 바뀌면 기록이 끊길 수 있으므로, 필요하면 SDK의 `Storage` API로 옮깁니다.
