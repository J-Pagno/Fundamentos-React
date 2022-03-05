import React, { useState } from "react";

export default (props) => {
  const qtdNumbers = Array(props.qtdNumbers || 6);
  const [drawnNumbers, setDrawnNumbers] = useState(qtdNumbers);

  function megaSenaNumberGenerate(quantityNumbers = 6) {
    var numbers = [];
    numbers = Array(quantityNumbers);

    for (var i = 0; i < quantityNumbers; i++) {
      let exists = false;
      do {
        let generatedNumber = parseInt(Math.random() * (60 - 1) + 1);
        if (numbers.includes(generatedNumber)) {
          continue;
        } else {
          numbers.push(generatedNumber);
          exists = true;
        }
      } while (!exists);
    }
    
    setDrawnNumbers(numbers);
  }

  return (
    <div>
      <div>{drawnNumbers.join(" - ")}</div>
      <button onClick={(_) => megaSenaNumberGenerate(props.qtdNumbers)}>Gerar números</button>
    </div>
  );
};
