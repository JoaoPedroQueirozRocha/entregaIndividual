let dados = {
  newId: 2,
  user: [
    {
      id: 1,
      nome: "userName",
      newPetId: 2,
      pets: [
        {
          id: 1,
          nome: "Bel",
          tipo: "Cão",
          path: "../public/img/dog.svg",
          idade: 1,
          peso: 25,
          raça: "Pastor Alemão",
          vacinaNewId: 4,
          vacinas: [
            {
              id: 1,
              nome: "Raiva",
              data: "12/04/2022",
              dose: "1ª",
              repetir: "12/10/2022",
            },
            {
              id: 2,
              nome: "Raiva",
              data: "14/10/2022",
              dose: "2ª",
              repetir: "14/04/2023",
            },
            {
              id: 3,
              nome: "Raiva",
              data: "20/04/2023",
              dose: "3ª",
              repetir: "20/10/2023",
            },
          ],
          tarefaNewId: 0,
          cor: "#8568fc",
          tarefas: [],
        },
        {
          id: 2,
          nome: "Galla",
          tipo: "Gato",
          path: "../public/img/cat.svg",
          idade: 2,
          peso: 6,
          raça: "Ciames",
          vacinaNewId: 7,
          vacinas: [
            {
              id: 1,
              nome: "Raiva",
              data: "12/06/2021",
              dose: "1ª",
              repetir: "12/12/2021",
            },
            {
              id: 2,
              nome: "Tríplice Felina",
              data: "12/04/2021",
              dose: "1ª",
              repetir: "",
            },
            {
              id: 3,
              nome: "Raiva",
              data: "14/12/2021",
              dose: "2ª",
              repetir: "14/06/2022",
            },
            {
              id: 4,
              nome: "Quadravalente Felina",
              data: "12/06/2021",
              dose: "1ª",
              repetir: "",
            },
            {
              id: 5,
              nome: "Quintavalente Felina",
              data: "12/04/2022",
              dose: "1ª",
              repetir: "",
            },
            {
              id: 6,
              nome: "Raiva",
              data: "20/06/2022",
              dose: "3ª",
              repetir: "",
            },
          ],
          tarefaNewId: 0,
          cor: "#03b66bc5",
          tarefas: [],
        },
      ],
    },
  ],
};

dados = JSON.stringify(dados);
if (!localStorage.getItem("database")) {
  localStorage.setItem("database", dados);
}
