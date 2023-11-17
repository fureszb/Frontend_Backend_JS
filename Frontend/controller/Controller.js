import DataService from "../model/DataService.js";
import TablaView from "../view/TablaView.js";
import AdatView from "../view/AdatView.js";
import Adatleiro from "../model/adatLeiro.js";
import UrlapView from "../view/UrlapView.js";
class Controller {
  constructor() {

    this.Adatleiro = new Adatleiro();
    this.urlapView = new UrlapView($(".urlap"), this.Adatleiro.getLeiro());

    const ALAPVEGPONT = "http://localhost:8000/api/"
    this.DATASERVICE = new DataService();


    $(window).on("AdatKiir", (event) => {
      console.log(event.detail);
      //this.DATASERVICE.postData(ALAPVEGPONT + "writers", event.detail);
      $(".urlap").css("display", "none");
    });
    this.DATASERVICE.getData(ALAPVEGPONT + "writers", this.adatokMegj);
  
    $(window).on("torles", (event) => {
      console.log(event.detail);
     // this.DATASERVICE.deleteData(ALAPVEGPONT + "writers/"+event.detail.id);
    });
  
    

    $(".ujhozzaadas").on("click", function () {
      $(".urlap").css("display", "block"); });
  
  }

 
adatokMegj(lista){

  //new AdatView(lista, $(".lista"));
  new TablaView(lista, $(".tablazat"));
}
}
export default Controller;
