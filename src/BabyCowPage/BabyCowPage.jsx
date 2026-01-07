import "./BabyCowPage.css";
import { useState } from "react";
//import useSound from "use-sound";

function BabyCowPage() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [likes, setLikes] = useState([]);

  const toggleLike = (item) => {
    if (likes.includes(item)) {
      setLikes(likes.filter((like) => like !== item));
    } else {
      setLikes([...likes, item]);
    }
  };

  async function generateImage() {
    setLoading(true);
    const response = await fetch("http://localhost:8787/image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt:

          "2D flat deformed derpy anime pink cute baby cow creepy with evil eyes and bloody knife and wearing" +
          likes.join(", "),
      }),
    });
    const data = await response.json();
    const allButtons = document.querySelectorAll("Button");
    setImage(data.image);
    setLoading(false);
    setLikes([]);

    allButtons.forEach((button) => {
      button.addEventListener('click', function() {
        this.classList.toggle('clicked');
      });
    });
  }

  return (
    <div id="BabyCowPage">

      <h1> Lonely? Tell us what you like and we'll find a friend just for you!</h1>

      <div id="PreferenceButtons">
        <button className="Button" onClick={() => setLikes([...likes, "Strawberry"])}>
          <img src="./assets/strawberry.png" alt="Strawberry" width="100" height="100"/>
          Strawberry
        </button>
        <button className="Button" onClick={() => setLikes([...likes, "Spaghetti"])}>
          <img src="./assets/spaghetti.png" alt="Spaghetti" width="100" height="100"/>

          Spaghetti
        </button>
        <button className="Button" onClick={() => setLikes([...likes, "Steak"])}>
          Steak
        </button>
        <button className="Button" onClick={() => setLikes([...likes, "Boba Tea"])}>
          Boba
        </button>

        <button className="Button" onClick={() => setLikes([...likes, "Pizza"])}>
          Pizza
        </button>
        <button className="Button" onClick={() => setLikes([...likes, "With 9 tiny baby cows"])}>
          Baby Cows
        </button>
      </div>

      <button id="GenerateCow" onClick={generateImage} disabled={loading}>
        {loading ? "Your friend is coming..." : "Meet your new friend :3"}
      </button>


      <img id="Cow" src={loading? "./assets/loading.gif" : (image ? image : "./assets/cow.png")} alt="Baby Cow" />

      <button onClick={() => window.location.reload()} id="HomeButton">
        this.classList.add('clicked');
        Bye bye
      </button>
    </div>
  );
}

export default BabyCowPage;
