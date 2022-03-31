import React from "react";

type TitleText = {
  title: string;
  subTitle?: string;
};

const Title = (text: TitleText) => {
  const { title, subTitle } = text;
  return (
    <h1>
      {title}
      <small>{subTitle}</small>
    </h1>
  );
};

export default Title;
