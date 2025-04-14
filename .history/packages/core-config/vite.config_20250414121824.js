import { defineConfig } from 'vitest/config';

export default defineConfig({
  // 여기에 실제 프로젝트의 vite.config.js 에서 Vitest 관련 부분만 최소한으로 가져옵니다.
  // 예시:
  test: {
    // environment: 'jsdom', // 필요시 설정
    globals: true, // 프로젝트 설정에 맞게
  },
  // 만약 resolve.alias 등 Wallaby 실행에 영향을 줄 수 있는 설정이 있다면 포함합니다.
  // resolve: {
  //   alias: {
  //     // ...
  //   }
  // }
});