import Button from "./Button"
function Evento() {

    function meuEvento() {
        console.log('Ativando primeiro evento!')
    }

    function segundoEvento() {
        console.log('Ativando o segundo evento!')
    }

    return(
        <div>
            <p>CLique aqui para ativar um evento:</p>
            <Button event={meuEvento} text="primeiro Evento"/>
            <Button event={segundoEvento} text="segundo Evento"/>
            
           
        </div>
    )

}

export default Evento