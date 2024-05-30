import "./styles.css";

export default function Graficos() {
  return (
    <section id="graficos" className="graficos-section">
      <div className="graficos-container">
        <h1>
          Gráfico comparativo anual de Casos e Mortes ocasionadas pela Dengue
        </h1>
        <div className="graficos-content-1">
          <img src="./img/grafico_dengue.png" alt="" />
          <div className="graficos-text">
            <h2>Dengue no Brasil em 2024: Alerta Máximo!</h2>
            <p>
              <strong>Casos:</strong> <br /> <br />
              Mais de 4,2 milhões de casos até o dia 27 de maio, recorde
              histórico! Aumento de 149% em relação ao pior ano (2016). Norte e
              Nordeste são as regiões mais afetadas. Crianças e adolescentes de
              10 a 14 anos são os mais atingidos. <br /> <br />
              <strong>Mortes: </strong> <br /> <br />
              2.827 mortes até o dia 27 de maio, maior número já registrado! São
              Paulo, Minas Gerais, Paraná, Rio de Janeiro e Goiás lideram em
              mortes. <br /> <br />
              <strong>Prevenção: </strong> <br /> <br />
              Elimine criadouros do mosquito Aedes aegypti. <br />
              Use repelente, mantenha a casa arejada e use telas. <br />
              Vacine-se contra a dengue (disponível para alguns estados). <br />{" "}
              <br />
              <strong>Conclusão:</strong> <br /> <br />
              Situação crítica! Ação conjunta de autoridades e população é
              crucial. <br /> <br />
              <strong>Observações:</strong> <br /> <br />
              Dados atualizados até 27/05/2024. <br />O número de casos e mortes
              pode aumentar.
            </p>
          </div>
        </div>
      </div>
      <div className="graficos-container">
        <h1>Casos por estado</h1>
        <div className="graficos-content-2">
          <img src="./img/grafico_mapa.png" alt="" />
          <div className="graficos-text">
            {" "}
            <h2>Dengue no Brasil em 2024: Fuja do Aedes!</h2>
            <p>
              <strong>O mapa revela:</strong> <br /> <br />
              Dengue em alta no Centro-Oeste, Sudeste, Norte e Nordeste! Piauí e
              Paraíba resistem melhor. <br /> <br />
              <strong>Proteja-se:</strong> <br /> <br />
              Elimine criadouros: Acabe com os ovos do mosquito! Repelente, tela
              e ventilação: Sua casa é seu escudo! Vacina: Proteja-se em alguns
              estados!** <br /> <br />
              Lembre-se: Juntos contra o Aedes! <br /> <br />
              Dicas extras: <br /> <br />
              Lave caixas d'água e mantenha-as tampadas. <br />
              Use roupas compridas e calças ao sair de casa. <br />
              Fique atento em locais com água parada. <br />
              Participe de ações de combate à dengue em sua comunidade. <br />
              Compartilhe essa mensagem e ajude a salvar vidas!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
