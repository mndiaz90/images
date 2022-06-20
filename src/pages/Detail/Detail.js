import React from "react";
import { Helmet } from "react-helmet";
import { Redirect } from "wouter";
import ImageCard from "components/ImageCard/ImageCard";
import Spinner from "components/Spinner/Spinner";
import useSingleImage from "hooks/useSingleImage";

export default function Detail({ params }) {
  const { image, isLoading, isError } = useSingleImage({ id: params.id });
  const description = image ? image.description : "";

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <Spinner />
      </>
    );
  }

  if (isError) return <Redirect to="/404" />;
  if (!image) return null;

  return (
    <>
      <Helmet>
        <title>{description} || Images</title>
      </Helmet>
      <h3 className="app-title">{image.description}</h3>
      <ImageCard {...image} url={image.urls.regular} />
    </>
  );
}
