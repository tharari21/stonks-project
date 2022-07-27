import TypeWriter from "../components/TypeWriter";
import ArticleCards from '../components/ArticleCards';
const Home = () => {
    return (
      <div>
        <section className="hero">
          <TypeWriter text="STONKS IS A REAL TIME STONK APP!" />
        </section>
        <section>
          <ArticleCards  />
        </section>
      </div>
    );
}
export default Home;