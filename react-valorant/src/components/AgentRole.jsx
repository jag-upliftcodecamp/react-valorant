function AgentRole({id, role, description}) {
  const url = `https://media.valorant-api.com/agents/roles/${id}/displayicon.png`
  
  return (
    <div className="agentRole">
      <img src={url} alt="Killjoy" />
      <div>
        <h1>Role: {role}</h1>
        <p>Description:{description}</p>
      </div>
    </div>
  );
}

export default AgentRole;
