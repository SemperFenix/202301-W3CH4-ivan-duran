import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { ShowStructure } from '../../models/show';
import { Card } from './card';

describe('Given the Card component', () => {
  describe('When passed the parameters', () => {
    const serie: ShowStructure = {
      id: 1,
      name: 'The Sopranos',
      creator: 'David Chase',
      year: 1999,
      poster:
        'https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
      watched: true,
      score: 5,
      emmies: 21,
    };

    test('Then it should renderize the content ', () => {
      document.body.innerHTML = '<ul></ul>';
      const element = new Card('ul', serie);
      expect(element).toBeInstanceOf(Card);
      const item = screen.getAllByRole('listitem');
      expect(item.length).toBe(6);
      const element1 = screen.getByText('The Sopranos');
      expect(element1).toBeInTheDocument();
      const element2 = screen.getByText('David Chase (1999)');
      expect(element2).toBeInTheDocument();
    });
  });
});
