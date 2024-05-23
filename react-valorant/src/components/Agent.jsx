// ADD Props: imageUrl, name
function Agent({id, name}) {
  const imgUrl = `https://media.valorant-api.com/agents/${id}/displayicon.png`;

  return (
    <>
      <div className="agentContainer">
        <div>
          <img
            src={imgUrl}
            alt={name}
          />
        </div>
        <div className="agentName">{name}</div>
      </div>
    </>
  );
}

export default Agent;
