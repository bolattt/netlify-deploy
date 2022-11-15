import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Main() {
  const [apis, setApis] = useState([]);
  useEffect(() => {
    fetch("https://api.publicapis.org/entries")
      .then((res) => res.json())
      .then((data) => setApis(data.entries));
  }, []);
  return (
    <div>
      <Link to="/drinks">Drinks </Link>
      {apis
        .filter((api) => api.Auth === "apiKey")
        .map((api, i) => (
          <p key={i}>
            <a href={api.Link}>{api.API}</a>
          </p>
        ))}
    </div>
  );
}
