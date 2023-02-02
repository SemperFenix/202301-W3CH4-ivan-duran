import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { series } from './mock/series';
import { ShowStructure } from './models/show';

new Header('.container');
new Main('.main-header', series);
// New Shows('.header', series)
