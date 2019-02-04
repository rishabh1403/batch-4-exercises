import { homeDir } from './homeDir';

describe('Template Test', () => {
  test('Template Test', () => {
    // Write your own test case
    expect(homeDir).toBeDefined();
    expect(homeDir()).toBe('/home/stuart');
  });
});
