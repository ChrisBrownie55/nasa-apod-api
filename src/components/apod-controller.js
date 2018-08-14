import ApodService from './apod-service.js';

const apodService = new ApodService();

const app = document.getElementById('app');
function draw() {
  app.innerHTML = `
    <form id='query-options'>
      <label for='date-input'>Date</label>
      <input type='date' id='date-input' name='date' />
      <label for='hd-checkbox'>HD</label>
      <input type='checkbox' id='hd-checkbox' name='hd' />
    </form>
    <section id='apod-picture'>
    </section>
  `;
}

function drawPicture() {}

export default class ApodController {
  constructor() {
    draw();
  }

  getPicture() {
    const formData = new FormData(document.getElementById('query-options'));

    apodService.getPicture();
  }
}
