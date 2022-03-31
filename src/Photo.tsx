import React from "react";

type PhotoType = {
  address: string;
  description: string;
};

const Photo = (photo: PhotoType) => {
  const { address, description } = photo;
  return (
    <>
      <section>
        <img src={address} />
      </section>
      <article>
        <code>{description}</code>
      </article>
    </>
  );
};

export default Photo;
