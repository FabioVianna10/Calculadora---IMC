function calcular() {
  var heigth = document.getElementById("altura").value / 100;
  var weigth = document.getElementById("peso").value;
  var result = document.getElementById("result");



  var imc = weigth / heigth ** 2;

  if (imc < 18.5) {
    console.log("Magreza ");
    console.log(imc);
    result.style.color = "yellow";
    result.innerHTML = "Magreza ";
    result.innerHTML += "  | IMC  ";
    result.innerHTML += imc;

  } else if ((imc >= 18, 5 && imc < 25)) {
    console.log("Normal ");
    console.log(imc);
    result.style.color = "yellow";
    result.innerHTML = "Normal ";
    result.innerHTML += "  | IMC  ";
    result.innerHTML += imc;


  } else if (imc >= 25 && imc < 30) {
    console.log("Sobrepeso  ");
    console.log(imc);
    result.style.color = "yellow";
    result.innerHTML = "Sobrepeso ";
    result.innerHTML += "  | IMC  ";
    result.innerHTML += imc;


  } else if (imc >= 30 && imc < 40) {
    console.log("Obesidade  ");
    console.log(imc);
    result.style.color = "yellow";
    result.innerHTML = "Obesidade  ";
    result.innerHTML += "  | IMC  ";
    result.innerHTML += imc;

    
  } else {
    console.log("Obesidade Grave ");
    console.log(imc);
    result.style.color = "yellow";
    result.innerHTML = "Obesidade Grave  ";
    result.innerHTML += "  | IMC  ";
    result.innerHTML += imc;
  }
}
