import apple from "./img/apple.svg";
import game from "./img/gamepad.svg";
import nintendo from "./img/nintendo.svg";
import ps from "./img/playstation.svg";
import steam from "./img/steam.svg";
import xbox from "./img/xbox.svg";
import fullStar from "./img/star-full.png";
import emptyStar from "./img/star-empty.png";

// platform icon
export const platformIcon = (platform) => {
  switch (platform) {
    case "PC":
      return steam;
    case "PlayStation 5":
    case "PlayStation 4":
    case "PlayStation 3":
      return ps;
    case "Xbox One":
    case "Xbox Series S/X":
    case "Xbox 360":
    case "Xbox":
      return xbox;
    case "Nintendo Switch":
    case "Nintendo 3DS":
    case "Nintendo DS":
      return nintendo;
    case "macOS":
    case "iOS":
      return apple;
    default:
      return game;
  }
};

// get star rating
export const GetStarRating = (gameRating) => {
  const stars = [];
  const rating = Math.floor(gameRating);
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<img alt="star" key={i} src={fullStar} />);
    } else {
      stars.push(<img alt="star" key={i} src={emptyStar} />);
    }
  }
  return stars;
};

// small image
export const smallImage = (imagePath, size) => {
  let image;
  if (imagePath) {
    image = imagePath.match(/media\/screenshots/)
      ? imagePath.replace(
          "media/screenshots",
          `media/resize/${size}/-/screenshots`
        )
      : imagePath.replace("/media/games", `/media/resize/${size}/-/games`);
  } else {
    image = imagePath;
  }
  return image;
};
