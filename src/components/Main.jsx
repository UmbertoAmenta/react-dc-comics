import comics from "../data/comics";

export default function Main() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <button type="button">current series</button>
        </div>
      </section>
      <section className="board">
        <div className="container flex">
          {comics.map((comic) => {
            return (
              <div key={comic.id} className="card">
                <div>
                  <img src={comic.thumb} alt={comic.series} />
                </div>
                <h4>{comic.title}</h4>
              </div>
            );
          })}
        </div>
        <button type="button">load more</button>
      </section>
    </main>
  );
}
