setTimeout(() => {
  let loader = document.querySelector("#divLoader");
  let content = document.querySelector("section");
  let header = document.querySelector("header");
  let aside = document.querySelector("aside");
  loader.style.display = "none";
  content.style.display = "flex";
  header.style.display = "flex";
  aside.style.display = "flex";
}, 1050);

const vacina = document.querySelector("#vacina .menu-icons");
vacina.addEventListener("click", () => {
  window.location.assign(`../view/vacinas`);
});
const perfil = document.querySelector("#perfil .menu-icons");
perfil.addEventListener("click", () => {
  window.location.assign(`../view/perfil`);
});
const pet = document.querySelector("#pet .menu-icons");
pet.addEventListener("click", () => {
  window.location.assign(`../view/pet`);
});
const calendario = document.querySelector("#calendario .menu-icons");
calendario.addEventListener("click", () => {
  window.location.assign(`../view/calendario`);
});

const menu_icon = document
  .querySelector("#rotina")
  .querySelector(".menu-icons");
menu_icon.style.background = "#74e8b7";

function addClicks() {
  window.location.assign("../view/cadastrarTarefa");
}
const database = JSON.parse(localStorage.getItem("database"));
// getTarefasSemanais(database);

function getTarefasSemanais(db) {
  let events = [];
  const pets = db.user[0].pets;

  pets.forEach((value) => {
    let evento = [];
    value.tarefas.forEach((element) => {
      let data = new Date(element.inicio);
      let anoInicio = data.getFullYear();
      let mesInicio = ("0" + (data.getMonth() + 1)).slice(-2);
      let diaInicio = ("0" + data.getDate()).slice(-2);
      let horarioInicio =
        ("0" + data.getHours()).slice(-2) +
        ":" +
        ("0" + data.getMinutes()).slice(-2);
      let dataFormatadaInicio =
        anoInicio + "-" + mesInicio + "-" + diaInicio + "T" + horarioInicio;

      // Formatação data fim
      let dataFim;
      let dataFormatadaFim;
      if (element.fim) {
        dataFim = new Date(element.fim);
        let anoFim = dataFim.getFullYear();
        let mesFim = ("0" + (dataFim.getMonth() + 1)).slice(-2);
        let diaFim = ("0" + dataFim.getDate()).slice(-2);
        let horarioFim =
          ("0" + dataFim.getHours()).slice(-2) +
          ":" +
          ("0" + dataFim.getMinutes()).slice(-2);
        dataFormatadaFim =
          anoFim + "-" + mesFim + "-" + diaFim + "T" + horarioFim;
        evento = {
          title: element.nome,
          start: dataFormatadaInicio,
          end: dataFormatadaFim,
          color: value.cor,
        };
      } else {
        evento = {
          title: element.nome,
          start: dataFormatadaInicio,
          color: value.cor,
        };
      }
      //Fim da formatação de fim

      events.push(evento);
    });
  });
  populePop(pets);
  return events;
}

function populePop(pets) {
  pets.forEach((value) => {
    value.tarefas.forEach((element) => {
      let dataHoje = new Date(element.inicio);
      dataHoje = `${dataHoje.getDate()}/${dataHoje.getMonth()}/${dataHoje.getFullYear()}`;
      let today = new Date();
      today = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;
      let popup = document.getElementById("popup");
      if (dataHoje == today) {
        popup.style.display = "flex";
        $("#hoje").append(`
          <div class='notifications'>
              <img src="${value.path}" alt="">
              <p>${
                element.nome.charAt(0).toUpperCase() + element.nome.slice(1)
              }</p>
              <p>Hoje</p>
          </div>
          `);
        $("#close").click(() => {
          popup.style.display = "none";
        });
      }
    });
  });
}
