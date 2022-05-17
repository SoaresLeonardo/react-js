
function Pessoa({nome, idade, profissao, foto}) {

    return(
        <div>
            <img src={foto} alt="nome da pessoa"/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>

        </div>

    )

}

export default Pessoa