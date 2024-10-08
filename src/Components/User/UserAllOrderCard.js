import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import mobile from '../../images/mobile.png'
import { API_BASE_URL } from '../../Api/baseURL'
const UserAllOrderCard = ({ item }) => {

    const getImageUrl = (imageCover) => {
        // Check if imageCover is already a full URL
        if (imageCover.startsWith("http")) {
            // console.log('imageCover', imageCover)
          return imageCover;
        }
        // If not, prepend the base URL
        return `${API_BASE_URL}/products/${imageCover}`;
      };

    return (
        <div>


            <Row className="d-flex mb-2">
                <Col xs="3" md="2" className="d-flex justify-content-start">
                    <Link to={`/products/${item.product._id}`} style={{ textDecoration: 'none' }}>
                        <img width="93px" height="120px" src={getImageUrl(item.product.imageCover)} alt="" />
                    </Link>
                </Col>
                <Col xs="8" md="6">
                    <div className="d-inline pt-2 cat-title">
                        {item.product.title || ''}
                    </div>
                    <div className="d-inline pt-2 cat-rate me-2">{item.product.ratingsAverage ?
                        item.product.ratingsAverage : 0}</div>
                    <div className="rate-count d-inline p-1 pt-2">({`${item.product.ratingsQuantity || 0} تقييم`})</div>
                    <div className="mt-3 d-flex">
                        <div className="cat-text mt-1  d-inline">الكميه</div>
                        <input
                            value={item.count}
                            className="mx-2 "
                            type="number"
                            style={{ width: "40px", height: "30px" }}
                        />
                        <div
                            className="color  d-inline"
                            style={{ backgroundColor: item.color }}></div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllOrderCard