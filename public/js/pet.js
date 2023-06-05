setTimeout(() => {
  let loader = document.querySelector("#divLoader");
  let content = document.querySelector("section");
  let header = document.querySelector("header");
  let aside = document.querySelector("aside");
  loader.style.display = "none";
  content.style.display = "flex";
  header.style.display = "flex";
  aside.style.display = "flex";
}, 1800);

let database = JSON.parse(localStorage.getItem("database"));
populeteScreen(database);

const menu_icon = document.querySelector("#pet .menu-icons");
menu_icon.style.background = "#74e8b7";

const perfil = document.querySelector("#perfil .menu-icons");
perfil.addEventListener("click", () => {
  window.location.assign(`../view/perfil.html`);
});
const rotina = document.querySelector("#rotina .menu-icons");
rotina.addEventListener("click", () => {
  window.location.assign(`../view/agendaSemanal.html`);
});
const vacina = document.querySelector("#vacina .menu-icons");
vacina.addEventListener("click", () => {
  window.location.assign(`../view/vacinas.html`);
});
const calendario = document.querySelector("#calendario .menu-icons");
calendario.addEventListener("click", () => {
  window.location.assign(`../view/calendario.html`);
});
const cadastrarPet = document.querySelector("#adicionar");
cadastrarPet.addEventListener("click", () => {
  window.location.assign(`../view/cadastrarAnimais1.html`);
});

function populeteScreen(data) {
  const meusPets = document.querySelector("#meusPets");
  const pets = data.user[0].pets.sort((a, b) => a.nome.localeCompare(b.nome));
  pets.forEach((value) => {
    let raça = value.raça;
    if (raça == undefined || raça == null) raça = "";
    meusPets.innerHTML += `<div class="cardPet" style="background: ${value.cor}">
        <img src="${value.path}">
        <h3>${value.nome}</h3>
        <input id="nomePet${value.id}" value="${value.nome}">
        <input id = "idadePet${value.id}" value="${value.idade}">
        <input id = "pesoPet${value.id}" value="${value.peso}">
        <input id = "racaPet${value.id}" value="${raça}">
        <button id="editar${value.id}">Salvar</button>
    </div>`;
  });
  addClicks(pets);
}

function addClicks(pets) {
  pets.forEach((value) => {
    const editar = document.querySelector(`#editar${value.id}`);
    editar.addEventListener("click", () => {
      const nome = document.querySelector(`#nomePet${value.id}`);
      const idade = document.querySelector(`#idadePet${value.id}`);
      const peso = document.querySelector(`#pesoPet${value.id}`);
      const raca = document.querySelector(`#racaPet${value.id}`);
      if (!nome.value || !idade.value || !peso.value) {
        alert("Favor digitar os campos obrigatórios");
        return;
      }
      if (
        nome.value == value.nome &&
        idade.value == value.idade &&
        peso.value == value.peso &&
        raca.value == value.raça
      ) {
        return;
      }
      const choosePetIndex = database.user[0].pets.findIndex(
        (x) => x.id == value.id
      );
      if (choosePetIndex == -1) {
        alert("Pet inválido");
        return;
      }

      const dadosAtualizados = {
        ...database.user[0].pets[choosePetIndex],
        nome: nome.value,
        idade: idade.value,
        peso: peso.value,
        raça: raca.value,
      };
      database.user[0].pets[choosePetIndex] = dadosAtualizados;

      database = JSON.stringify(database);
      localStorage.removeItem("database");
      localStorage.setItem("database", database);
      location.reload();
    });
  });
}
