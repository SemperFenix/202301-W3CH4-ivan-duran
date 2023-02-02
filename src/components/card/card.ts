/* eslint-disable no-unused-vars */
import { ShowStructure } from '../../models/show';
import { Component } from '../component/component';

export class Card extends Component {
  constructor(public selector: string, public show: ShowStructure) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  // Render(place: globalThis.InsertPosition) {
  //   super.render(place);
  //   document
  //     .querySelector(`#b${this.task.id}`)
  //     ?.addEventListener('click', () => {
  //       this.deleteTask(this.task.id);
  //     });
  //   document
  //     .querySelector(`#c${this.task.id}`)
  //     ?.addEventListener('change', () => {
  //       this.task.isCompleted = !this.task.isCompleted;
  //       this.updateTask(this.task);
  //     });
  // }

  createTemplate() {
    return `
     <li class="serie">
              <img class="serie__poster"
                src="${this.show.poster}"
                alt="${this.show.name} poster" />
              <h4 class="serie__title">${this.show.name}</h4>
              <p class="serie__info">${this.show.creator} (${this.show.year})</p>
              <ul class="score">
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="1/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="2/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="3/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="4/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="5/5"></i>
                </li>
              </ul>
              <i class="fas fa-times-circle icon--delete"></i>
            </li>`;
  }
}
