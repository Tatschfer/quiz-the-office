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
    
    if (count == 0){
        Swal.fire({
            title: 'Que decepção!',
            text: 'Você acertou: ' + count + "/10",
            imageUrl: 'img/respostas0.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'michael-scott',
          })
    };

    if (count == 1){
        Swal.fire({
            title: 'Você não vê a série?',
            text: 'Você acertou: ' + count + "/10",
            imageUrl: 'img/respostas1.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'dwight-schrute',
          })

    };

    if (count == 2){
        Swal.fire({
            title: 'Ainda está lamentável.',
            text: 'Você acertou: ' + count + "/10",
            imageUrl: 'img/respostas2.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'andy-bernard',
          })
    };

    if (count == 3){
        Swal.fire({
            title: 'Não está nem perto de ficar bom.',
            text: 'Você acertou: ' + count + "/10",
            imageUrl: 'img/respostas3.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'michael-s',
          })
    };

    if (count == 4){
        Swal.fire({
            title: 'Ainda não...',
            text: 'Você acertou: ' + count + "/10",
            imageUrl: 'img/respostas4.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'pam-not-yet',
          })
    };

    if (count == 5){
        Swal.fire({
            title: 'Tente de novo.',
            text: 'Você acertou: ' + count + "/10",
            imageUrl: 'img/respostas5.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'jim-try-again',
          })
    };

    if (count == 6){
        Swal.fire({
            title: 'Opa, está começando a melhorar!',
            text: 'Você acertou: ' + count + "/10",
            imageUrl: 'img/respostas6.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'phillis',
          })
    };

    if (count == 7){
        Swal.fire({
            title: 'High five!',
            text: 'Você acertou: ' + count + "/10",
            imageUrl: 'img/respostas7.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'high-five',
          })
    };

    if (count == 8){
        Swal.fire({
            title: 'Está ficando interessante!',
            text: 'Você acertou: ' + count + "/10",
            imageUrl: 'img/respostas8.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'expected-michael',
          })
    };

    if (count == 9){
        Swal.fire({
            title: 'Você é bom nisso!',
            text: 'Você acertou: ' + count + "/10",
            imageUrl: 'img/respostas9.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'surprise-michael',
          })
    };

    if (count == 10){
        Swal.fire({
            title: 'INCRÍVEL!',
            text: 'Você acertou: ' + count + "/10",
            imageUrl: 'img/respostas10.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'michael-erin',
          })
    };

};

