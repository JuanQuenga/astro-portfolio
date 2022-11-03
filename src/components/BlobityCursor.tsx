import Blobity from "blobity";
import { useEffect } from "react";

const BlobityCursor = () => {
  console.log("- BlobityCursor - ");
  useEffect(() => {
    console.log("- useEffect - ");

    if (typeof window !== "undefined") {
      console.log("window loading...");
      const blobity = new Blobity({ licenseKey: null });
      blobity?.reset();
    }
  }, []);

  return <div>Blobity</div>;
};

export default BlobityCursor;
