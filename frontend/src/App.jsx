import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/health`)
      .then(res => res.json())
      .then(data => setMsg(data.msg))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Backend Response:</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;