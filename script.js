function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anoDigitado = document.getElementById('txt').value

    var idade = ano - Number(anoDigitado)
    var res = document.querySelector('div#res')

    if(anoDigitado.length == 0 || Number(anoDigitado) > ano || idade > 120){
        window.alert("Ano inválido, digite novamente")
    }else{
        var fsex =document.getElementsByName('sexo')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'homem'
            
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src','img/menino.png' )
            }else if(idade <= 21){
                img.setAttribute('src','img/adolescente.png' )
            }else if(idade <= 50){
                img.setAttribute('src','img/homem.png' )
            }else{
                img.setAttribute('src','img/idoso.png' )
            }
        }else if(fsex[1].checked){
            genero = 'mulher'
            
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src','img/menina.png' )
            }else if(idade <= 21){
                img.setAttribute('src','img/adolescente-F.png' )
            }else if(idade <= 50){
                img.setAttribute('src','img/mulher.png' )
            }else{
                img.setAttribute('src','img/idosa.png' )
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}