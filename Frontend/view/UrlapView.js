import NumberUrlapElem from "./NumberUrlapElem.js";
import TextUrlapElem from "./TextUrlapElem.js";

class UrlapView {
  #leiro = {};
  #urlapElemLista = [];
  #valid = true;
  #urlapAdatok = {};
  constructor(szuloELem, leiro) {
    this.#leiro = leiro;
    this.szuloELem = szuloELem;
    this.szuloELem.html("<form>")
    this.formElem = this.szuloELem.children("form");
    this.#urlapLetrehoz();
    this.TR=this.szuloELem.children("tr:last-child");
   this.TOROL = this.TR.children("td:last-child").children(".torol");
    console.log(this.TOROL)

    this.submitElem = $("#submit");
    this.submitElem.on("click", (event) => {

      event.preventDefault();

      this.#urlapElemLista.forEach(elem => {
        let ertek = elem.ertek;
        let kulcs = elem.key;
        this.#urlapAdatok[kulcs] = ertek;
        this.sajatEsemeny("AdatKiir");
      });



      this.#urlapElemLista.forEach(elem => {
        this.#valid = true;
        this.#valid = this.#valid && elem.valid
        
      });

      if (this.#valid) {
        console.log("Valid az urlap!")
        
      }
      else {
        console.log("Nem valid az urlap!")
      }
    });
  

  };



  #urlapLetrehoz() {
    for (const key in this.#leiro) {
        switch (this.#leiro[key].type) {
            case "text":
                //this.#textElem(key);
                this.#urlapElemLista.push(new TextUrlapElem(key, this.#leiro[key], this.formElem));
                break;
            case "number":
                this.#numberElem(key);
                break;
            /*case "radio":
                let txt = `${this.#leiro[key].megj}:<br>`;
                this.formElem.append(txt);
                for (const kulcs in this.#leiro.nem.value) {
                    const value = this.#leiro.nem.value[kulcs];
                    this.#radioElem(key, value);
                }*/
            default:
        }
    }

    let txt = `<input id="submit" type="submit" class="btn btn-primary" value="küldés"></form>`;
    this.formElem.append(txt);
}

  #numberElem(key) {
    const numberElem = new NumberUrlapElem(key, this.#leiro[key], this.formElem);
    this.#urlapElemLista.push(numberElem);
  }

  /*radioElem(key, value) {
    let txt = ``;
    txt += `<input type="radio" id="${key}" name="${key}" value="${value}">`;
    txt += `<label for="${key}">${value}</label><br>`;
    this.formElem.append(txt);

  } */
  sajatEsemeny(nev) {
    let esemenyem = new CustomEvent(nev, { detail: this.#urlapAdatok })
    window.dispatchEvent(esemenyem);
  }
}
export default UrlapView;

