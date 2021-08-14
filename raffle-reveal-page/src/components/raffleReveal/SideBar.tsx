import { Col, Container } from "react-bootstrap";
import '../../App.css'
import RaffleCard from "./RaffleCard";
import { obj } from '../../dummyData'

const SideBar = (): JSX.Element => {
  return (
      <>
    <Container  className="raffleWrapper">
    <Col>
        <div className='sideBarHeaderWrapper'> 
                <h1 className="getMoreTicker">Get More Tickets</h1>
                <button className='sideBarButton'>Buy</button>
        </div>
        {obj.map(card => {
        return (
          <RaffleCard type={card.type} quantity={card.quantity} key={`${card.type}`}/>
        )
      })}
      </Col>
    </Container>
    </>
  )
};

export default SideBar;
