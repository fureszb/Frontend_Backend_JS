class Model {
    constructor() {}

    getData(url, dataCallback) {
      console.log(url);

      axios
        .get(url)
        .then(function (response) {
          dataCallback(response.data);
        })
        .catch(function (error) {
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
          console.log("RESP", response);
        })
        .catch((error) => {
          console.log("hiba", error);
        });
    }
    
    deleteData(url, id) {
      console.log(`${url}/${id}`)
      axios
          .delete(`${url}/${id}`)
          .then((response) => {
           
              console.log("Adatok sikeresen törölve!", response);
          })
          .catch((error) => {
            
              console.error("Hiba történt a törlés során:", error);
          });
  }
}

export default Model;
