import DataService from "../model/DataService.js";
import TablaView from "../view/TablaView.js";
import Adatleiro from "../model/adatLeiro.js";
import UrlapView from "../view/UrlapView.js";
import PopUpView from "../view/PopUpView.js";
class Controller {
  constructor() {
    this.Adatleiro = new Adatleiro();
    this.urlapView = new UrlapView($(".urlap"), this.Adatleiro.getLeiro());

    const ALAPVEGPONT = "http://localhost:8000/api/";
    this.DATASERVICE = new DataService();

    $(window).on("AdatKiir", (event) => {
      console.log(event.detail);
      this.DATASERVICE.postData(ALAPVEGPONT + "writers", event.detail);
      $(".urlap").css("display", "none");
    });

    this.DATASERVICE.getData(ALAPVEGPONT + "writers", this.adatokMegj);

    $(".ujhozzaadas").on("click", function () {
      $(".urlap").css("display", "block");
    });

    $(window).on("torol", (event) => {
      console.log(event.detail);
      this.DATASERVICE.deleteData(ALAPVEGPONT + "writers/" + event.detail);
    });

    $(window).on("szerkesztes", (event) => {
      console.log(event.detail);
      this.DATASERVICE.putData(
        ALAPVEGPONT + "writers/" + event.detail.id,
        event.detail
      );
    });

    $(window).on("view", (event) => {
      const trId = event.detail[0];
      const tdNev = event.detail[1];
      console.log(trId);
      this.DATASERVICE.getData(ALAPVEGPONT + "books", (lista) => this.adatokMegjPop(lista, trId, tdNev));
  });
  
  }

  adatokMegj(lista) {
    new TablaView(lista, $(".tablazat"));
  }
  adatokMegjPop(lista,trId, nev) {
    new PopUpView(lista, $(".konyvek"), trId, nev);
  }
}
export default Controller;
