/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable max-params */
export type ShowStructure = {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  watched: boolean;
  score: number;
  emmies: number;
};

export class Show implements ShowStructure {
  constructor(
    public id: number,
    public name: string,
    public creator: string,
    public year: number,
    public poster: string,
    public emmies: number,
    public watched: boolean,
    public score: number
  ) {}
}
