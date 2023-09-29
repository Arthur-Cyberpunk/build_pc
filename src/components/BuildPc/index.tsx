import compatibilidades from "../../data/compatibilidades.json";

const Build = () => {
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

export default Build;
