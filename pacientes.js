// // 4) Crie uma função que recebe um array e retorne a lista dos pacientes que tenha o status = internado, e para cada um que esta internado, verifique se há o tipo sanguineo em estoque para transfusão e apresente uma mensagem positiva ou negativa.

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
]
const estoque = { A: 2, B: 1, AB: 0, O: 6 };


    const pacientesInternados = pacientes.filter((paciente) => {
        return paciente.status === "internado"
    });
    
    pacientesInternados.forEach((paciente) => {
        const tipo = paciente.tipoSanguineo

        switch (tipo) {
            case 'A':
                if (estoque.A > 0) {
                    console.log(`✅ ${paciente.nome} pode receber transfusão de sangue tipo A.`);
                } else {
                    console.log(`❌ ${paciente.nome} NÃO pode receber transfusão de sangue tipo A - fora de estoque.`);
                }
                break;
    
            case 'B':
                if (estoque.B > 0) {
                    console.log(`${paciente.nome} pode receber transfusão de sangue tipo B.`);
                } else {
                    console.log(`${paciente.nome} NÃO pode receber transfusão de sangue tipo B - fora de estoque.`);
                }
                break;
    
            case 'AB':
                if (estoque.AB > 0) {
                    console.log(`${paciente.nome} pode receber transfusão de sangue tipo AB.`);
                } else {
                    console.log(`${paciente.nome} NÃO pode receber transfusão de sangue tipo AB - fora de estoque.`);
                }
                break;
    
            case 'O':
                if (estoque.O > 0) {
                    console.log(`${paciente.nome} pode receber transfusão de sangue tipo O.`);
                } else {
                    console.log(`${paciente.nome} NÃO pode receber transfusão de sangue tipo O - fora de estoque.`);
                }
                break;
    
            default:
                console.log(`${paciente.nome} tem tipo sanguíneo desconhecido: ${tipo}`);
                break;
        
            }
    });

