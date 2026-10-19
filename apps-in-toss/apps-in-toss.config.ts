import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  // 앱인토스 콘솔에 등록한 앱 이름(케밥-케이스)과 같아야 합니다. 콘솔에서 정한 이름으로 바꿔 주세요.
  appName: 'canyon-hold',
  brand: {
    primaryColor: '#E2B54A', // 게임의 주 색(황동색)
  },
  // 카메라·위치 같은 기기 권한은 쓰지 않습니다.
  permissions: [],
  navigationBar: {
    withBackButton: true,
    withHomeButton: true,
    theme: 'dark',
  },
  webView: {
    bounces: false,
    pullToRefreshEnabled: false,
    overScrollMode: 'never',
  },
  webBundleDir: 'dist',
});
