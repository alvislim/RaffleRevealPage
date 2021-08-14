
import { Container } from "react-bootstrap";
import '../../App.css'
import DragToContainer from "./DragToContainer";


const CollectorDashboard = (): JSX.Element => {
  return (
      <>
    <Container className="dashboardWrapper">
        <div className="dashboardHeaderWrapper">
            <h1 className='collectorsEvent'>Collectors Event</h1>
            <p className='dashboardP'>Participate and win high quality currated NFTs</p>
        </div>
    </Container>
    <DragToContainer />
    </>
  )
};

export default CollectorDashboard;