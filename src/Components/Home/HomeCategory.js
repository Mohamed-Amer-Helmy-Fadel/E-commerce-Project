import React, { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SubTiltle from "../Uitily/SubTiltle";
import CategoryCard from "./../Category/CategoryCard";
import mobileIphone from "../../images/mobile iphone.png"
import HomeCategoryHook from "../../hooks/category/home-category-hook";


const HomeCategory = () => {
const [category, loading, colors] = HomeCategoryHook();
  return (
    <Container>
      <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
         category?.data?.length > 0 ? (
            category.data.slice(0, 6).map((item, index) => {
              return (
                <CategoryCard
                  key={index}
                  title={item.name}
                  img={item.image}
                  background={colors[index]}
                  id={item._id}
                />
              );
            })
          ) : (
            <h1 className="text-center">There is no categories</h1>
          )
        ) : (
          <div className="d-flex justify-content-center">
            <Spinner className="" animation="border" variant="primary" />
          </div>
        )}
      </Row>
    </Container>
  );




// return (
//   <Container>
//       <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
//       <Row className='my-2 d-flex justify-content-between'>
//           <CategoryCard title="اجهزة منزلية" img={mobileIphone} background="#F4DBA4" />
//           <CategoryCard title="اجهزة منزلية" img={mobileIphone} background="#F4DBA4" />
//           <CategoryCard title="اجهزة منزلية" img={mobileIphone} background="#0034FF" />
//           <CategoryCard title="اجهزة منزلية" img={mobileIphone} background="#F4DBA4" />
//           <CategoryCard title="اجهزة منزلية" img={mobileIphone} background="#FF6262" />
//           <CategoryCard title="اجهزة منزلية" img={mobileIphone} background="#F4DBA4" />
//       </Row>
//   </Container>
// )
};

export default HomeCategory;
