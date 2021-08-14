
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useDrop } from 'react-dnd'
import '../../App.css'


const DragToContainer = (): JSX.Element => {

const [quantity, setQuantity] = useState<any>()
const[{isOver}, drop] = useDrop(() => ({
    accept: "raffleCard",
    drop: (card: {quantity: number}) =>  deductQuantity(card.quantity),
    collect: (monitor) => ({
        isOver: !!monitor.isOver()
      })
}))

const deductQuantity = (quantity: number) => {
    let quanatityToSet = quantity > 0 && quantity - 1
    alert(quanatityToSet)
    return setQuantity(quanatityToSet)
}

  return (
    <Container className="DragToContainer" ref={drop}>
    </Container>
  )
};

export default DragToContainer;