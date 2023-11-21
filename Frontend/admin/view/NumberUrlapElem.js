class NumberUrlapElem {
    constructor(key, leiro, formElem) {
        this.key = key;
        this.leiro = leiro;
        this.formElem = formElem;
        this.ertek = this.leiro.value;

   
        this.createHtmlElements();

        this.addEventListeners();
    }

    createHtmlElements() {
        let txt = `<div class="mb-3 mt-3"><label class="form-label" for="${this.key}">${this.leiro.megj}</label><input type="${this.leiro.type}" class="form-control" id="${this.key}" name="${this.key}" min="${this.leiro.regex.min}" max="${this.leiro.regex.max}" value="${this.ertek}" "></div>`;
        txt += `<div class="valid lathato">OK</div>`;
        txt += `<div class="invalid lathato">${this.key}">${this.leiro.valid}</div>`;
        this.formElem.append(txt);
    }

    addEventListeners() {
        const inputElem = this.formElem.find(`#${this.key}`);

        inputElem.on("input", () => {
            this.ertek = inputElem.val();
        });
    }
}

export default NumberUrlapElem;
