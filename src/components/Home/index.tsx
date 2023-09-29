import compatibilidades from "../../data/compatibilidades.json";

const Home = () => {
  return (
    <div>
      <div>
        {compatibilidades?.processador.i3.map((compatibilidade, index) => (
          <option value="">{compatibilidade}</option>
        ))}
      </div>
    </div>
  );
};

export default Home;
