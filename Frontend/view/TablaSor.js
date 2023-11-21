class TablaSor {
  constructor(szuloElem, lista, index) {
    szuloElem.append(this.SorLetrehozas(lista, index));
    this.trElem = szuloElem.children("tr:last-child");
    this.torolGomb = this.trElem.find(".torol");
    this.torolGomb.on("click", ()=>{
        this.trId = this.trElem.attr("id")
        this.#SajatEsemenyem("torol");
    });
   
  }
  SorLetrehozas(lista, index) {
    let txt;
    txt += `<tr id="${lista[index].id}">`;
    for (const key in lista[index]) {
      if (key !== "created_at" && key !== "updated_at") {
        txt += `<td>${lista[index][key]}</td>`;
      }
    }
    txt += `<td><button id="${lista[index].id}" type="button" class="btn btn-primary szerkeszt">📝</button></td><td><button id="${lista[index].id}" type="button" class="btn btn-default torol" >❌</button></td>`;
    
    txt += `</tr>`;
    return txt;
  }
  #SajatEsemenyem(nev) {
    const esemenyem = new CustomEvent(nev, { detail: this.trId});
    window.dispatchEvent(esemenyem);
  }
}
export default TablaSor;
