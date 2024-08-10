import { FaStar } from 'react-icons/fa'
import {useState} from 'react'

export default function StarRating({ noOfStars = 5 }) {

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex){
    console.log(getCurrentIndex)
    }

  function handleMouseEnter(){
    console.log(getCurrentIndex)
  }

  function handleMouseLeave(){
    console.log(getCurrentIndex)
  }

  return <div className="star-rating">{
    [...Array(noOfStars)].map((_,index)=> {
        index +=1;

        return <FaStar 
        key={index}
        onClick={()=> handleClick(index)}
        onMouseaMove={()=>handleMouseEnter(index)}
        onMouseLeave={()=> handleMouseLeave(index )}
        size={40}
        />
    })
  }</div>