export default class Picture {
  constructor(requestData) {
    this.copyright = requestData.copyright;
    this.date = new Date(requestData.date);
    this.explanation = requestData.explanation;
    this.hdURL = requestData.hdurl;
    this.URL = requestData.url;
    this.title = requestData.title;
  }
}
