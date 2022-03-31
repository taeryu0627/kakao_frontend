import React, { useState, ChangeEvent } from "react";

const Adder = () => {
  const [firstAdder, setFirstAdder] = useState(0);
  const [secondAdder, setSecondAdder] = useState(0);

  const firstCount = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;
    if (inputValue.length > 0) {
      const inputNumber = Number.parseInt(inputValue);
      setFirstAdder(inputNumber);
    } else {
      setFirstAdder(0);
    }
  };

  const SecondCount = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;
    if (inputValue.length > 0) {
      const inputNumber = Number.parseInt(inputValue);
      setSecondAdder(inputNumber);
    } else {
      setSecondAdder(0);
    }
  };

  return (
    <>
      <section>
        <input type="text" onChange={firstCount} />
      </section>
      <section>
        <input type="text" onChange={SecondCount} />
      </section>
      {firstAdder + secondAdder}
    </>
  );
};
export default Adder;
