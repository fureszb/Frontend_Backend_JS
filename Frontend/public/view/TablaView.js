import TablaSor from "./TablaSor.js";
class TablaView {
  #lista = [];
  constructor(lista, szuloELem) {
    this.szuloELem = szuloELem;
    this.#lista = lista;
    this.kesz = false;
    this.szuloELem.html(`<table class="table table-bordered"></table>`)
    this.tabla = this.szuloELem.children("table");
    this.tablaHead();
    this.tablaBody();
    this.Torolsor = $(".torol:last-child"); 
    console.log(this.Torolsor)
  }
  tablaHead(){
    let txt = `<thead><tr>`;
    txt+=`<th>Id</th><th>Név</th><th>Születési év</th>`
    
    txt+="</thead></tr>"
    this.tabla.append(txt);
  }
 
  tablaBody() {
    let txt = `<tbody id="tbody1"></tbody>`;
    this.tabla.append(txt);

    let tSzuloelem = $("#tbody1")
    console.log(this.#lista);
    for (let index = 0; index < this.#lista.length; index++) {
        new TablaSor(tSzuloelem, this.#lista, index);
    }
    
  }
 
}
export default TablaView;