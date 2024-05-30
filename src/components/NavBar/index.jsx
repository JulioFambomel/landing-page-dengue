import "./styles.css";

export default function NavBar() {
  return (
    <>
      <header className={scroll > 50 ? "hidden" : "visible"}>
        <nav>
          <ul className="nav-list">
            {NAVBAR_LINK.map((item, key) => (
              <li key={key}>
                <a href={`/${item.path}`}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

export const NAVBAR_LINK = [
  {
    name: "Início",
    path: "#inicio",
    page: false,
  },
  {
    name: "Prevenção",
    path: "#prevencao",
    page: false,
  },
  {
    name: "Sintomas",
    path: "#sintomas",
    page: false,
  },
  {
    name: "Gráficos",
    path: "#graficos",
    page: false,
  },
  {
    name: "Vacinação",
    path: "#vacinacao",
    page: false,
  },
];
