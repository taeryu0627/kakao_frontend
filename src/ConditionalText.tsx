import React, { ChangeEvent, useState } from "react";

const ConditionalText = () => {
  const [name, setName] = useState("");

  const CheckText = (event: ChangeEvent<HTMLInputElement>) => {
    const inputName = event.currentTarget.value;
    if (inputName.length > 5) {
      setName(inputName);
    } else {
      setName(" ");
    }
  };

  return (
    <>
      <section>
        <input type="text" onChange={CheckText} />
      </section>
      <article>{name.length > 5 && name}</article>
    </>
  );
};

export default ConditionalText;
