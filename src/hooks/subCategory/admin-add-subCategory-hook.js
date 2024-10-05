import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../reducx/actions/categoryAction";
import notify from "../../hooks/useNotifacation";
import { createSubCategory } from "../../reducx/actions/subCategoryAction";

const AdminAddSubCategoryHook = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [id, setId] = useState("0");
  const [loading, setLoading] = useState(true);
  //   const [isPressed, setIsPressed] = useState(false);
  const category = useSelector((state) => state.allCategory.category);
  if (category) {
    // console.log(category);
  }

  const subCategory = useSelector((state) => state.subCategory.subcategory);

  useEffect(() => {
    if (!navigator.onLine) {
        notify("لا يوجد اتصال بالانترنت", "error");
        return;
      }
    dispatch(getAllCategory());
  }, []);

  const handleSelect = (e) => {
    setId(e.target.value);
    // console.log(id);
  };

  const handleName = (e) => {
    setName(e.target.value);
    // console.log(name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


  
      if (id === "0") {
        notify("يجب اختيار تصنيف رئيسي", "warn");
        return;
      }
  
      if (name === "") {
        notify("يجب ادخال اسم التصنيف الفرعي", "warn");
        return;
      }
            
    setLoading(true);
    await dispatch(createSubCategory({ name, category: id }));
    // setIsPressed(true);
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setName("");
      setId("0");
      if (subCategory && subCategory.status === 201) {
        notify("تم اضافه التصنيف الفرعي بنجاح", "success");
        // console.log(subCategory);
      } else if (subCategory && subCategory === "400") {
        notify("التصنيف الفرعي موجود بالفعل", "error");
      } else {
        notify("التصنيف الفرعي موجود بالفعل", "error");
        // console.log(subCategory.status);
        dispatch(getAllCategory());
      }
      setLoading(true);
    }
  }, [loading]);

  return [
    handleName,
    handleSelect,
    handleSubmit,
    id,
    name,
    category,
    subCategory,
  ];
};

export default AdminAddSubCategoryHook;
