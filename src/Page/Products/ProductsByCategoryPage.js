import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import Pagination from '../../Components/Uitily/Pagination';
import ViewSearchProductsHook from '../../hooks/products/view-searchPage-products-hook';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import { useParams } from 'react-router-dom';
import ViewAllProductsCategoryHook from '../../hooks/products/view-all-products-category-hook';

const ProductsByCategory = () => {

    const { id } = useParams()


    const [items, pagination, onPress] = ViewAllProductsCategoryHook(id)
    // console.log("items", items)
    if (pagination)
        var pageCount = pagination
    else
        pageCount = 0

    return (
        <div style={{ minHeight: '670px' }}>

            <Container>
                <Row className='d-flex flex-row'>

                    <Col sm="12" >
                        <CardProductsContainer products={items} title="" btntitle="" />
                    </Col>
                </Row>

                <Pagination pageCount={pageCount} onPress={onPress} />
            </Container>
        </div>
    )
}

export default ProductsByCategory