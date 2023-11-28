class TablaSor {
  constructor(szuloElem, lista, index) {
    szuloElem.append(this.SorLetrehozas(lista, index));
    this.trElem = szuloElem.children("tr:last-child");
    this.trId = this.trElem.attr("id");
    this.tdGombok = this.trElem.find(".gombok");
    this.szGomb = this.trElem.find(".szerkeszt");
    this.tdId = this.trElem.find(".id");
    this.tdNev = this.trElem.find(".nev");
    this.tdSzul = this.trElem.find(".szul");

    this.SzulKonyvek = $(".konyvek");
    
    this.szGomb.on("click", () => {
      this.tdGombok.html(
        `<button id="${lista[index].id}" type="button" class="btn btn-primary ment">✔</button><button id="${lista[index].id}" type="button" class="btn btn-primary megsem">❌</button>`
      );
      this.convertToInput();

      this.megsemGomb = this.trElem.find(".megsem");
      this.mentmGomb = this.trElem.find(".ment");

      this.mentmGomb.on("click", () => {
        const editedNev = this.tdNev.find("input").val();
        const editedSzul = this.tdSzul.find("input").val();
        this.editedData = {
          id: this.trId,
          nev: editedNev,
          szul: editedSzul,
        };
        this.#SzerkesztEsemenyem();
        this.convertToNormal();
      });

      this.megsemGomb.on("click", () => {
        this.tdGombok.html(
          `<button id="${lista[index].id}" type="button" class="btn btn-primary szerkeszt">📝</button>`
        );
        this.convertToNormal();
      });
    });

    this.torolGomb = this.trElem.find(".torol");
    this.torolGomb.on("click", () => {
      const confirmed = confirm("Biztosan törölni szeretnéd?");
      if (confirmed) {
        this.#TorolEsemenyem();
      }
    });


    this.megtekint = this.trElem.find(".megtekint");
    this.megtekint.on("click", () => {
      this.#ViewEsemenyem();
      this.SzulKonyvek.css("display", "block");
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
    txt += `<td><button id="${lista[index].id}" type="button" class="btn btn-primary megtekint">Megtekint</button></td><td class="gombok"><button id="${lista[index].id}" type="button" class="btn btn-primary szerkeszt">📝</button></td><td><button id="${lista[index].id}" type="button" class="btn btn-default torol" >❌</button></td>`;

    txt += `</tr>`;
    return txt;
  }
  #TorolEsemenyem() {
    const esemenyem = new CustomEvent("torol", { detail: this.trId });
    window.dispatchEvent(esemenyem);
  }
  #SzerkesztEsemenyem() {
    const esemenyem = new CustomEvent("szerkesztes", {
      detail: this.editedData,
    });
    window.dispatchEvent(esemenyem);
  }
  #ViewEsemenyem() {
    const esemenyem = new CustomEvent("view", {
      detail: this.trId,
    });
    window.dispatchEvent(esemenyem);
  }

  convertToInput() {
    const inputNev = $("<input>").attr("type", "text").val(this.tdNev.text());

    const inputSzul = $("<input>").attr("type", "text").val(this.tdSzul.text());

    this.tdNev.html(inputNev);
    this.tdSzul.html(inputSzul);

    inputNev.focus();
  }

  convertToNormal() {
    const inputNevValue = this.tdNev.find("input").val();
    const inputSzulValue = this.tdSzul.find("input").val();

    this.tdNev.html(inputNevValue);
    this.tdSzul.html(inputSzulValue);
  }
 
}
export default TablaSor;
