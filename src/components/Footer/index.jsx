import './styles.css';

export default function Footer () {
    return (
        <>
        <footer className="rodape">
       <div className='rodape-container' >
        <ul className="rodape-navegacao">
            <li className="rodape-link"><a href="/#inicio">Início</a></li>
            <li className="rodape-link"><a href="/#prevencao">Prevenção</a></li>
            <li className="rodape-link"><a href="/#sintomas">Sintomas</a></li>
            <li className="rodape-link"><a href="/#graficos">Gráficos</a></li>
            <li className="rodape-link"><a href="/#vacinacao">Vacinação</a></li>
        </ul>
        <p className="copy">Copyright Julio Fambomel - Todos os direitos reservados.</p>
       </div>
    </footer>
        </>
    );
};

