import React, { useState } from 'react';
import {Button} from "reactstrap";
import { BsFillHandThumbsUpFill } from "react-icons/bs"; // Falta el npm install react-icons --save

function LikeButton (){
    const [count, setCount] = useState(0);
    const [liked, setLiked] = useState(false);
    return (
        <Button
        icon={ BsFillHandThumbsUpFill }
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
        { count } Me gusta
      </Button>
    );
}
export default LikeButton;
