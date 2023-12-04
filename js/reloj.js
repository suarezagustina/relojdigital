function actualizarReloj() {
    let fecha = new Date()

    let dia = fecha.getDate()

    let mes = fecha.getMonth() + 1

    let anio = fecha.getFullYear()

    let hora = fecha.getHours()

    let minutos = fecha.getMinutes()

    let segundos = fecha.getSeconds()

    let ampm = hora >= 12 ? 'PM' : 'AM'

    hora = hora % 12
    hora = hora ? hora : 12
    minutos = minutos < 10 ? '0' + minutos : minutos
    segundos = segundos < 10 ? '0' + segundos : segundos
    
    let horaCompleta = 
    hora + ':' + minutos + ':' + segundos + ' ' + ampm
    let fechaCompleta = 
    dia + '/' + mes + '/' + anio

    document.getElementById('hora').innerHTML = horaCompleta
    document.getElementById('fecha').innerHTML = fechaCompleta

    setTimeout(actualizarReloj, 1000)
  }