/*
atomic number = number of protons
atomic mass   = number of protons + electrons

{name, symbol, electrons, electronStructure, atomicNumber, atomicMass, group, period, classification, block}

*/

// DATA
const data = [
    [
        {name: 'Hydrogen', symbol: 'H'},
        null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null,
        {name: 'Helium', symbol: 'He'}
    ],
    [
        {name: 'Lithium', symbol: 'Li'},
        {name: 'Beryllium', symbol: 'Be'},
        null, null, null, null, null,
        null, null, null, null, null,
        {name: 'Boron', symbol: 'B'},
        {name: 'Carbon', symbol: 'C'},
        {name: 'Nitrogen', symbol: 'N'},
        {name: 'Oxygen', symbol: 'O'},
        {name: 'Fluorine', symbol: 'F'},
        {name: 'Neon', symbol: 'Ne'}
    ],
    [
        {name: 'Sodium', symbol: 'Na'},
        {name: 'Magnesium', symbol: 'Mg'},
        null, null, null, null, null,
        null, null, null, null, null,
        {name: 'Aluminium', symbol: 'Al'},
        {name: 'Silicon', symbol: 'Si'},
        {name: 'Phosphorus', symbol: 'Ph'},
        {name: 'Sulfur', symbol: 'S'},
        {name: 'Chlorine', symbol: 'Cl'},
        {name: 'Argon', symbol: 'Ar'}
    ],
    [
        {name: 'Potassium', symbol: 'K'},
        {name: 'Calcium', symbol: 'Ca'},
        {name: 'Scandium', symbol: 'Sc'},
        {name: 'Titanium', symbol: 'Ti'},
        {name: 'Vanadium', symbol: 'V'},
        {name: 'Chromium', symbol: 'Cr'},
        {name: 'Manganese', symbol: 'Mn'},
        {name: 'Iron', symbol: 'Fe'},
        {name: 'Cobalt', symbol: 'Co'},
        {name: 'Nickle', symbol: 'Ni'},
        {name: 'Copper', symbol: 'Cu'},
        {name: 'Zinc', symbol: 'Zn'},
        {name: 'Gallium', symbol: 'Ga'},
        {name: 'Germanium', symbol: 'Ge'},
        {name: 'Arsenic', symbol: 'As'},
        {name: 'Selenium', symbol: 'Se'},
        {name: 'Bromine', symbol: 'Br'},
        {name: 'Krypton', symbol: 'Kr'}
    ],
    [
        {name: 'Rubidium', symbol: 'Rb'},
        {name: 'Strontium', symbol: 'Sr'},
        {name: 'Yttrium', symbol: 'Y'},
        {name: 'Zirconium', symbol: 'Zr'},
        {name: 'Niobium', symbol: 'Nb'},
        {name: 'Molybdenum', symbol: 'Mo'},
        {name: 'Technetium', symbol: 'Tc'},
        {name: 'Ruthenium', symbol: 'Ru'},
        {name: 'Rhodium', symbol: 'Rh'},
        {name: 'Palladium', symbol: 'Pd'},
        {name: 'Silver', symbol: 'Ag'},
        {name: 'Cadmium', symbol: 'Cd'},
        {name: 'Indium', symbol: 'In'},
        {name: 'Tin', symbol: 'Sn'},
        {name: 'Antimony', symbol: 'Sb'},
        {name: 'Tellurium', symbol: 'Te'},
        {name: 'Iodine', symbol: 'I'},
        {name: 'Xenon', symbol: 'Xe'}
    ],
    [
        {name: 'Caesium', symbol: 'Cs'},
        {name: 'Barium', symbol: 'Ba'},
        {name: 'Lanthanum', symbol: 'La'},
        {name: 'Hafnium', symbol: 'Hf'},
        {name: 'Tantalum', symbol: 'Ta'},
        {name: 'Tungsten', symbol: 'W'},
        {name: 'Rhenium', symbol: 'Re'},
        {name: 'Osmium', symbol: 'Os'},
        {name: 'Iridium', symbol: 'Ir'},
        {name: 'Platinum', symbol: 'Pt'},
        {name: 'Gold', symbol: 'Au'},
        {name: 'Mercury', symbol: 'Hg'},
        {name: 'Thallium', symbol: 'Tl'},
        {name: 'Lead', symbol: 'Pb'},
        {name: 'Bismuth', symbol: 'Bi'},
        {name: 'Polonium', symbol: 'Po'},
        {name: 'Astatine', symbol: 'At'},
        {name: 'Radon', symbol: 'Rn'}
    ],
    [
        {name: 'Francium', symbol: 'Fr'},
        {name: 'Radium', symbol: 'Ra'},
        {name: 'Actinium', symbol: 'Ac'},
        {name: 'Rutherfordium', symbol: 'Rf'},
        {name: 'Dubnium', symbol: 'Db'},
        {name: 'Seaborgium', symbol: 'Sg'},
        {name: 'Bohrium', symbol: 'Bh'},
        {name: 'Hassium', symbol: 'Hs'},
        {name: 'Meitnerium', symbol: 'Mt'},
        {name: 'Darmstadtium', symbol: 'Ds'},
        {name: 'Roentgenium', symbol: 'Rg'},
        {name: 'Copernicium', symbol: 'Cn'},
        {name: 'Nihonium', symbol: 'Nh'},
        {name: 'Flerovium', symbol: 'Fl'},
        {name: 'Moscovium', symbol: 'Mc'},
        {name: 'Livermorium', symbol: 'Lv'},
        {name: 'Tennessine', symbol: 'Ts'},
        {name: 'Oganesson', symbol: 'Og'}
    ],
    [
        null, null, null, null, null, null,
        null, null, null, null, null, null,
        null, null, null, null, null, null
    ],
    [
        null, null, null,
        {name: 'Cerium', symbol: 'Ce'},
        {name: 'Praseodymium', symbol: 'Pr'},
        {name: 'Neodymium', symbol: 'Nd'},
        {name: 'Promethium', symbol: 'Pm'},
        {name: 'Samarium', symbol: 'Sm'},
        {name: 'Europium', symbol: 'Eu'},
        {name: 'Gadolinium', symbol: 'Gd'},
        {name: 'Terbium', symbol: 'Tb'},
        {name: 'Dysprosium', symbol: 'Dy'},
        {name: 'Holmium', symbol: 'Ho'},
        {name: 'Erbium', symbol: 'Er'},
        {name: 'Thulium', symbol: 'Tm'},
        {name: 'Ytterbium', symbol: 'Yb'},
        {name: 'Lutetium', symbol: 'Lu'},
        null
    ],
    [
        null, null, null,
        {name: 'Thorium', symbol: 'Th'},
        {name: 'Protactinium', symbol: 'Pa'},
        {name: 'Uranium', symbol: 'U'},
        {name: 'Neptunium', symbol: 'Np'},
        {name: 'Plutonium', symbol: 'Pu'},
        {name: 'Americium', symbol: 'Am'},
        {name: 'Curium', symbol: 'Cm'},
        {name: 'Berkelium', symbol: 'Bk'},
        {name: 'Californium', symbol: 'Cf'},
        {name: 'Einsteinium', symbol: 'Es'},
        {name: 'Fermium', symbol: 'Fm'},
        {name: 'Mendelevium', symbol: 'Md'},
        {name: 'Nobelium', symbol: 'No'},
        {name: 'Lawrencium', symbol: 'Lr'},
        null
    ]
]

