import React from 'react'
import { ListGroup } from 'react-bootstrap'
import CommentItem from './CommentItem'
import { useSelector } from 'react-redux';


const CommentList = () => {

    const addedpost = useSelector(state => state.post.post)
    const selectedpost = useSelector(state => state.post.keyword)
    console.log(addedpost);
    
    
  return (
    <div>
         <ListGroup variant="flush">
            {addedpost.filter(item=>item.writer.includes(selectedpost)).map((item, key) => <CommentItem key = {key} postlist={item}/>)}
         </ListGroup>
    </div>
  )
}

export default CommentList