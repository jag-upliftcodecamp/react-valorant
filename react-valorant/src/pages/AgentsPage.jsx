import Agent from '../components/Agent';
import AgentsHeader from '../components/AgentsHeader';
import { useState, useEffect } from 'react';

function AgentsPage() {
  // 1️⃣ CREATE state for agents with default [] (empty array)
  const [agentImage, setAgentImage] = useState([]);

  // 2️⃣ CREATE function fetchAgents
  //    REQUEST from the API to get the list of all agents
  //    SET agents state variable from response
  const fetchAgents = async () => {
    const response = await fetch(
      'https://valorant-api.com/v1/agents?isPlayableCharacter=true'
    );
    const json = await response.json();

    setAgentImage(json.data);
  };

  // 3️⃣ USE useEffect to call fetchAgents, call it only once
  useEffect(() => {
    fetchAgents();
  }, []);

  return (
    <>
      <AgentsHeader />
      <div className="agents">
        {agentImage.map((item, index) => (
          <Agent id={item.uuid} name={item.displayName} key={index} />
        ))}
      </div>
    </>
  );
}

export default AgentsPage;
