import React, { useState } from 'react';
import {Button,IconBase} from "reactstrap";
import { BsFillHandThumbsUpFill } from "react-icons/bs"; // Falta el npm install react-icons --save
function LikeButton (){
    const [count, setCount] = useState(null);
    const [liked, setLiked] = useState(false);
    return (
        <Button
        className='m-1'
        color="primary"
        onClick={(ev) => {
          if (liked === true){
            setCount(count - 1);
            setLiked(liked = false);
          }
          setCount(count + 1);
          setLiked(liked = true);
        }}
      >
        
        { count } <BsFillHandThumbsUpFill/>
      </Button>
    );
}
export default LikeButton;
