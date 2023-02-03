import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { ShowStructure } from '../../models/show';
import { Main } from './main';

describe('Given the Main component', () => {
  describe('When passed the parameters', () => {
    const series: ShowStructure[] = [
      {
        id: 1,
        name: 'The Sopranos',
        creator: 'David Chase',
        year: 1999,
        poster:
          'https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
        watched: true,
        score: 5,
        emmies: 21,
      },
      {
        id: 2,
        name: 'Game of Thrones',
        creator: 'David Benioff D. B. Weiss',
        year: 2011,
        poster:
          'https://t1.pixers.pics/img-1fb6f67c/posters-game-of-thrones.jpg?H4sIAAAAAAAAA3VOW27EIAy8DpGS2BAIkBvs394gIjy2afNAQNtVT1_Sqp-VZXs80ngG3o9sggfrj-IT7Ktzm4ewbvXKU_J5_fJkUGOLzVTZjSBWdH74ZNMZSUcH1VLRCsbaUYpm-jRVuJv0Rl5KiXkCyEMf12f9VpfNYPcMDKkEVCC00lpYzh1aN8cuF3M4k1zH8TliH49Hi1c1f0EkYiuvACWtO6mJzupVyGt8NPCP3y-GqoL7DSgCsp-JwNnFzvcbRWS1kbNZuEELHox0izdBeoUYLBVej9qZEMIsFmmWRY7Kec_n_hu83S9APwEAAA==',
        watched: false,
        score: 0,
        emmies: 164,
      },
    ];

    test('Then it should renderize the content ', () => {
      document.body.innerHTML = '<slot></slot>';
      const element = new Main('slot', series);
      expect(element).toBeInstanceOf(Main);
      const item = screen.getByRole('main');
      expect(item).toBeInTheDocument();
      const pending = screen.getAllByRole('list');
      expect(pending.length).toBe(4);
    });

    test('Then it should renderize the Shows Pending and Watched', () => {});
  });
});
