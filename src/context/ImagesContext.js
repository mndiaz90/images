import React, { useState } from "react";

const ImageContext = React.createContext({});

export function ImagesContextProvider({ children }) {
  const [images, setImages] = useState([]);

  return (
    <ImageContext.Provider value={{ images, setImages }}>
      {children}
    </ImageContext.Provider>
  );
}

export default ImageContext;
