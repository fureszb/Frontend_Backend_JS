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


    $(window).on("AdatKiir", (event) => {
      console.log(event.detail);
      this.DATASERVICE.postData(ALAPVEGPONT + "writers", event.detail);
     
    });
    this.DATASERVICE.getData(ALAPVEGPONT + "writers", this.adatokMegj);
  
    $(".torol").on("click", function () {
      var writerId = $(this).data("id");
      

      model.deleteData("/writers/" + writerId, writerId, csrfToken, 
          function (responseData) {
             
              console.log(responseData.message);
              
             
              deleteRowFromTable(writerId);
          },
          function (error) {
            
              console.error("Hiba a törlés során:", error);
          }
      );
    });
  }

 
adatokMegj(lista){

  //new AdatView(lista, $(".lista"));
  new TablaView(lista, $(".tablazat"));
}
}
export default Controller;
