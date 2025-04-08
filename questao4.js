// 4) Crie uma função que recebe um array e retorne a lista dos pacientes que tenha o status = internado, e para cada um que esta internado, verifique se há o tipo sanguineo em estoque para transfusão e apresente uma mensagem positiva ou negativa.

const pacientes = [
  { nome: "Carlos", tipoSanguineo: "AB", status: "internado" },
  { nome: "Carlota", tipoSanguineo: "A", status: "internado" },
  { nome: "Carlinhos", tipoSanguineo: "B", status: "alta" },
  { nome: "Carlinha", tipoSanguineo: "O", status: "internado" },
  { nome: "Carlao", tipoSanguineo: "B", status: "internado" },
  { nome: "carlzone", tipoSanguineo: "A", status: "internado" },
  { nome: "Carllo", tipoSanguineo: "O", status: "observação" },
  { nome: "Carrilho", tipoSanguineo: "O", status: "internado" },
  { nome: "Carrito", tipoSanguineo: "A", status: "internado" },
  { nome: "Carl", tipoSanguineo: "AB", status: "alta" },
  { nome: "Cars", tipoSanguineo: "AB", status: "observação" },
];
const estoque = { A: 2, B: 1, AB: 0, O: 2 };

// console.log("internados", pacientesInternados);

const realizaTransfusao = (pacientes) => {
  const pacientesInternados = pacientes.filter((paciente) => {
    return paciente.status === "internado";
  });

  pacientesInternados.forEach((paciente) => {
    switch (paciente.tipoSanguineo) {
      case "AB":
        if (estoque.AB > 0) {
          estoque.AB--;
          console.log(
            `O paciente ${paciente.nome} com tipo sanguineo ${paciente.tipoSanguineo} conseguiu tipo AB`
          );
          break;
        }
      case "A":
        if (estoque.A > 0) {
          estoque.A--;
          console.log(
            `O paciente ${paciente.nome} com tipo sanguineo ${paciente.tipoSanguineo} conseguiu tipo A`
          );
          break;
        }

      case "B":
        if (paciente.tipoSanguineo != "A" && estoque.B > 0) {
          estoque.B--;
          console.log(
            `O paciente ${paciente.nome} com tipo sanguineo ${paciente.tipoSanguineo} conseguiu tipo B`
          );
          break;
        }

      case "O":
        if (estoque.O > 0) {
          estoque.O--;
          console.log(
            `O paciente ${paciente.nome} com tipo sanguineo ${paciente.tipoSanguineo} conseguiu tipo O`
          );
          break;
        }
      default:
        console.log(`O paciente ${paciente.nome} com tipo sanguineo ${paciente.tipoSanguineo} nao conseguiu transfusao`)
        break;
    }
  });
};

realizaTransfusao(pacientes);
