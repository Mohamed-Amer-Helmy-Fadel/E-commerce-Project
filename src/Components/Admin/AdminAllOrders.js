import React from "react";
import { Row } from "react-bootstrap";
import AdminAllOrdersItem from "./AdminAllOrdersItem";
import UserGetAllOrderHook from "./../../hooks/user/user-get-all-order-hook";
import Pagination from "../Uitily/Pagination";

const AdminAllOrders = () => {
  const [userName, results, paginate, orderData, onPress] =
    UserGetAllOrderHook();

  return (
    <div>
      <div className="admin-content-text">ادارة جميع الطلبات</div>
      <Row className="justify-content-start">
        {orderData?.length >= 1 ? (
          orderData.map((orderItem, index) => {
            return <AdminAllOrdersItem key={index} orderItem={orderItem} />;
          })
        ) : (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "40vh" }} // Use a larger value if needed to ensure enough vertical space
          >
            <h2 className="font text-center">لا يوجد طلبات حتى الان</h2>
          </div>
        )}

        {paginate.numberOfPages >= 2 ? (
          <Pagination
            onPress={onPress}
            pageCount={paginate.numberOfPages ? paginate.numberOfPages : 0}
          />
        ) : null}
      </Row>
    </div>
  );
};

export default AdminAllOrders;