// UTIL
const shuffle = (arr) => arr.map(e => ({e, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(({e}) => e)

// RESET
const resetElementCellHandlers = () => {
    const elementCells = document.getElementsByClassName('element-cell')
    for (let elementCell of elementCells) {
        elementCell.onclick = () => {
        }
        elementCell.oncontextmenu = () => {
        }
    }
}

const resetAlteredElements = () => alteredElements.forEach(e => {
    if (e.tagName === 'P') {
        e.style.visibility = 'hidden'
        alteredElements.delete(e)
    } else if (e.classList.contains('element-cell')) {
        e.style.backgroundColor = 'grey'
        alteredElements.delete(e)
    }
})


const resetAll = (menuDiv) => {
    while (menuDiv.firstChild) menuDiv.firstChild.remove()
    resetElementCellHandlers()
    resetAlteredElements()
}

// INTERACTIVE
const createInteractiveMenu = () => {
    const resetButton = document.createElement('button')
    resetButton.id = 'hide-element-data-button'
    resetButton.textContent = 'reset'
    resetButton.onclick = () => alteredElements.forEach(e => {
        if (e.tagName === 'P') e.style.visibility = 'hidden'
    })
    return [resetButton]
}

const setInteractiveElementCellHandlers = () => {
    const elementCells = document.getElementsByClassName('element-cell')
    for (let elementCell of elementCells) {
        elementCell.onclick = () => togglePVisibility(elementCell.getElementsByClassName('symbol')[0])
        elementCell.oncontextmenu = (event) => {
            event.preventDefault()
            togglePVisibility(elementCell.getElementsByClassName('name')[0])
        }
    }
}

const togglePVisibility = (p) => {
    if (p.style.visibility === 'hidden') {
        p.style.visibility = 'visible'
        alteredElements.add(p)
    } else {
        p.style.visibility = 'hidden'
        alteredElements.delete(p)
    }
}

// SPACIAL RECALL
// TODO: spacial recall for: all, given group, given classification, given period (sub options in the select tag)
const createSpacialRecallMenu = () => {
    const resetButton = document.createElement('button')
    resetButton.id = 'reset-periodic-table-button'
    resetButton.textContent = 'reset'
    resetButton.onclick = () => {
        resetAlteredElements()
        playSpacialRecall()
    }

    const answerInput = document.createElement('input')
    answerInput.type = 'text'
    answerInput.placeholder = 'Element name and symbol'
    answerInput.onkeydown = (event) => {
        if (event.key === 'Enter') {
            const answer = answerInput.value
            answerInput.value = ''

            const guess = answer.toLowerCase().split(' ')
            let name
            let symbol
            if (guess.length === 2) {
                name = guess[0]
                symbol = guess[1]
            } else {
                name = ''
                symbol = ''
            }

            if (name === remainingElements[0].name.toLowerCase() && symbol === remainingElements[0].symbol.toLowerCase()) {
                const currentElementNameP = document.getElementById(remainingElements[0].name)
                const currentElementSymbolP = document.getElementById(remainingElements[0].symbol)
                const currentElementCellDiv = currentElementNameP.parentElement
                currentElementNameP.style.visibility = 'visible'
                alteredElements.add(currentElementNameP)
                currentElementSymbolP.style.visibility = 'visible'
                alteredElements.add(currentElementSymbolP)
                currentElementCellDiv.style.backgroundColor = 'green'
                remainingElements = remainingElements.slice(1, remainingElements.length - 1)
                playSpacialRecall(remainingElements)
            } else {
                const currentElementCellDiv = document.getElementById(remainingElements[0].name).parentElement
                currentElementCellDiv.style.backgroundColor = 'red'
                alteredElements.add(currentElementCellDiv)
                incorrectElements.push(remainingElements[0])
                remainingElements = remainingElements.slice(1, remainingElements.length - 1)
                playSpacialRecall(remainingElements)
            }
        }
    }

    return [resetButton, answerInput]
}

// TODO: error when gotten through approx half of the elements

let remainingElements = []
let incorrectElements = []
// TODO: when elements.length === 0 check if there are any incorrect answers if so set them to remaining elements and set to []
const playSpacialRecall = (elements = shuffle(data.flat().filter(e => e !== null))) => {
    remainingElements = elements
    const currentElement = document.getElementById(remainingElements[0].name).parentElement
    currentElement.style.backgroundColor = 'blue'
    alteredElements.add(currentElement)
    console.log(remainingElements[0])
}

// RENDERING
const createPeriodicTable = () => {
    const periodicTableDiv = document.getElementById('periodic-table')
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 18; j++) {
            const cellDiv = document.createElement('div')
            cellDiv.classList.add('cell')
            if (data[i][j]) {
                cellDiv.id = `(${j}, ${i})`
                cellDiv.classList.add('element-cell')
                const symbolP = createP(data[i][j].symbol, 'symbol')
                const nameP = createP(data[i][j].name, 'name')
                cellDiv.appendChild(symbolP)
                cellDiv.appendChild(nameP)
            }
            periodicTableDiv.appendChild(cellDiv)
        }
    }
}

const createP = (data, className) => {
    const p = document.createElement('p')
    p.id = data
    p.className = className
    p.textContent = data
    p.style.visibility = 'hidden'
    return p
}

const alteredElements = new Set()

// MENU
const createdMenus = new Map()

const modeSelect = document.getElementById('modes')
modeSelect.onchange = () => {
    const menuDiv = document.getElementById('menu')
    resetAll(menuDiv)
    switch (modeSelect.value) {
        case 'interactive':
            if (createdMenus.has('interactive')) {
                createdMenus.get('interactive').forEach(c => menuDiv.appendChild(c))
            } else {
                const menuChildren = createInteractiveMenu()
                createdMenus.set('interactive', menuChildren)
                menuChildren.forEach(c => menuDiv.appendChild(c))
            }
            setInteractiveElementCellHandlers()
            break
        case 'spacial recall':
            if (createdMenus.has('spacial recall')) {
                createdMenus.get('spacial recall').forEach(c => menuDiv.appendChild(c))
            } else {
                const menuChildren = createSpacialRecallMenu()
                createdMenus.set('spacial recall', menuChildren)
                menuChildren.forEach(c => menuDiv.appendChild(c))
            }
            resetElementCellHandlers()
            playSpacialRecall()
            break
        default:
            modeSelect.value = ''
    }
}

// ENTRY POINT
createPeriodicTable()



