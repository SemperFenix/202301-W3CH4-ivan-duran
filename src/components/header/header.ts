/* eslint-disable no-unused-vars */
import { Component } from '../component/component';

export class Header extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    // La hacemos de uso interno con la etiqueta private
    return `
      <header class="main-header">
      <h1 class="main-title">My Series</h1>
    </header>`;
  }
}
