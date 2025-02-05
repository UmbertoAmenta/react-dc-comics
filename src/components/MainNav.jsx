export default function MainNav() {
  return (
    <nav id="mainNav" className="flex">
      <ul className="flex container">
        <li className="flex">
          <div>
            <img src="/img/buy-comics-digital-comics.png" alt="#" />
          </div>
          <a href="#">digital comics</a>
        </li>
        <li className="flex">
          <div>
            <img src="/img/buy-comics-merchandise.png" alt="#" />
          </div>
          <a href="#">dc merchandise</a>
        </li>
        <li className="flex">
          <div>
            <img src="/img/buy-comics-subscriptions.png" alt="#" />
          </div>
          <a href="#">subscriptions</a>
        </li>
        <li className="flex">
          <div>
            <img src="/img/buy-comics-shop-locator.png" alt="#" />
          </div>
          <a href="#">comic shop locator</a>
        </li>
        <li className="flex">
          <div>
            <img src="/img/buy-dc-power-visa.svg" alt="#" />
          </div>
          <a href="#">dc power visa</a>
        </li>
      </ul>
    </nav>
  );
}
