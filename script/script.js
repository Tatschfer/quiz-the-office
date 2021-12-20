function mostraValue(name){
    let rates = document.getElementsByName(name);
    let rate_value = 0;
    for(let i = 0; i < rates.length; i++){
        if(rates[i].checked){
           rate_value = rate_value + parseInt(rates[i].value);
           
        } 
    }
    return rate_value
}

function calculaRespostas(){
    let count = 0;
    count = mostraValue('halpern');
    count = count + mostraValue ('flenderson');
    count = count + mostraValue ('malone');
    count = count + mostraValue ('philbin');
    count = count + mostraValue ('scott');
    count = count + mostraValue ('martinez');
    count = count + mostraValue ('beesley');
    count = count + mostraValue ('hudson');
    count = count + mostraValue ('kapoor');
    count = count + mostraValue ('vance');
    alert("Você acertou: " + count + "/10")


}

