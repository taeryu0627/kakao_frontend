import React from "react";

type PadName = {
  keyName: string;
  callback: (name: string) => void;
};

const Pad = (props: PadName) => {
  const { keyName, callback } = props;
  return <button onClick={() => callback(keyName)}>{keyName}</button>;
};

export default Pad;
