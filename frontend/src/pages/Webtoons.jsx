import { useEffect, useState } from "react";
import { getWebtoons } from "../api/api";

const Webtoons = () => {
  const [webtoons, setWebtoons] = useState([]);

  useEffect(() => {
    const fetchWebtoons = async () => {
      const data = await getWebtoons();
      setWebtoons(data);
    };
    fetchWebtoons();
  }, []);

  return (
    <div>
      <h2>Webtoons</h2>
      <ul>
        {webtoons.map((webtoon) => (
          <li key={webtoon._id}>
            <h3>{webtoon.title}</h3>
            <p>{webtoon.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Webtoons;
