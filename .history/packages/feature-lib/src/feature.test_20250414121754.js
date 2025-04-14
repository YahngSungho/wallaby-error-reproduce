// packages/feature-lib/src/feature.test.js
import { describe, it, expect } from 'vitest';
// 설정 패키지에서 내보낸 함수 import
import { simpleCalculation } from 'core-config';

describe('Feature tests', () => {
  it('should use function from core-config', () => {
    // Wallaby가 이 테스트를 실행하려고 할 때 문제가 발생해야 함
    expect(simpleCalculation(2, 3)).toBe(5);
  });

  // 추가: Vitest 자체 기능만 사용하는 테스트 (비교용)
  it('should perform basic assertion', () => {
    expect(1).toBe(1);
  });
});