const mensaje = document.querySelector('.mensaje');
const puntuacion = document.querySelector('.puntuacion');
const botones = document.querySelectorAll('button');
const puntuacionGanador = [0,0];

    //recorre cada boton y le agrega un addEventListener
    for ( let i = 0 ; i < botones.lenth ; i++){
        botones[i].addEventListener('click', jugar);
    }

    function jugar(e){
        //setup player selection 
        let seleccionJugador = e.target.innerText;
        let seleccionComputadora = Math.random();

        if(seleccionComputadora < .34){
            seleccionComputadora = 'Piedra';
            console.log =piedra;
        } else if (seleccionComputadora <= .67){
            seleccionComputadora='Papel';
        }else{
            seleccionComputadora='Tijeras ';
        }

        let resultado = checkWinner(seleccionJugador, seleccionComputadora );
        
        if( resultado === 'Jugador'){
            resultado += 'gana!';
            puntuacionGanador[0]++;
        }

        if( resultado === 'Computadora'){
            resultado += 'gana!';
            puntuacionGanador[1]++;
        }

        if( resultado === 'Empate'){
            resultado += '.it s a tie!'
        }
        
        puntuacion.innerHTML ='Jugador: [' + puntuacionGanador[0]+ ']<br><br> Computadora: [ ' + puntuacionGanador[1] + ']';

        messenger('Jugador:' + seleccionJugador +'Computadora: <strong>' + seleccionComputadora + '</strong><br>'+ result);
    }

    function messenger(selectionMessage){
        message.innerHTML = selectionMessage;
    }

    function ckeckWinner(player, computer) {
        if (player === computer) {
            return 'Empate';   
        }
        
        if (player === 'Piedra') {
            if (computer === 'Papel') {
                return 'Computadora';
            }else {
                return 'Jugador';
            }              
        }

        if (player === 'Papel') {
            if (computer === 'Tijeras') {
                return 'Computadora';
            }else {
                return 'Jugador';
            }              
        }

        if (player === 'Tijeras') {
            if (computer === 'Piedra') {
                return 'Computadora';
            }else {
                return 'Jugador';
            }              
        }
    }