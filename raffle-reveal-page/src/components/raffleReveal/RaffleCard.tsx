import '../../App.css'
import { useDrag } from 'react-dnd'

const RaffleCard = ({type, quantity}: RaffleCardProps): JSX.Element => {
  const [{isDragging}, drag] = useDrag(() => ({
      type: "raffleCard",
      item: {quantity: quantity},
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging()
      })
  }))
  return (
      <>
    <div className='raffleCardWrapper' ref={drag} style={{backgroundColor: isDragging ? "white": ''}}>
       <h1>{type}</h1>
       <h2>{quantity}</h2>
    </div>
    </>
  )
};
        
export default RaffleCard;

interface RaffleCardProps {
  type: string
  quantity: number
}