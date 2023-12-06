window.onload = () => {
  "use strict";
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
  }
};

let nome = document.getElementById("nome");
let email = document.getElementById("email");
let cpf = document.getElementById("cpf");
let telefone = document.getElementById("telefone");
let especialidade = document.getElementById("especialidade");
let data = document.getElementById("data");
let hora = document.getElementById("hora");

let botao = document.getElementById("botao");

let valores = [];

//fazendo o CREAT no agendamento
function CREAT() {
  const objeto = {
    nome: nome.value,
    email: email.value,
    cpf: cpf.value,
    telefone: telefone.value,
    especialidade: especialidade.value,
    data: data.value,
    hora: hora.value,
  };

  if (localStorage.valores) {
    valores = JSON.parse(localStorage.getItem('valores'));
  }

  valores.push(objeto);
  nome.value = "";
  email.value = "";
  cpf.value = "";
  telefone.value = "";
  especialidade.value = "";
  data.value = "";
  hora.value = "";

  localStorage.valores = JSON.stringify(valores);

  //fazendo a notificação
  const enviaNotificacao =  () => {
    console.log(objeto.nome);
    
    new Notification(`Paciente ${objeto.nome} Agendado foi com sucesso para ${objeto.data} às ${objeto.hora} horas.`);

  }
  enviaNotificacao();
  
}


const nome_pes = document.getElementById("nome_pes");
const cpf_pes = document.getElementById("cpf_pes");
const botao_pes = document.getElementById("botao_pes");

const tabela = document.getElementById("tabela");//é só uma div se acalma
//fazendo o READ no pesquisa
function READ() {
  let busca = nome_pes.value || cpf_pes.value;

   if (localStorage.valores) {
     valores = JSON.parse(localStorage.getItem('valores'));

   const encontrado = valores.find((valores) => valores.nome === busca || valores.cpf === busca);
   //console.log(encrotrado);  o objeto que vc queria

  //fazendo a tabela
  tabela.innerHTML = "";
  tabela.className = "centralizar";

  const criaTabela = document.createElement("table");
     
  tabela.appendChild(criaTabela);
  const criaCabecalho = document.createElement("thead");
  criaTabela.appendChild(criaCabecalho);
  criaCabecalho.innerHTML =`<tr><th>Nome</th><th>Especialidade</th><th>Data</th><th>Hora</th></tr>`;

     //aqui é quem vai receber todos os elementos da promise 

     const corpo = document.createElement("tbody");
     criaTabela.appendChild(corpo);

     let linha = document.createElement("tr");//criar uma linha para cada item

      //aqui está o nome 
      let nomeItem = document.createElement("td");
      nomeItem.innerText = encontrado.nome;
      linha.appendChild(nomeItem);

      //aqui está a especialidade
      let EspecialiItem = document.createElement("td");
      EspecialiItem.innerText = encontrado.especialidade;
      linha.appendChild(EspecialiItem);

      //aqui está a data
      let DataItem = document.createElement("td");
      DataItem.innerText = encontrado.data;
      linha.appendChild(DataItem);

      //aqui está a hora
      let HoraItem = document.createElement("td");
      HoraItem.innerText = encontrado.hora;
      linha.appendChild(HoraItem);

     corpo.appendChild(linha);
     
  }
   else{
     console.log("Não tem nenhum registro");
   }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//verificando acesso a notifications
/*
const verifica = () =>{
  if(!('Notification' in window)) {
    throw new Error('notiificações não suportado');
  }
}

//fazendo a notificação
const enviaNotificacao = async () => {
  const permisao = await Notification.requestPermission();
  if(permisao !== 'granted') {
    throw new Error('notificação não aceita');
  }else{
    new Notification('funcionou a notification');
  }
}
verifica()
enviaNotificacao();*/