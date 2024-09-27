import React, { useRef } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { postActions } from '../redux/reducer/postSlice';

const SearchBox = () => {

    const searchWriter = useRef()

    const dispatch = useDispatch()

    // [Old Redux]
    // const handleSearch = () => {
    //     dispatch({
    //         type : "searchKeyword",
    //         payload : searchWriter.current.value
    //     })
    // }

    const handleSearch = () => {
        dispatch(postActions.searchKeyword(searchWriter.current.value))
    }

    const onCheckEnter = (e) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    return (

        <div>
            <Row className="g-2">
                <Col md>
                    <Form.Control type="text" placeholder="작성자 검색" ref={searchWriter} onKeyDown={onCheckEnter} />
                </Col>
                <Col md>
                    <Button variant="primary" onClick={handleSearch}>Search</Button>
                </Col>
            </Row>
        </div>

    )
}

export default SearchBox