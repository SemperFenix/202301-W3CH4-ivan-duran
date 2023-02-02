/* eslint-disable no-unused-vars */
import { series } from '../../mock/series';
import { ShowStructure } from '../../models/show';
import { Component } from '../component/component';
import { ShowsPending } from '../showsPending/showsPending';
import { ShowsWatched } from '../showsWatched/showsWatched';

export class Main extends Component {
  constructor(public selector: string, public shows: ShowStructure[]) {
    super();
    this.template = this.createTemplate();
    this.render('afterend');
  }

  private createTemplate() {
    // La hacemos de uso interno con la etiqueta private
    return `
    <main class="main">
      <section class="series">
        <h2 class="section-title">Series list</h2>
      </section>
    </main>`;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    new ShowsPending('.section-title', this.shows);
    new ShowsWatched('.series-pending', this.shows);
  }
}
