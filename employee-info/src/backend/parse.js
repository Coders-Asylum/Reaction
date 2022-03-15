import axios from "axios";

class http_request {

  async get(url) {
    const res = await axios.get(url)
    return res;
  }
}


class xmlParser {
  parser;

  constructor() {
    this.parser = new DOMParser();
  }

  parseXML(s) {

    return this.parser.parseFromString(s, "text/xml");
  }

}


class jsonParser {
  json;
  constructor(str) {
    this.json = JSON.parse(str)
  }
}


export { http_request, xmlParser, jsonParser }