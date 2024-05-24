import { Link } from 'react-router-dom';

// ADD Props: imageUrl, name
function Agent({ id, name }) {
  const imgUrl = `https://media.valorant-api.com/agents/${id}/displayicon.png`;

  return (
    <>
      <Link className="agentContainer" to={`/agent/${id}`}>
        <div>
          <img src={imgUrl} alt={name} />
        </div>
        <div className="agentName">{name}</div>
      </Link>
    </>
  );
}

export default Agent;
