export default function Banner({ image, texte, page }) {
  let nameClass = "";
  if (page === "Home") {
    nameClass = "Home";
  } else {
    nameClass = "About";
  }

  const componentStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: `center`,
  }

  return (
    <div
      className="banner-component"
      style={componentStyle}
    >
      <div className={`banner-component__${nameClass}`}/>
      <p className="banner-component__Text">{texte}</p>
    </div>
  );
}
