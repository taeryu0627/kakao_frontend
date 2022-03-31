import React, { useState, ChangeEvent } from "react";

const Test = () => {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);

  const FirstCount = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;
    if (inputValue.length != 0) {
      const inputNumber = Number.parseInt(inputValue);
      setFirstNum(inputNumber);
    } else setFirstNum(0);
  };

  const SecondCount = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;
    if (inputValue.length != 0) {
      const inputNumber = Number.parseInt(inputValue);
      setSecondNum(inputNumber);
    } else setSecondNum(0);
  };

  return (
    <>
      <section>
        <input type="text" onChange={FirstCount} />
      </section>
      <section>
        <input type="text" onChange={SecondCount} />
      </section>
      {firstNum + secondNum}
    </>
  );
};

export default Test;
