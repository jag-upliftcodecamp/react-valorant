// PROPS: icon, name
function AgentAbility({id, name, slot}) {
  const url = `https://media.valorant-api.com/agents/${id}/abilities/${slot.toLowerCase()}/displayicon.png`


  return (
    <div className="agentAbility" title={name}>
      <img src={url} alt={name} />
    </div>
  );
}

export default AgentAbility;