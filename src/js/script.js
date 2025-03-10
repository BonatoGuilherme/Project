function aplicarMascara(input, mascara) {

    input.addEventListener("blur", function () {

        let i = 0;
        let valor = input.value.replace(/[^a-zA-Z0-9]/g, "");
        let resultado = "";
        for(let char of mascara){
            if(char === "#"){
                resultado += (valor[i] && /\d/.test(valor[i])) ? valor[i++] : "";
            }
            else if(char === "A"){
                resultado += (valor[i] && /[a-zA-Z]/.test(valor[i]))  ? valor[i++] : "";
            }
            else if(char === "X"){
                resultado += valor[i] ? valor[i++] : "";
            }
            else{
                resultado += char
            }
        }

        input.value = resultado
    });
};
document.addEventListener("DOMContentLoaded", function () {
    aplicarMascara(document.getElementById("name"), "AAAAAAAAAA");
    aplicarMascara(document.getElementById("sobrenome"), "AAAAAAAAAAAAAAA");
    aplicarMascara(document.getElementById("altura"), "#.##");
    aplicarMascara(document.getElementById("peso"), "##");
    aplicarMascara(document.getElementById("investimento"), "####.##");
    aplicarMascara(document.getElementById("juros"), "##");
    aplicarMascara(document.getElementById("tempo"), "###");
});
function nome() {
    let name = document.getElementById("name").value;
    let sobrenome = document.getElementById("sobrenome").value;
    
    let valor1 = parseFloat(document.getElementById("peso").value);
    let valor2 = parseFloat(document.getElementById("altura").value);
    let resultado = valor1 / (valor2 * valor2);
    resultado.toFixed(2);
    if (resultado <= 18.4) {
        document.getElementById("imc").textContent = "Seu nome é " + name + " " + sobrenome + " e seu IMC é " + resultado + " e você está magro.";
    }
    else if (resultado >= 18.5 && resultado <= 24.9) {
        document.getElementById("imc").textContent = "Seu nome é " + name + " " + sobrenome + " e seu IMC é " + resultado + " e você está na média.";
    }
    else {
        document.getElementById("imc").textContent = "Seu nome é " + name + " " + sobrenome + " e seu IMC é " + resultado + " e você está acima do peso.";
    }
};
function calcularJuros(){
    let investimento = parseFloat(document.getElementById("investimento").value);
    let juros = parseFloat(document.getElementById("juros").value);
    let tempo = parseInt(document.getElementById("tempo").value);
    let resultado = investimento * (1 + (juros / 100)) ** tempo;
    resultado = resultado.toFixed(2);

    document.getElementById("investimentoValor").textContent = investimento.toFixed(2);
    document.getElementById("jurosValor").textContent = juros;
    document.getElementById("tempoValor").textContent = tempo;
    document.getElementById("resultadoValor").textContent = resultado;
}