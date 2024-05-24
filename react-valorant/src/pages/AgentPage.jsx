import { useLoaderData, useParams } from 'react-router-dom';
import AgentDescription from '../components/AgentDescription';
import AgentPortrait from '../components/AgentPortrait';
import AgentHeader from '../components/AgentHeader';
import AgentAbility from '../components/AgentAbility';
import AgentRole from '../components/AgentRole';
import { useEffect, useState } from 'react';
import BackToHome from '../components/BackToHome';

function AgentPage() {
  // // STATES: name, description, abilities, role
  // const [name, setName] = useState('');
  // const [description, setDescription] = useState('');
  // const [abilities, setAbilities] = useState([]);
  // const [role, setRole] = useState({});

  // const { agentUuid } = useParams();

  // // 1️⃣
  // // CREATE fetchAgentData function
  // // GET response
  // // SET all states from the response
  // const fetchAgentData = async () => {
  //   const response = await fetch(
  //     `https://valorant-api.com/v1/agents/${agentUuid}`
  //   );
  //   const json = await response.json();

  //   // console.log('json:', json);
  //   setName(json.data.displayName);
  //   setDescription(json.data.description);
  //   setAbilities(json.data.abilities);
  //   setRole(json.data.role);
  // };

  // // 2️⃣
  // // USE useEffect to call fetchAgentData
  // useEffect(() => {
  //   fetchAgentData();
  // }, []);

  const { name, description, abilities, role, agentUuid } = useLoaderData();

  return (
    <>
      <BackToHome />
      <AgentHeader name={name} />
      <hr />
      <div className="agentPageDescription">
        <div>
          <AgentPortrait id={agentUuid} name={name} />
        </div>
        <div>
          <AgentDescription description={description} />

          <AgentRole
            id={role.uuid}
            role={role.displayName}
            description={role.description}
          />

          <div className="abilities">
            {abilities.map((ability, index) => (
              <AgentAbility
                key={index}
                id={agentUuid}
                slot={ability.slot}
                name={ability.displayName}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AgentPage;
