                                                                         //Atividade Deimes//
       
       
    // nomes: João Victor Lopes De Andrade , Isabella Ferro Ortiz 
       

       
       
       // uma breve explicação sobre if , else if, else 
// O else if é utilizado em JavaScript para verificar múltiplas condições em uma sequência. 
//Se a primeira condição (if) for falsa, o JavaScript tentará a próxima condição (else if) . Se nenhuma condição for verdadeira, portanto,
 //o código dentro do bloco else (se estiver presente) será executado.

  // explicando sobre o codigo abaixo //

  // aqui estamos utilizando if, else if, else , para fazer uma breve regra sobre horarios algo desse tipo , estamos dizendo que o bom dia e aparti das 6 as 12 
  // sendo assim se o tiver um horario entre os dois então sera bom dia ,  estamos utilizando else if para dizer que maior que 12 e menor que 18 sera boa tarde então caso estejamos
  // entre esse horarios  então vai nos retornar boa tarde ,ainda utilizando else if estamos dizendo que das 18 as 24 é boa noite sendo nassim vai trazer pára min boa noite entre esses horarios 
  // agora partindo pro else caso aja tenha ultrapassado todos esses hoararios e estamos de madruga suposição as 1 , então nos trara é madrugadA vá dormir 

  // esse foi o codigo que eu fiz utilizando if , else if , else 


//1

if ( HoraDoDia >= 6 && HoraDoDia < 12){
    console.log ( "bom dia!!");

}
else if ( HoraDoDia > 12 && HoraDoDia < 18 ){
    console.log ("boa tarde!!");

}

else if (HoraDoDia > 18 && HoraDoDia < 24){
     console.log ("boa noite !!");
}

else {
    console.log ("é madrugada. vá dormir!!");
    
}

//exemplo2
 


semaforo = "verde";

if (semaforo == "verde") {
    mensagem = "Pode passar";
}


semaforo = "vermelho";

if (semaforo == "verde") {
    mensagem = "Pode passar";
} else {
    mensagem = "Pare";
}

semaforo = "amarelo";

if (semaforo == "verde") {
    mensagem = "Pode passar";
} else if (semaforo == "vermelho") {
    mensagem = "Pare";
} else {
    mensagem = "Atenção";
}




//02

loop(food = 0; foodNeeded = 10) {
    if (food = foodNeeded) {
      exit loop;
      console.log("Nós temos comida o suficiente, Vamos para casa")
    } else {
      food += 2; 
     console.log( "Passe uma hora coletando mais 2 alimentos")(food)
      console.log("loop será executado novamente")
    }
  }


  exemplo 2


  var carro = {modelo: 'A3 Sedan', marca: 'Audi', ano: 2020}

  for (let caracteristica in carro){
     
      console.log(caracteristica + ": " + carro[caracteristica]);
  }
  
  var saída:
    modelo: A3 Sedan;
    marca: Audi;
    ano: 2020;
 



//Switch-case exemplo 01
const fruta = "morango";

switch(fruta) {
    case "morango":
        console.log("Sua fruta favorita é morango!");
    break;
    case "uva":
        console.log("Sua fruta favorita é uva");
    break;
    case "tomate":
        console.log("Sim tomate é uma fruta!");
    break;
    case "maçã":
        console.log("Sua fruta escolhida é maçã!");
    break;
    default:
        console.log("Você não tem fruta que goste");
}

//exemplo 02
sujeito = "feminino";

switch (sujeito) {
    case "feminino":
        console.log("Bem-vinda!");
        break;
    case false:
        console.log("Bem-vindo!");
}


//While loop exemplo 01
let contador = 0;

while (contador < 6) {
  console.log('repetição nº ' + contador);

  contador++;
}

//exemplo 02
//No exemplo abaixo temos um Array com uma lista de cores e precisamos saber o nome e valor de cada uma das suas propriedades.
const cores = [
  'Rosa',
  'Preto',
  'Azul',
  'Branco'
];

let index = 0;

while (index < cores.length) {
  console.log(index, cores[index]);
  index++;
}