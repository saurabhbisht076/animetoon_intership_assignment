import { useState, useContext } from "react";
import { addWebtoon } from "../api/api";
import { AuthContext } from "../context/AuthContext";

const AddWebtoon = () => {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("You must be logged in to add a webtoon.");
      return;
    }

    const newWebtoon = { title, summary };
    await addWebtoon(newWebtoon, localStorage.getItem("token"));
    alert("Webtoon added!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Summary" onChange={(e) => setSummary(e.target.value)} />
      <button type="submit">Add Webtoon</button>
    </form>
  );
};

export default AddWebtoon;
