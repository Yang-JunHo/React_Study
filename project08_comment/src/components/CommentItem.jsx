import React from 'react'
import { ListGroup } from 'react-bootstrap'

const CommentItem = ({postlist}) => {

    return (
        <div>
            <ListGroup.Item>
                <b>{postlist.post}</b>
                {"  "}|{"  "}
                <span>작성자 : {postlist.writer}</span>
            </ListGroup.Item>
        </div>
    )
}

export default CommentItem