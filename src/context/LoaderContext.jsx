import { createContext, useContext, useEffect, useState } from "react";
import Loader from "../components/Loader";

export const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const handleLoad = () => setShowLoader(false);

    if (document.readyState === "complete") {
      setShowLoader(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <LoaderContext.Provider value={{ showLoader, setShowLoader }}>
      {showLoader && <Loader />}
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
