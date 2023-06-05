import React from "react";
import React, { useState } from "react";
import { PacmanLoader } from "react-spinners";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="spinner-container">
          <PacmanLoader color="#000000" size={25} />
          <p>Loading...</p>
        </div>
      ) : (
        <div>{}</div>
      )}
    </div>
  );
};

export default Loading;
