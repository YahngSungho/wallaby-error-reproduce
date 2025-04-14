import { describe, it, expect } from 'vitest';
// 설정 패키지에서 내보낸 함수 import
import { simpleCalculation } from 'core-config';

describe('Feature tests', () => {
  it('should use function from core-config', () => {
    expect(simpleCalculation(2, 3)).toBe(5);
  });

  it('should perform basic assertion', () => {
    expect(1).toBe(1);
  });
});