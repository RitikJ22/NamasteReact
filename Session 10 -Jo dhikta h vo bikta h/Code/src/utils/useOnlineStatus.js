import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus("false");
    });
    window.addEventListener("online", () => {
      setOnlineStatus("true");
      console.log("You are now connected to the network.");
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
