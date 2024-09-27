import React, { useRef } from 'react'
import { Row, Col, FloatingLabel, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { postActions } from '../redux/reducer/postSlice';


const CommentForm = () => {

    const post = useRef()
    const writer = useRef()

    const dispatch = useDispatch()

    // [Old Redux]
    // const handlePost = () => {
    //   dispatch({
    //     type : "addPost",
    //     payload : {post : post.current.value, writer : writer.current.value}
    //   })

    //   post.current.value = ""
    //   writer.current.value = ""

    //   post.current.focus()
    // }

    const handlePost = () => {
        dispatch(postActions.addPost({
            post : post.current.value,
            writer : writer.current.value
        }))
        post.current.value = ""
        writer.current.value = ""
        post.current.focus()
    }

    const onCheckEnter = (e) => {
        if(e.key === 'Enter') {
            handlePost()
        }
    }

    return (
        <>
            <Row className="g-2">
                <Col xs={12} md={8}>
                    <FloatingLabel controlId="floatingInputGrid" label="내용">
                        <Form.Control type="text" placeholder="Comment" ref={post} />
                    </FloatingLabel>
                </Col>
                <Col xs={6} md={4}>
                    <FloatingLabel controlId="floatingInputGrid" label="작성자">
                        <Form.Control type="text" placeholder="김광주" ref={writer} onKeyDown={onCheckEnter}/>
                    </FloatingLabel>
                </Col>

            </Row>
            <div className="d-grid gap-2">
                <Button variant="primary" onClick={handlePost}>
                    Post
                </Button>
            </div>
        </>
    )
}

export default CommentForm