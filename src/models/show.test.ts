import { Show } from './show';

describe('Given Show class', () => {
  describe('When given id, name, creator, year, poster and emmies ', () => {
    test('Then it should return an object with the properties given, watched false and score 0', () => {
      const show = new Show(2, 'Scrubs', 'Bill Lawrence', 2001, 'url', 2);
      expect(show).toBeInstanceOf(Show);
      expect(show.id).toBe(2);
      expect(show.name).toBe('Scrubs');
      expect(show.creator).toBe('Bill Lawrence');
      expect(show.poster).toBe('url');
      expect(show.year).toBe(2001);
      expect(show.emmies).toBe(2);
      expect(show.watched).toBe(false);
      expect(show.score).toBe(0);
    });
  });
});
