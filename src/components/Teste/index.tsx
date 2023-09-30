import { useState } from "react";

const options: any = {
  selected_placa_mae: {
    razor: {
      processadores_disponiveis: ["i3", "i5"],
      memoria_ram: ["8GB", "16GB", "32GB"],
      hd_ssd_minimo: ["256 SSD", "1TB HDD", "512GB SSD"],
      placa_video: ["NVIDIA GTX 1660", "AMD Radeon RX 580", "NVIDIA RTX 3070"],
    },
    amd: {
      processadores_disponiveis: ["i7", "i9"],
      memoria_ram: ["8GB", "16GB", "32GB"],
      hd_ssd_minimo: ["256 SSD", "1TB HDD", "512GB SSD"],
      placa_video: ["AMD Radeon RX 580", "NVIDIA RTX 3070"],
    },
    intel: {
      processadores_disponiveis: ["i3", "i5", "i7", "i9"],
      memoria_ram: ["16GB", "32GB"],
      hd_ssd_minimo: ["256 SSD", "1TB HDD", "512GB SSD"],
      placa_video: ["AMD Radeon RX 580", "NVIDIA RTX 3070"],
    },
  },
  processador: {
    i9: {
      hd_ssd_minimo: ["1TB HDD", "512GB SSD"],
    },
  },
  placa_mae: ["razor", "amd", "intel"],
};

function App() {
  const [selectedOptions, setSelectedOptions] = useState<any>({
    placa_mae: "",
    processador: "",
    memoria_ram: "",
    hd_ssd_minimo: "",
    placa_video: "",
  });
  const [currentStep, setCurrentStep] = useState("placa_mae");

  const handleSelectionChange = (e: any) => {
    const { name, value } = e.target;
    setSelectedOptions({ ...selectedOptions, [name]: value });
    setCurrentStep(name);
  };

  const getOptions = (step: any) => {
    return options[step][selectedOptions["selected_placa_mae"]][
      selectedOptions[step]
    ];
  };

  return (
    <div>
      <h1>Montagem de Computador</h1>
      {Object.keys(selectedOptions).map((step) => (
        <div key={step}>
          <label htmlFor={step}>{step}:</label>
          <select
            id={step}
            name={step}
            value={selectedOptions[step]}
            onChange={handleSelectionChange}
          >
            <option value="">Selecione...</option>
            {getOptions(step)?.map((option: any) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
      <button onClick={() => setCurrentStep("placa_mae")}>
        Resetar Seleções
      </button>
      <button
        onClick={() => {
          const steps = Object.keys(selectedOptions);
          const currentIndex = steps.indexOf(currentStep);
          const nextStep = steps[currentIndex + 1];
          setCurrentStep(nextStep || steps[0]);
        }}
        disabled={!getOptions(currentStep)?.length}
      >
        Avançar
      </button>
    </div>
  );
}

export default App;
