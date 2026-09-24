function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let tano = document.querySelector('input#txtano')
    let res = document.querySelector('div#res')

    if(tano.value.length === 0 || Number(tano.value) > ano){
        res.innerHTML = `[ERRO] Verifique os dados e tente novamente`
    } else {
        let rsex = document.getElementsByName('radsex')
        let idade = ano - Number(tano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(rsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe.m.png')
            } else if (idade < 21){
                img.setAttribute('src', 'joven.m.png')
            } else if(idade < 50){
                img.setAttribute('src', 'adulto.m.png')
            } else {
                img.setAttribute('src', 'idoso.m.png')
            }
        } else if (rsex[1].checked){
                genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bb.f.png')
            } else if (idade < 21){
                img.setAttribute('src', 'jovem.f.png')
            } else if (idade < 50){
                img.setAttribute('src', 'adulto.f.png')
            } else {
                img.setAttribute('src', 'idoso.f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}