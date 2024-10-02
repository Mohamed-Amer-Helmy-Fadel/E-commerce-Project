import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CategoryCard = ({ background, img, title , id}) => {
    return (
        <Col
            xs="6"
            sm="6"
            md="4"
            lg="2"
            className="my-4 d-flex justify-content-around ">
            <div className="allCard mb-3 ">
                <div
                    className="categoty-card "
                    style={{ backgroundColor: `${background}` }}></div>{" "}
                 <Link to={`/products/category/${id}`} style={{ textDecoration: 'none' }}>
                    <img alt="zcv" src={img} className="categoty-card-img" />
                    <p className="categoty-card-text my-2">{title}</p>
                </Link>
            </div>
        </Col>
    )
}

export default CategoryCard

    // return (
    //     <Col
    //         xs="6"
    //         sm="6"
    //         md="4"
    //         lg="2"
    //         className="my-4 d-flex justify-content-around ">
    //         <div className="allCard mb-3 ">
    //             <div
    //                 className="categoty-card "
    //                 style={{ backgroundColor: "#F4DBA4" }} >  </div> 
    //             <img alt="zcv" src="" className="categoty-card-img" />
    //             <p className="categoty-card-text my-2">name</p>
    //         </div>
    //     </Col>
    // )


// export default HomeCategory