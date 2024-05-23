import { Link } from 'react-router-dom';

function  ProjectsPage() {
    return ( 
        <>
        <p>How to Boil Water
        Put some water in a pan or pot. Don't fill it to the top, or the water will splash out of the pan when it boils!
        Place the pan on your stovetop and turn the burner to the highest setting. ...
        Let the water come to a full rolling boil (when the bubbles are rapidly breaking the surface).</p>
        
        <Link to="/ProjectsPage">Pindot here</Link>
        </>
     );
}

export default ProjectsPage;
