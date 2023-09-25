let div_principal = document.getElementById("div_principal")
let menu = document.getElementById("div_menu")
let body = document.getElementById("body")
let caixa_meta = document.getElementById("caixa_meta")
let caixa_garrafa = document.getElementById("caixa_garrafa")
let footer = document.getElementById("footer")

let agua = document.getElementById("agua")
let contador_meta = document.getElementById("contagem_meta")
let tomar_agua = document.getElementById("tomar_agua")

function abrir_principal() {
    div_principal.style.display = "none"
    menu.style.display = "block"
    body.style.backgroundColor = "#48CAE4"
    footer.style.display = "none"
}

function voltar_principal() {
    div_principal.style.display = "block"
    menu.style.display = "none"
    body.style.backgroundColor = "#CAF0F8"
    footer.style.display = "block"
}

function abrir_meta() {
    body.style.backgroundColor = "#CAF0F8"
    menu.style.display = "none"
    caixa_meta.style.display = "block"
}

function confirmar_meta() {
    body.style.backgroundColor = "#48CAE4"
    caixa_meta.style.display = "none"
    menu.style.display = "block"

    let valor = document.getElementById("input_meta").value
    contador_meta.textContent = valor + "ML"

}

function abrir_garrafa() {
    caixa_garrafa.style.display = "block"
    menu.style.display = "none"
}

//Funçao selecionar xicara

let recepentes_copos = document.getElementsByName("repentes");

function confirmar_copo() {
    caixa_garrafa.style.display = "none"
    menu.style.display = "block"

    for (let index = 0; index < recepentes_copos.length; index++) {
        if (recepentes_copos[index].checked) {
            xicara_valor = recepentes_copos[index].value;
            tomar_agua.innerText = xicara_valor + 'ML'
            break;
        }
    }

}

//Funçao tomar água

let number = document.getElementById("number");
let raiz = document.documentElement;
let contador = 0
let multi_divisao = 0
let agua_tomada = 0
let xicara_valor = 0
let soma_do_registro = 0

function tomaragua() {

    for (let index = 0; index < recepentes_copos.length; index++) {
        if (recepentes_copos[index].checked) {
            xicara_valor = recepentes_copos[index].value;
            tomar_agua.innerText = xicara_valor + 'ML'

            break;
        }
    }

    let valor_meta = document.getElementById("input_meta").value
    let divisao_two = (xicara_valor / valor_meta)*100

    if (valor_meta == 0) {
        console.log('error')

    } else {

        multi_divisao = multi_divisao + divisao_two
        

        if (contador < 100) {
            setInterval(() => {
                if (contador < multi_divisao) {
                    contador++
                    console.log(contador)
                    agua.style.height = contador + '%'
                } else {
                    clearInterval
                }
                if (contador >= 100) {
                    tomar_agua.innerHTML = 'Continuar'
                }
            }, 20);
        } else {
            agua.style.height = '0%'
            contador = 0
            multi_divisao = 0
        }
        
    }

    let lista_registros = document.getElementById("lista_de_registros")
    let elementos_da_lista = lista_registros.querySelectorAll("li")

    if (soma_do_registro == elementos_da_lista.length) {
        soma_do_registro = 0

    } else {
        elementos_da_lista[soma_do_registro].textContent = xicara_valor + 'ML'

        soma_do_registro = soma_do_registro + 1

    }

    if (agua_tomada >= valor_meta) {
        agua_tomada = 0
        number.textContent = agua_tomada
    } else {
        agua_tomada = agua_tomada + Number(xicara_valor)
        number.textContent = agua_tomada + 'ML'
    }

}

