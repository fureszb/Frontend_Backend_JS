class Model {
  constructor() {}

  getData(url) {
    $("#spinner").show();
    $(".tablazat").hide();

    console.log(url);

    axios
      .get(url)
      .then(function (response) {
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
    setTimeout(function() {
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
        location.reload(true);
      })
      .catch((error) => {
        console.error("Hiba az adatok küldése közben:", error);
      })
      .finally(function () {
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