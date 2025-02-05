import headerLinks from "../data/headerLinks";

export default function Header() {
  return (
    <header>
      <div className="flex container">
        <img src="/img/dc-logo.png" alt="Logo DC Comics" />
        <nav>
          <ul className="flex">
            {headerLinks.map((link) => {
              return (
                <li key={link.id} className={link.current ? "selected" : ""}>
                  <a href={link.url}>{link.text}</a>
                  <div></div>
                </li>
              );
            })}
            {/* <li>
              <a href="#">characters</a>
              <div></div>
            </li>
            <li className="selected">
              <a href="#">comics</a>
              <div></div>
            </li>
            <li>
              <a href="#">movies</a>
              <div></div>
            </li>
            <li>
              <a href="#">tv</a>
              <div></div>
            </li>
            <li>
              <a href="#">games</a>
              <div></div>
            </li>
            <li>
              <a href="#">collectibles</a>
              <div></div>
            </li>
            <li>
              <a href="#">videos</a>
              <div></div>
            </li>
            <li>
              <a href="#">fans</a>
              <div></div>
            </li>
            <li>
              <a href="#">news</a>
              <div></div>
            </li>
            <li>
              <a href="#">shop</a>
              <div></div>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
