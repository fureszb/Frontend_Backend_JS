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
    
  }
  tablaHead(){
    let txt = `<thead><tr>`;
    txt+=`<th>Id</th><th>Név</th><th>Születési év</th>`
    txt+="</thead></tr>"
    this.tabla.append(txt);
  }
  tablaBody() {
    let txt = `<tbody>`;
    console.log(this.#lista)
    for (let index = 0; index < this.#lista.length; index++) {
       txt+= new TablaSor().SorLetrehozas(this.#lista, index);
    }
    txt += `</tbody>`;
    this.tabla.append(txt);
  }
  #SajatEsemenyem(nev) {
    const esemenyem = new CustomEvent(nev, { detail: this});
    window.dispatchEvent(esemenyem);
  }
}
export default TablaView;
