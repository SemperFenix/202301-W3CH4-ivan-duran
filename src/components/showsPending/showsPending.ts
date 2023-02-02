/* eslint-disable no-unused-vars */
import { series } from '../../mock/series';
import { ShowStructure } from '../../models/show';
import { Card } from '../card/card';
import { Component } from '../component/component';

export class ShowsPending extends Component {
  constructor(public selector: string, public shows: ShowStructure[]) {
    super();
    this.template = this.createTemplate();
    this.render('afterend');
  }

  private createTemplate() {
    // La hacemos de uso interno con la etiqueta private
    return `
      <section class="series-pending">
        <h3 class="subsection-title">Pending series</h3>
        <p class="info">You have 4 series pending to watch</p>
      <!--<p class="info">Congrats! You've watched all your series</p>-->
        <ul class="series-list">
        </ul>
      </section>`;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    const showsPending: ShowStructure[] = this.shows.filter(
      (item) => !item.watched
    );
    console.log(showsPending);
    showsPending.forEach((item) => new Card('.series-list', item));
  }
}
