// Card has a props named: imageUrl & title
function Card({imageURL, name, title}) {

  return (
    <div>
      <img src={imageURL} alt="onlyfans-rom" />
      {/*mark lang malakas */}
      <h1>{title}</h1>
    </div>
  );
}

export default Card;
