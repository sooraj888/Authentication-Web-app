import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Status = () => {
  const localStorage: boolean | unknown = useLocation().state;
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage != null) {
      setIsUserLoggedIn(Boolean(localStorage));
    }
  }, []);
  return (
    <div>
      <div className="text-center m-5">
        {isUserLoggedIn ? (
          <div className="h1">User Logged in Successfully...</div>
        ) : (
          <div className="h1">User does not exist</div>
        )}
      </div>
    </div>
  );
};

export default Status;
