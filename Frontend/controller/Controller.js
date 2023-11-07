import DataService from "../model/DataService.js";
class Controller {
  constructor() {

    const ALAPVEGPONT = "http://localhost:8000/"
    this.DATASERVICE = new DataService();

    this.DATASERVICE.getData(ALAPVEGPONT+"writers", this.adatokMegj)
    this.DATASERVICE.postData(ALAPVEGPONT+"writers")
  }
  adatokMegj(lista){
   console.log(lista)
  }
}
export default Controller;
