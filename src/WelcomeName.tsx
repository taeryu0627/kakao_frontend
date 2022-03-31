import React, { ChangeEvent, useState } from "react";

const WelcomeName = () => {
  const [name, setName] = useState<string>();

  const Welcome = (event: ChangeEvent<HTMLInputElement>) => {
    const inputName = event.currentTarget.value;
    setName(inputName);
  };
  return (
    <>
      <section>
        <input type="text" onChange={Welcome} />
      </section>
      <article>반갑습니다 {name}님</article>
    </>
  );
};
export default WelcomeName;
