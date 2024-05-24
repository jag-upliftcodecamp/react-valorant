function AgentPortrait({ id, name }) {
  const portraitURL = `https://media.valorant-api.com/agents/${id}/fullportrait.png`;

  return (
    <>
      <div className="agentPortrait">
        <img src={portraitURL} alt={name} />
      </div>
    </>
  );
}

export default AgentPortrait;
