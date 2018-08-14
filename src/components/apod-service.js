import API_KEY from '../../api-key.js';
import Picture from '../models/Picture.js';

export default class ApodService {
  getPicture(date) {
    return fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`
    )
      .then(result => result.json())
      .then(json => new Picture(json))
      .catch(error => console.error(error.stack));
  }
}
