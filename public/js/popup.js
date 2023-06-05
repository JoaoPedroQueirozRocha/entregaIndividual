// setInterval(() => {
// const NotificationN = new Notification("teste");
// }, 1000);

// let dataAtual = new Date();
// let dataIso = dataAtual.toISOString();
// console.log(dataIso);

// Notification.requestPermission((status) => {
//   console.log("Notification", status);
// });
// function displayNotification() {
//   if (Notification.permission === "granted") {
//     navigator.serviceWorker.getRegistration().then((reg) => {
//       reg.showNotification("teste");
//     });
//   }
// }

function getTarefasSemanais(db) {
  const pets = db.user[0].pets;
  pets.forEach((value) => {
    value.tarefas.forEach((element) => {
      let data = new Date(element.inicio);
      data = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;
      let today = new Date();
      today = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;
      if (data == today) {
        $("#hoje").append(`
        <div class='notifications'>
            <img src="${value.path}" alt="">
            <p>${element.nome}</p>
            <p>Hoje</p>
        </div>
        `);
      }
    });
  });
}
