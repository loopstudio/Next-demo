import { useState, useEffect } from "react";

//CLIENT SIDE RENDERING

const CSR = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("../api/name")
      .then((response) => response.json())
      .then((data) => setName(data.name));
  }, []);

  return <div>Hola {name} 😄 </div>;
};

export default CSR;
