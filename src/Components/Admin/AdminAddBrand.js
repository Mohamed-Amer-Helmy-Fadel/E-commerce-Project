import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddBrandHook from "../../hooks/brand/admin-add-brand-hook";
const AdminAddCategory = () => {
 
    const [image,name,loading,isPressed,handleImage,handleName,handleSubmit] = AddBrandHook();
  return (
    <div>
      <Row className="justify-content-start ">
      <div className="admin-content-text pb-4">اضف ماركه جديده</div>
        <Col sm="8">
        <div className="text-form pb-2">صوره الماركه</div>
          <div>
            <label for="upload-photo">
              <img
                src={image}
                alt="fzx"
                height="100px"
                width="120px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              name="photo"
              onChange={handleImage}
              id="upload-photo"
            />
          </div>

          <input
            onChange={handleName}
            value={name}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم الماركه"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
        </Col>
      </Row>

      {isPressed ? (
        loading ? (
          <Spinner
            className="text-center"
            animation="border"
            variant="primary"
          />
        ) : null
      ) : null}
      <ToastContainer />
    </div>
  );
};

export default AdminAddCategory;
