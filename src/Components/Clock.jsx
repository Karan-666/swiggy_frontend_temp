import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    let idd = setInterval(() => {
    setTime(new Date().toLocaleTimeString())
    }, 1000);

    // cleanup function
    return ()=> clearInterval(idd);
  }, [time]);

  return (
    <div>
      <h1>Time: {time}</h1>
    </div>
  );
}

export default Clock;
