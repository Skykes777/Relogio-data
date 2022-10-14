function carregar() {
    agora = new Date()

    marcador_horario = document.querySelector('div#mhorario')
    marcador_data = document.querySelector('div#mdata')
    marcador_diaSm = document.querySelector('div#diaSemana')

    hora = String(agora.getHours()).padStart(2, '0') // HORA DO DIA
    minuto = String(agora.getMinutes()).padStart(2, '0') // MINUTO DO DIA
    segundo = String(agora.getSeconds()).padStart(2, '0') // SEGUNDOS DO DIA

    dia = String(agora.getDate()).padStart(2, '0') // DATA DO DIA
    mes = String(agora.getMonth() + 1).padStart(2, '0') // DATA DO MÊS
    ano = String(agora.getFullYear()).padStart(2, '0') // DATA DO ANO

    semana = agora.getDay() + 1 // DATA DA SEMANA
    diaSemana = semana
    
    switch (semana) {
        case 1:
            diaSemana = 'DOMINGO'
            break;
        case 2:
            diaSemana = 'SEGUNDA-FEIRA'
            break
        case 3:
            diaSemana = 'TERÇA-FEIRA'
            break
        case 4:
            diaSemana = 'QUARTA-FEIRA'
            break
        case 5:
            diaSemana ='QUINTA-FEIRA'
            break
        case 6:
            diaSemana ='SEXTA-FEIRA'
            break
        case 7:
            diaSemana = 'SABADO'
        default:
            break;
    }

    marcador_horario.innerText = `${hora}:${minuto}:${segundo}`
    marcador_data.innerText = `${dia}/${mes}/${ano}`
    marcador_diaSm.innerText = `Hoje é ${diaSemana}, `

    if (hora > 23 || hora < 5) {
        marcador_diaSm.innerText += ' boa madrugada!'
        document.body.style.background = '#0000009a'
    } else if (hora <= 12) {
        marcador_diaSm.innerText += ' bom dia!'
        document.body.style.background = '#fcff367c'
    } else if (hora <= 18) {
        marcador_diaSm.innerText += ' boa tarde!'
        document.body.style.background = '#ffb936a4'
    } else {
        marcador_diaSm.innerText += ' boa noite!'
        document.body.style.background = '#0000009a'
    }
}