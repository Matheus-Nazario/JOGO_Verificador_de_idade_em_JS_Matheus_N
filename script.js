function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value == 0 || Number(fano.value) > ano ) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Masculino'
            if (idade >= 0 && idade < 11) {
                gênero = 'Menino'
                img.setAttribute('src', 'crianca_h.png')
            } else if (idade < 21 ) {
                gênero = 'jovem'
                img.setAttribute('src', 'jovem_h.png')
            } else if (idade < 60 ) {
                gênero = 'homem'
                img.setAttribute('src', 'homem.png')
            } else {
                gênero = 'idoso'
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 11) {
                gênero = "menina"
                img.setAttribute('src', 'crianca_m.png')
            } else if (idade < 21) {
                gênero = 'Jovem'
                img.setAttribute('src', 'jovem_m.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'mulher.png')
            } else {
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign= 'center'
        res.innerHTML = ` Detectamos ${gênero}  com  ${idade} anos.`
        res.appendChild(img)
    }
    }
