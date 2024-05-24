import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AgentsPage from './pages/AgentsPage';
import AgentPage from './pages/AgentPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AgentsPage />,
    }, // AgentsPage
    {
      path: '/agent/:agentUuid',
      element: <AgentPage />,
      loader: async ({ params }) => {
        const response = await fetch(
          `https://valorant-api.com/v1/agents/${params.agentUuid}`
        );
        const json = await response.json();

        // const name = json.data.displayName;
        // const description = json.data.description;
        // const abilities = json.data.abilities;
        // const role = json.data.role;

        const agentObject = {
          name: json.data.displayName,
          description: json.data.description,
          abilities: json.data.abilities,
          role: json.data.role,
          agentUuid: params.agentUuid,
        };

        return agentObject;
      },
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
