// Import our custom CSS
import '../scss/main.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'; // eslint-disable-line no-unused-vars

import './_color_mode_picker';

// import '../../node_modules/bootstrap-icons/font/bootstrap-icons.scss';
import htmx from "htmx.org"
import Alpine from "alpinejs"
import clickerGame from "./components/clikckerGame";
window.Alpine = Alpine

Alpine.data('clickerGameData', clickerGame)

Alpine.start()

window.htmx = htmx;
