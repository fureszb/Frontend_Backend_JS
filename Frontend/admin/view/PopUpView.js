class PopUpView {
  #lista = [];
  #tablaSor;

  constructor(lista, szuloELem, tablaSor) {
    this.szuloELem = szuloELem;
    this.#lista = lista;
    this.#tablaSor = tablaSor;
    console.log(this.#lista)
    this.szuloELem.html(`<div class="container mt-3">
    <div class="card" style="width:400px">
      <div class="card-body">
       
      </div>
    </div>
    <br>
  </div>`);
    this.PopUp();

    this.Close = $(".close");
    this.Close.on("click", ()=>{
      this.szuloELem.css("display", "none")
    })
  }

  PopUp() {
    let txt;
    this.felugroCard = $(".card-body");

    const trId = this.#tablaSor;
    
    console.log(this.#lista);
    for (let index = 0; index < this.#lista.length; index++) {
      if (this.#lista[index].writer_id == trId) {
        txt += `<h4 class="card-title">${this.#lista[index].nev}</h4>`;
        for (const key in this.#lista[index]) {
          txt += `<p class="card-text">${key}: ${this.#lista[index][key]}</p>`;
        }
        txt+= `<hr>`
      }
    }
    txt += `<a href="#" class="btn btn-danger close">Bezár</a>`;
    this.felugroCard.append(txt);
  }
 
}
export default PopUpView;
