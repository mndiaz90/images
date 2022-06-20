import React from "react";
import "./ImagesList.css";
import ImageCard from "components/ImageCard/ImageCard";

export default function ListOfImages({ images }) {
  return (
    <ul className="images-wrapper">
      {images.map(({ id, description, urls, userInfo }) => (
        <ImageCard
          id={id}
          key={id}
          description={description}
          url={urls.small}
          userInfo={userInfo}
        />
      ))}
    </ul>
  );
}
