import React from "react";
import BrandCard from "./BrandCard";
import { Container, Row, Spinner } from "react-bootstrap";
const BrandContainer = ({ data, loading }) => {
  return (
    <Container>
      <div className="admin-content-text mt-2 ">كل الماركات</div>
      <Row className="my-1 d-flex justify-content-between">
        {loading === false ? (
          data ? (
            data.map((item, index) => {
              return (
                <BrandCard id={item._id} key={index} title={item.name} img={item.image} />
              );
            })
          ) : (
            <h1>There is no categories</h1>
          )
        ) : (
          <div className="d-flex justify-content-center">
            <Spinner className="" animation="border" variant="primary" />
          </div>
        )}
      </Row>
    </Container>
  );
};

export default BrandContainer;
