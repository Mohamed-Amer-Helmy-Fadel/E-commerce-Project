import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddCategoryHooke from "../../hooks/category/admin-add-category-hook";
const AdminAddCategory = () => {
 
    const [image,name,loading,isPressed,handleImage,handleName,handleSubmit] = AddCategoryHooke();

//   const dispatch = useDispatch();
//   const [image, setImage] = React.useState(avatar);
//   const [name, setName] = React.useState("");
//   const [selectedFile, setSelectedFile] = React.useState(null);
//   const [loading, setLoading] = React.useState(true);
//   const [isPressed, setIsPressed] = React.useState(false);


//   const handleImage = (e) => {
//     if (e.target.files && e.target.files[0]){
//     setImage(URL.createObjectURL(e.target.files[0]))
//     setSelectedFile(e.target.files[0])
// }
//   };

//   const handleName = (e) => {
//     setName(e.target.value);
//     // console.log(name)
//   };

//   const res = useSelector((state) => state.allCategory.category);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//                                                 // const res = axios.post('http://localhost:5000/api/category', {name:"name", age: 20})
//                                                 // this is in case of posting ordinary data (text, number, etc)
//                                                 //in ordinary data dispatch(createCategory({name: "name", age: 20}))
//     if (!name || !selectedFile) return notify("الرجاء ادخال البيانات", "warn");
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("image", selectedFile);
//     setLoading(true);
//     setIsPressed(true);
//     await dispatch(createCategory(formData));
//     console.log(res.status);
//     setLoading(false);
//   };

//   useEffect(() => {
//     if (loading === false) {
//       setName("");
//       setImage(avatar);
//       setSelectedFile(null);
//       setLoading(true);
//         // setIsPressed(false);
//         if(res.status ===201)
//             {
//                  notify("تم اضافه التصنيف بنجاح", "success");
//             }
//            else
//            {
//                  notify("هناك مشكلة في عمليهة الاضافة", "error");
//              }
//     }
//     }, [loading]);



  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره التصنيف</div>
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
            placeholder="اسم التصنيف"
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
          <div className="text-center mt-3">
          <Spinner
            className="text-center"
            animation="border"
            variant="primary"
          />
        </div>
        ) : null
      ) : null}
      <ToastContainer />
    </div>
  );
};

export default AdminAddCategory;
