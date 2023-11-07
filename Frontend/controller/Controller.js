import DataService from "../model/DataService.js";
import TablaView from "../view/TablaView.js";
import AdatView from "../view/AdatView.js";
import Adatleiro from "../model/adatLeiro.js";
import UrlapView from "../view/UrlapView.js";
class Controller {
  constructor() {

    this.Adatleiro = new Adatleiro();
    this.urlapView = new UrlapView($(".urlap"), this.Adatleiro.getLeiro());

    const ALAPVEGPONT = "http://localhost:8000/"
    this.DATASERVICE = new DataService();

    this.DATASERVICE.getData(ALAPVEGPONT+"writers", this.adatokMegj);
    this.DATASERVICE.postData(ALAPVEGPONT+"writers");

    $(window).on("szerkesztes", (event) => {
      console.log("Szerkesztes: "+event.detail)
      
    });
    /*$(window).on("torles", (event) => {
      console.log("Torles: "+event.detail)
      event.detail.remove();
    });*/

    $(window).on("elkuldes", (event) => {
      console.log("kuld: "+event.detail)
    });
  }
  adatokMegj(lista){
   
    //new AdatView(lista, $(".lista"));
    new TablaView(lista, $(".tablazat"));
  }
}
export default Controller;
