import "./styles.css";

export default function Vacinacao() {
  return (
    <section className="vacinacao-section" id="vacinacao">
      <div className="vacinacao-container">
        <h1>Vacinações</h1>
        <img className="vacinacao-banner" src="./img/vacinacao.png" alt="" />
        <p>
          {" "}
          As vacinas serão destinadas a regiões de saúde com municípios de
          grande porte com alta transmissão nos últimos dez anos e população
          residente igual ou maior a 100 mil habitantes, levando também em conta
          altas taxas nos últimos meses.
        </p>
        <div className="vacinacao-fonts">
          <h2>Mais informações:</h2>
          <a href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dengue">
            <img src="./img/saude.png" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}
