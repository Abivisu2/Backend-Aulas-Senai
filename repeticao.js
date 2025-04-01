
const notas = [0, 5, 8, 6, 9]

const resultado = notas.map(element => {
    console.log("Elemento:", element)
    let extenso;

   switch (element) {
    case 0:
        extenso = "zero";
        break;
    case 5:
        extenso = "cinco";
        break;
    case 8:
        extenso = "Oito";
        break;
    case 6:
        extenso = "Seis";
        break;
    case 9:
        extenso = "Nove";
        break; 
    default:
        extenso = "Não localizou nada!"
        break;
   }

   return {"elemento": element,
            "extenso": extenso
   };

})


// notas.forEach(element => {
//     console.log("Elemento:", element)
//     return element;

// });

// notas.map(element => {
//     console.log("Elemento:", element)
//     return element;

// });

// notas.reduce(element => {

// });


