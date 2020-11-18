import { get } from './get';

describe('Object helpers -> get method', () => {
  const obj = {
    a: {
      b: {
        c: 'value',
      },
    },
  };
  it('Should return value by path', () => {
    expect(get(obj, 'a.b.c')).toEqual('value');
  });
  it('Should return undefined if path not exist', () => {
    expect(get(obj, 'a.c.d')).toBeUndefined();
  });
});
