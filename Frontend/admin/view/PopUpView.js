class PopUpView {
  #lista = [];
  #tablaSor;

  constructor(lista, szuloELem, tablaSor, nev) {
    this.szuloELem = szuloELem;
    this.#lista = lista;
    this.#tablaSor = tablaSor;
    console.log(this.#lista);

    this.szuloELem.html(`
      <div class="modal fade" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
        
            <div class="modal-header">
              <h5 class="modal-title">${nev}<br>könyvei:</h5>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
        
            <div class="modal-body">
              <div class="container mt-3">
                <div class="card" style="width:400px">
                  <div class="card-body"></div>
                </div>
                <br>
              </div>
            </div>
        
            <div class="modal-footer">
              <button type="button" class="btn btn-danger close" data-dismiss="modal">Bezár</button>
            </div>
        
          </div>
        </div>
      </div>
    `);
    const bezarGomb = $(".close");
    bezarGomb.on("click", () => {
      $("#myModal").modal("hide");
      this.SzulKonyvek.css("display", "none");
    });

    this.PopUp();
  }

  PopUp() {
    let txt="";
    this.felugroCard = $(".card-body");

    const trId = this.#tablaSor;

    console.log(this.#lista);
    for (let index = 0; index < this.#lista.length; index++) {
      if (this.#lista[index].writer_id == trId) {
        txt += `<h4 class="card-title">${this.#lista[index].nev}</h4>`;
        for (const key in this.#lista[index]) {
          txt += `<p class="card-text">${key}: ${this.#lista[index][key]}</p>`;
        }
        txt += `<hr>`;
      }
    }

    this.felugroCard.append(txt);

    $("#myModal").modal("show");
  }
}
export default PopUpView;
