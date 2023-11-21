import DataService from "../model/DataService.js";
import TablaView from "../view/TablaView.js";
import Adatleiro from "../model/adatLeiro.js";
class Controller {
  constructor() {

    this.Adatleiro = new Adatleiro();

    const ALAPVEGPONT = "http://localhost:8000/api/"
    this.DATASERVICE = new DataService();

    const currentPath = window.location.pathname;
    if (currentPath.includes('favorit.html')) {
      this.DATASERVICE.getData(ALAPVEGPONT + "favorits", this.adatokMegj);
    }
    else {
      this.DATASERVICE.getData(ALAPVEGPONT + "writers", this.adatokMegj);
    }

    $(window).on("kedvenchezAdas", (event) => {
      console.log(event.detail);
      this.DATASERVICE.postData(ALAPVEGPONT + "favorits", event.detail);
    });

    $(window).on("torol", (event) => {
      console.log(event.detail);
      this.DATASERVICE.deleteData(ALAPVEGPONT + "favorits/" + event.detail);
    });


  }

  adatokMegj(lista) {
    new TablaView(lista, $(".adatok"));
  }
}
export default Controller;
