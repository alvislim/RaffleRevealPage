
import { Container } from "react-bootstrap";
import '../../App.css'
import SideBar from "./SideBar";
import CollectorDashboard from "./CollectorsDashboard";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'

const Main = (): JSX.Element => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Container>
        <SideBar />
        <CollectorDashboard />
      </Container>
    </DndProvider>
  )
};

export default Main;


  
