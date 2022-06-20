import React from "react";
import SearchForm from "components/SearchForm/SearchForm";
import { Helmet } from "react-helmet";
import image404 from "assets/images/404.jpg";
import { Link } from "wouter";

const pageErrorStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  textAlign: "center",
};

const msgErrorStyles = {
  fontSize: "1.5 rem",
  margin: "1rem auto",
};

const SIZE = "350px";

const imageErrorStyles = {
  margin: "1rem auto",
  width: SIZE,
  height: SIZE,
  objectFit: "cover",
};

export default function ErrorPage() {
  return (
    <>
      <Helmet>
        <title>Error 404 | Images</title>
      </Helmet>
      <header className="app-header">
        <SearchForm />
      </header>
      <div style={pageErrorStyles}>
        <span style={msgErrorStyles}>
          Sometimes gettings lost isn't that bad
        </span>
        <img src={image404} alt="alt-page-404" style={imageErrorStyles} />
        <Link href="/">Go back home</Link>
      </div>
    </>
  );
}
