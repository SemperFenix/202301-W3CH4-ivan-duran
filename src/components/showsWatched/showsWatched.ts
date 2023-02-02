/* eslint-disable no-unused-vars */
import { series } from '../../mock/series';
import { ShowStructure } from '../../models/show';
import { Card } from '../card/card';
import { Component } from '../component/component';

export class ShowsWatched extends Component {
  constructor(public selector: string, public shows: ShowStructure[]) {
    super();
    this.template = this.createTemplate();
    this.render('afterend');
  }

  private createTemplate() {
    // La hacemos de uso interno con la etiqueta private
    return `
     <section class="series-watched">
          <h3 class="subsection-title">Watched series</h3>
          <p class="info">You have watched 4 series</p>
          <!--<p class="info">You already have not watched any serie</p>-->
          <ul class="series-list series-list--watched">
        </ul>
      </section>`;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    const showsPending: ShowStructure[] = this.shows.filter(
      (item) => item.watched
    );
    showsPending.forEach((item) => new Card('.series-list--watched', item));
  }
}
