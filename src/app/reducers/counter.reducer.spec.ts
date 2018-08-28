import { reducer2, initialState } from './counter.reducer';

describe('Counter Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer2(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
