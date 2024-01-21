// ARREGLO BIDIMENSIONAL
let matrizA = []
let matrizB = []
let matrizResultado = []

const NUM_MINIMO_RANDOM = -30
const NUM_MAXIMO_RANDOM = 30

// refrencia al cuerpo de la tabla: tbody
const tableTbodyA = document.querySelector('#id-table-matriz-numerico-matriz-A > tbody')
const tableTbodyB = document.querySelector('#id-table-matriz-numerico-matriz-B > tbody')
const tableTbodyResultado = document.querySelector('#id-table-matriz-resultado > tbody')

// agregamos las referencias a los botones del DOM
const btnCargarMatrizA = document.getElementById("btn-cargar-matriz-A")
const btnCargarMatrizB = document.getElementById("btn-cargar-matriz-B")
const btnVaciarMatrizA = document.getElementById("btn-vaciar-matriz-A")
const btnVaciarMatrizB = document.getElementById("btn-vaciar-matriz-B")
const btnSumarMatrices = document.getElementById("btn-sumar-matrices")
const btnRestarMatrices = document.getElementById("btn-restar-matrices")
const btnMultiplicarMatrices = document.getElementById("btn-multiplicar-matrices")

// referencia a la caja de texto: control textarea
const txtRespuesta = document.getElementById("id-txt-respuesta")

// agregamos referencia a los controles listas deplegables
const selectDimensionFilasMatrizA = document.getElementById("select-dimension-filas-matriz-A")
const selectDimensionFilasMatrizB = document.getElementById("select-dimension-filas-matriz-B")
const selectDimensionColumnasMatrizA = document.getElementById("select-dimension-columnas-matriz-A")
const selectDimensionColumnasMatrizB = document.getElementById("select-dimension-columnas-matriz-B")

// asigamos los valores por defecto que tienen las listas desplegables.
let FILASA = parseInt(selectDimensionFilasMatrizA.options[selectDimensionFilasMatrizA.selectedIndex].value)
let COLUMNASA = parseInt(selectDimensionColumnasMatrizA.options[selectDimensionColumnasMatrizA.selectedIndex].value)
let FILASB = parseInt(selectDimensionFilasMatrizB.options[selectDimensionFilasMatrizB.selectedIndex].value)
let COLUMNASB = parseInt(selectDimensionColumnasMatrizB.options[selectDimensionColumnasMatrizB.selectedIndex].value)

// capturamos los eventos de los controles lista desplegables: Select
selectDimensionFilasMatrizA.addEventListener('change', (event) => {
    FILASA = parseInt(selectDimensionFilasMatrizA.value)
})

selectDimensionColumnasMatrizA.addEventListener('change', (event) => {
    COLUMNASA = parseInt(selectDimensionColumnasMatrizA.value)
})

selectDimensionFilasMatrizB.addEventListener('change', (event) => {
    0
    FILASB = parseInt(selectDimensionFilasMatrizB.value)
})

selectDimensionColumnasMatrizB.addEventListener('change', (event) => {
    COLUMNASB = parseInt(selectDimensionColumnasMatrizB.value)
})

// evento del boton cargar matriz A
btnCargarMatrizA.addEventListener('click', (event) => {
    event.preventDefault()
    fnVaciarMatrizA()
    fnCargarMatrizA()
    fnPresentarMatrizA()
})

// Procedimiento cargar numeros aleatorios en Matriz A M x N
function fnCargarMatrizA() {
    for (let f = 0; f < FILASA; f++) {
        matrizA[f] = []
        for (let c = 0; c < COLUMNASA; c++) {
            const numero = Math.floor(Math.random() * (NUM_MAXIMO_RANDOM - NUM_MINIMO_RANDOM)) + NUM_MINIMO_RANDOM;
            matrizA[f][c] = numero
        }
    }
}

// evento del boton cargar matriz B
btnCargarMatrizB.addEventListener('click', (event) => {
    event.preventDefault()
    fnVaciarMatrizB()
    fnCargarMatrizB()
    fnPresentarMatrizB()
})

