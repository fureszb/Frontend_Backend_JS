class Model {
    constructor() {}

    getData(url, dataCallback) {
      console.log(url);

      axios
        .get(url)
        .then(function (response) {
          // Válasz beérkezett, meghívjuk a dataCallback függvényt és átadjuk neki a választ.
          dataCallback(response.data);
        })
        .catch(function (error) {
          // Hiba esetén itt kezelheted a hibát.
          console.error("Hiba történt:", error);
        });
    }

    postData(url, data, csrfToken) {
      axios
        .post(url, data, {
          headers: {
            "X-CSRF-TOKEN": csrfToken
          }
        })
        .then((response) => {
          // Sikeres POST kérés válaszának kezelése
          console.log("RESP", response);
        })
        .catch((error) => {
          // Hiba esetén itt kezelheted a hibát.
          console.log("hiba", error);
        });
    }
}

export default Model;
