let pontos = 0

const resultado = (event) => {
    const identf = event.target.id
    let index = document.querySelector('.question').dataset.index


    if (identf == 'op2' && index == '1') {
        let index = document.querySelector('.question').dataset.index = '2'
        question2()
        pontos++
    } else if (identf != 'op2' && index == '1') {
        let index = document.querySelector('.question').dataset.index = '2'
        question2()
    } else if (identf == 'op1' && index == '2') {
        let index = document.querySelector('.question').dataset.index = '3'
        question3()
        pontos++
    } else if (identf != 'op1' && index == '2') {
        let index = document.querySelector('.question').dataset.index = '3'
        question3()
    } else if (identf == 'op3' && index == '3') {
        let index = document.querySelector('.question').dataset.index = '4'
        question4()
        pontos++
    } else if (identf != 'op3' && index == '3') {
        let index = document.querySelector('.question').dataset.index = '4'
        question4()
    } else if (identf == 'op2' && index == '4') {
        let index = document.querySelector('.question').dataset.index = '5'
        question5()
        pontos++
    } else if (identf != 'op2' && index == '4') {
        let index = document.querySelector('.question').dataset.index = '5'
        question5()
    } else if (identf == 'op1' && index == '5') {
        pontos++
        final()
    } else if (identf != 'op1' && index == '5') {
        final()
    }

}


const question2 = () => {
    const question = document.querySelector('.question p')
    question.innerHTML = `Qual nome do meu cachorro?`

    const op1 = document.getElementById('op1')
        .innerHTML = 'Simmon'

    const op2 = document.getElementById('op2')
        .innerHTML = 'Alvin'

    const op3 = document.getElementById('op3')
        .innerHTML = 'Cachorrao'

    const op4 = document.getElementById('op4')
        .innerHTML = 'Chicoitica'
}

const question3 = () => {
    const question = document.querySelector('.question p')
    question.innerHTML = `Qual nome da minha namorada?`

    const op1 = document.getElementById('op1')
        .innerHTML = 'Joaquina'

    const op2 = document.getElementById('op2')
        .innerHTML = 'Serafina'

    const op3 = document.getElementById('op3')
        .innerHTML = 'Lorena'

    const op4 = document.getElementById('op4')
        .innerHTML = 'Antonia da goiaba'
}

const question4 = () => {
    const question = document.querySelector('.question p')
    question.innerHTML = `Qual minha cor favorita?`

    const op1 = document.getElementById('op1')
        .innerHTML = 'Branco'

    const op2 = document.getElementById('op2')
        .innerHTML = 'Preto'

    const op3 = document.getElementById('op3')
        .innerHTML = 'Cinza'

    const op4 = document.getElementById('op4')
        .innerHTML = 'Nenhuma das opções'
}

const question5 = () => {
    const question = document.querySelector('.question p')
    question.innerHTML = `Qual meu instrumento favorito?`

    const op1 = document.getElementById('op1')
        .innerHTML = 'Guitarra'

    const op2 = document.getElementById('op2')
        .innerHTML = 'Violão'

    const op3 = document.getElementById('op3')
        .innerHTML = 'Piano'

    const op4 = document.getElementById('op4')
        .innerHTML = 'Bateria'
}

const final = () => {
    const question = document.querySelector('.question p')
        question.innerHTML = `Parabéns você tirou ${pontos}/5`

        const op1 = document.getElementById('op1')
        .style.display = 'none'

        const op2 = document.getElementById('op2')
        .style.display = 'none'

        const op3 = document.getElementById('op3')
        .style.display = 'none'

        const op4 = document.getElementById('op4')
        .style.display = 'none'
}


document.querySelector('.answer')
    .addEventListener('click', resultado)
