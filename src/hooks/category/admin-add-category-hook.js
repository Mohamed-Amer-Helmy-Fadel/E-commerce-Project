import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import avatar from "../../images/avatar.png";
import { createCategory } from "../../reducx/actions/categoryAction";
import "react-toastify/dist/ReactToastify.css";
import notify from "../useNotifacation";

const AddCategoryHook = () => {
    const dispatch = useDispatch();
    const [image, setImage] = useState(avatar);
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const handleImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleName = (e) => {
        setName(e.target.value);
    };

    const res = useSelector((state) => state.allCategory.category);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !selectedFile) {
            notify("الرجاء ادخال البيانات", "warn");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("image", selectedFile);

        setLoading(true);
        setIsPressed(true);
        await dispatch(createCategory(formData));
        setLoading(false);
        // try {
        //     await dispatch(createCategory(formData));
        // } catch (error) {
        //     console.error("Error uploading image:", error);
        // }

        // setLoading(false);
        // setSelectedFile(null); // Reset selectedFile to null after submission
    };

    useEffect(() => {
        if (!loading && isPressed) {
            if (res && res.status === 201) {
                notify("تم اضافه التصنيف بنجاح", "success");
            } else {
                notify("هناك مشكلة في عمليهة الاضافة", "error");
            }

            console.log("Status Code:", res?.status);

            setName("");
            setImage(avatar);
            setSelectedFile(null);
            setIsPressed(false);
        }
    }, [loading]);

    return [image, name, loading, isPressed, handleImage, handleName, handleSubmit];
};

export default AddCategoryHook;






// import React, { useEffect,useState } from 'react'
// import { useDispatch, useSelector } from "react-redux";
// import avatar from "../../images/avatar.png";
// import { createCategory } from "../../reducx/actions/categoryAction";
// import "react-toastify/dist/ReactToastify.css";
// import notify from "../../hooks/useNotifacation"; 

// const AddCategoryHooke = () => {

//     const dispatch = useDispatch();
//     const [image, setImage] = React.useState(avatar);
//     const [name, setName] = React.useState("");
//     const [selectedFile, setSelectedFile] = React.useState(null);
//     const [loading, setLoading] = React.useState(true);
//     const [isPressed, setIsPressed] = React.useState(false);
  
  
//     const handleImage = (e) => {
//       if (e.target.files && e.target.files[0]){
//       setImage(URL.createObjectURL(e.target.files[0]))
//       setSelectedFile(e.target.files[0])
//   }
//     };
  
//     const handleName = (e) => {
//         e.persist();
//       setName(e.target.value);
//       // console.log(name)
//     };
  
//     const res = useSelector((state) => state.allCategory.category);

//     const handleSubmit = async (e) => {
//       e.preventDefault();
//                                                   // const res = axios.post('http://localhost:5000/api/category', {name:"name", age: 20})
//                                                   // this is in case of posting ordinary data (text, number, etc)
//                                                   //in ordinary data dispatch(createCategory({name: "name", age: 20}))
//       if (!name || !selectedFile) return notify("الرجاء ادخال البيانات", "warn");
//       const formData = new FormData();
//       formData.append("name", name);
//       formData.append("image", selectedFile);
//       setLoading(true);
//       setIsPressed(true);
//       await dispatch(createCategory(formData));
//       setLoading(false);
//     };
  
//     useEffect(() => {
//       if (loading === false) {
//         setName("");
//         setImage(avatar);
//         setSelectedFile(null);
//         setLoading(true);
//           // setIsPressed(false);
//           if(res && res.status ===201)
//               {
//                    notify("تم اضافه التصنيف بنجاح", "success");
//               }
//              else
//              {
//                    notify("هناك مشكلة في عمليهة الاضافة", "error");
//                }
//       }
//       }, [loading]);
//   return [image,name,selectedFile,loading,isPressed,handleImage,handleName,handleSubmit]
// }

// export default AddCategoryHooke
