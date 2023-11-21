class TablaSor {
  constructor(szuloElem, lista, index) {
    szuloElem.append(this.SorLetrehozas(lista, index));
    this.trElem = szuloElem.children("tr:last-child");


    this.favGomb = this.trElem.find(".fav");
    this.torolGomb = this.trElem.find(".torol");
    this.currentPath = window.location.pathname;


    this.favGomb.on("click", () => {
      this.tdId = this.trElem.find(".id").text();
      this.tdNev = this.trElem.find(".nev").text();
      this.tdSzul = this.trElem.find(".szul").text();
      this.lista = {
        id: this.tdId,
        nev: this.tdNev,
        szul: this.tdSzul
      };
      console.log(this.lista);
      this.#SzerkesztEsemenyem();
    });
    
    this.torolGomb.on("click", () => {
      const confirmed = confirm("Biztosan törölni szeretnéd?");
      if (confirmed) {
        this.#TorolEsemenyem();
      }
    });

  }
  SorLetrehozas(lista, index) {
    let txt;
    txt += `<tr id="${lista[index].id}">`;
    for (const key in lista[index]) {
      if (key !== "created_at" && key !== "updated_at") {
        txt += `<td class="${key}">${lista[index][key]}</td>`;
      }
    }
    if (this.currentPath.includes('favorit.html')) {
      txt += `<td class="gombok"><button id="${lista[index].id}" type="button" class="btn btn-danger torol">❌</button></td>`;
    } else {
      txt += `<td class="gombok"><button id="${lista[index].id}" type="button" class="btn btn-primary fav">⭐</button></td>`;
    }
    txt += `</tr>`;
    return txt;
  }

  #TorolEsemenyem() {
    const esemenyem = new CustomEvent("torol", { detail: this.tdId });
    window.dispatchEvent(esemenyem);
  }
  #SzerkesztEsemenyem() {
    const esemenyem = new CustomEvent("kedvenchezAdas", { detail: this.lista });
    window.dispatchEvent(esemenyem);
  }


}
export default TablaSor;
