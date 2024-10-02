import { Row, Col } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AdminAddSubCategoryHook from "../../hooks/subCategory/admin-add-subCategory-hook";


const AdminAddSubCategory = () => {
const [handleName, handleSelect, handleSubmit,id,name,category,subCategory]=AdminAddSubCategoryHook();
if (category) {
    // console.log(category);
  }


  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
        <Col sm="8">
          <input
            onChange={handleName}
            value={name}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف الفرعي"
          />

          <select
            name="category"
            id="cat"
            value={id}
            className="select mt-3 px-2 "
            onChange={handleSelect}
          >
            <option value="0"> اختر تصنيف رئيسي</option>{" "}
            {/*  by this method we can git option id  */}
            {/*  in value we store item id  */}
            {category &&category.data
              ? category.data.map((item) => {
                  return (
                    <option value={item._id} key={item._id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={handleSubmit}>
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminAddSubCategory;
