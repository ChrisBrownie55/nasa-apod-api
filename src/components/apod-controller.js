import ApodService from './apod-service.js';

const apodService = new ApodService();

const app = document.getElementById('app');
function draw() {
  app.innerHTML = `
    <form class='apod-form' onsubmit='app.controllers.apod.getPicture(event)'>
      <div class='form-input'>
        <label for='date-input'>Date</label>
        <input type='date' id='date-input' name='date' />
      </div>
      <div class='form-input toggle'>
        <input type='checkbox' id='hd-checkbox' name='hd' />
        <label for='hd-checkbox' data-text='HD'></label>
      </div>
      <button type='submit'>Get Image</button>
    </form>
    <section id='apod-picture'>
    </section>
  `;
}

async function drawPicture(picture, hd) {
  const pictureSection = document.getElementById('apod-picture');
  const url = hd ? picture.hdURL : picture.URL;
  pictureSection.innerHTML = `
    <article class='apod-card'>
      <div class='preload img-wrapper' data-preload='${url}'>
      </div>
      <h3 class='title'>${picture.title}</h3>
      <p class='paragraph'>${picture.explanation}</p>
      <small class='copyright'>Copyright: ${picture.copyright ||
        'Public Domain'}</small>
    </article>`;

  const image = new Image();
  image.onload = () =>
    document
      .querySelector(`.preload[data-preload='${url}']`)
      .appendChild(image);
  image.src = url;
}

export default class ApodController {
  constructor() {
    draw();
  }

  async getPicture(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const picture = await apodService.getPicture(
      formData.get('date') || new Date().toISOString().split('T')[0]
    );
    drawPicture(picture);
  }
}
