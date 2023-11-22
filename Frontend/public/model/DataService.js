class Model {
  constructor() {}

  getData(url, dataCallback) {
    $("#spinner").show();
    $(".tablazat").hide();

    console.log(url);

    axios
      .get(url)
      .then(function (response) {
        dataCallback(response.data);
      })
      .catch(function (error) {
        console.error("Hiba történt:", error);
      })
      .finally(function () {
        $("#spinner").hide();
        $(".tablazat").show();
      });
  }

  postData(url, data, csrfToken) {
    $("#spinner").show();
    setTimeout(() => {
      $(".tablazat").hide();
    }, 1000);

    axios
      .post(url, data, {
        headers: {
          "X-CSRF-TOKEN": csrfToken,
        },
      })
      .then((response) => {
        console.log("RESP", response);
        //location.reload(true);
        this.respond = $(".respond");
        this.respond.html(`<p class="text-success text-center">Sikeressen hozzáadatva a kedvencekhez!</p>`).show();
        setTimeout(() => {
          this.respond.hide();
        }, 2000);
      })
      .catch((error) => {
        console.error("Hiba az adatok küldése közben:", error);
      })
      .finally(() => {
        $("#spinner").hide();
        $(".tablazat").show();
      });
  }


  deleteData(url, id, csrfToken) {
    $("#spinner").show();
    $(".tablazat").hide();

    axios
      .delete(url, {
        data: { id: id },
        headers: {
          "X-CSRF-TOKEN": csrfToken,
        },
      })
      .then((response) => {
        location.reload(true);
        console.log("Adatok sikeresen törölve!", response);
        successCallback(response.data);
      })
      .catch((error) => {
        console.error("Hiba történt a törlés során:", error);
        errorCallback(error);
      })
      .finally(function () {
        $("#spinner").hide();
        $(".tablazat").show();
      });
  }

}

export default Model;