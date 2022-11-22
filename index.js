const botao = document.getElementById('botao');
const localJogadores = document.getElementById('localJogadores');

    let jogadores;

    async function consultaJogadores(){
        const resposta = await fetch('http://localhost:8080/jogadoresAPI');
        jogadores = await resposta.json();
    
        mostraJogadores(jogadores);
    }

    botao.addEventListener('click', () => {
        consultaJogadores();
    })
    
    function mostraJogadores(jogadores){
        const novoElemento = document.createElement('p');
        novoElemento.innerHTML += jogadores;

        localJogadores.appendChild(novoElemento)
    }
