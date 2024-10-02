import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SubTiltle from "../Uitily/SubTiltle";
import BrandCard from "./BrandCard";
import HomeBrandHook from "../../hooks/brand/home-brand-hook";

const BrandFeatured = ({ title, btntitle }) => {
  const [brand, loading] = HomeBrandHook();

  return (
    <Container>
      {brand && brand.data && brand.data.length > 0 ? (
        <>
          <SubTiltle title={title} btntitle={btntitle} pathText="/allbrand" />
          <Row className="my-1 d-flex justify-content-between">
            {/* <BrandCard img={brand1} /> */}
            {loading === false ? (
              brand.data ? (
                brand.data.slice(0, 6).map((item, index) => {
                  return <BrandCard id={item._id} key={index} img={item.image} />;
                })
              ) : (
                <h1>There is no brands</h1>
              )
            ) : (
              <div className="d-flex justify-content-center">
                <Spinner className="" animation="border" variant="primary" />
              </div>
            )}
          </Row>
        </>
      ) : null}
    </Container>
  );
};

export default BrandFeatured;
