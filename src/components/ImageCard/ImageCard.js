import React from "react";
import { Link } from "wouter";
import "./ImageCard.css";

export default function ImageCard({ description, id, url, userInfo }) {
  return (
    <li className="card">
      <Link to={`/image/${id}`}>
        <img className="card__img" loading="lazy" alt={description} src={url} />
      </Link>
      <div className="card-description">
        <h4 className="card__h4">
          Photo by{" "}
          <a
            className="card__a"
            href={userInfo.portfolio_url}
            target="_blank"
            rel="noreferrer"
          >
            {userInfo.first_name} {userInfo.last_name}{" "}
          </a>
          on{" "}
          <a
            className="card__a"
            href="https://unsplash.com"
            target="_blank"
            rel="noreferrer"
          >
            Unsplash
          </a>
        </h4>
      </div>
    </li>
  );
}
