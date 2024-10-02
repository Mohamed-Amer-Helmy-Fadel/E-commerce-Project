//which contain all the categories which i will send it to category page
import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "./../Category/CategoryCard";

const CategoryContainer = ({data,loading } )=>{
  const colors = [
    "#ff7e00",
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ff00ff",
    "#00ffff",
    "#00ffff",
  ];

  return (
    <Container>
      <div className="admin-content-text mt-2 ">كل التصنيفات</div>
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          data ? (
            data.map((item, index) => {
                const colorsIndex = index % colors.length;
              return (
                <CategoryCard
                  key={index}
                  title={item.name}
                  img={item.image}
                  background={colors[colorsIndex]}
                  id={item._id}
                />
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

export default CategoryContainer;