// Procedimiento cargar numeros aleatorios en Matriz B M x N
function fnCargarMatrizB() {
    for (let f = 0; f < FILASB; f++) {
        matrizB[f] = []
        for (let c = 0; c < COLUMNASB; c++) {
            const numero = Math.floor(Math.random() * (NUM_MAXIMO_RANDOM - NUM_MINIMO_RANDOM)) + NUM_MINIMO_RANDOM;
            matrizB[f][c] = numero
        }
    }
}

// evento del boton vaciar matriz A
btnVaciarMatrizA.addEventListener('click', (event) => {
    event.preventDefault()
    fnVaciarMatrizA()
    fnPresentarMatrizA()
})

//Procedimiento para vaciar matriz A
function fnVaciarMatrizA() {
    matrizA = []
    matrizResultado = []
}

// evento del boton vaciar matriz B
btnVaciarMatrizB.addEventListener('click', (event) => {
    event.preventDefault()
    fnVaciarMatrizB()
    fnPresentarMatrizB()
})

//Procedimiento para vaciar matriz B
function fnVaciarMatrizB() {
    matrizB = []
}

// procedimiento que genera cadena de etiquetas HTML(tr,td) para presentar en la pantalla GUI
function fnPresentarMatrizA() {
    let str = ''
    for (let v of matrizA) {
        str += '<tr>'
        str += v.map(e => `<td>${e}</td>`).join('')
        str += '</tr>'
    }
    tableTbodyA.innerHTML = str
}

function fnPresentarMatrizB() {
    let str = ''
    for (let v of matrizB) {
        str += '<tr>'
        str += v.map(e => `<td>${e}</td>`).join('')
        str += '</tr>'
    }
    tableTbodyB.innerHTML = str
}

function fnPresentarMatrizResultado() {
    let str = ''
    for (let v of matrizResultado) {
        str += '<tr>'
        str += v.map(e => `<td>${e}</td>`).join('')
        str += '</tr>'
    }
    tableTbodyResultado.innerHTML = str
}

// Sumar matrices
btnSumarMatrices.addEventListener('click', (event) => {
    event.preventDefault()
    fnSumarMatrices()
    fnPresentarMatrizResultado()
})
function fnSumarMatrices() {
    if (FILASA === FILASB && COLUMNASA === COLUMNASB) {
        for (let f = 0; f < FILASA; f++) {
            matrizResultado[f] = []
            for (let c = 0; c < COLUMNASA; c++) {
                matrizResultado[f][c] = matrizA[f][c] + matrizB[f][c]
            }
        }
    } else {
        return alert("LAS MATRICES DEBEN SER DE LA MISMA DIMENSIÓN PARA REALIZAR LA SUMA.")
    }
}

//Restar matrices
btnRestarMatrices.addEventListener('click', (event) => {
    event.preventDefault()
    fnRestarMatrices()
    fnPresentarMatrizResultado()
})
function fnRestarMatrices() {
    if (FILASA === FILASB && COLUMNASA === COLUMNASB) {
        for (let f = 0; f < FILASA; f++) {
            matrizResultado[f] = []
            for (let c = 0; c < COLUMNASA; c++) {
                matrizResultado[f][c] = matrizA[f][c] - matrizB[f][c]
            }
        }
    } else {
        return alert("LAS MATRICES DEBEN SER DE LA MISMA DIMENSIÓN PARA REALIZAR LA RESTA.")
    }
}

//Multiplicar matrices
btnMultiplicarMatrices.addEventListener('click', (event) => {
    event.preventDefault()
    fnMultiplicarMatrices()
    fnPresentarMatrizResultado()
})

function fnMultiplicarMatrices() {
    if (COLUMNASA === FILASB) {
        for (let f = 0; f < FILASA; f++) {
            matrizResultado[f] = []
            for (let C = 0; C < COLUMNASB; C++) {
                matrizResultado[f][C] = 0
            }
        }
        for (let f = 0; f < FILASA; f++) {
            for (let C = 0; C < COLUMNASB; C++) {
                for (let c = 0; c < COLUMNASA; c++) {
                    matrizResultado[f][C] += matrizA[f][c] * matrizB[c][C]
                }
            }
        }
    } else {
        return alert("LAS COLUMNAS DE LA MATRIZ A DEBEN SER IGUALES A LAS FILAS DE LA MATRIZ B.")
    }
}
