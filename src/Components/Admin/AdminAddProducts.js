import React from 'react'
import { Row, Col, Toast } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import add from '../../images/add.png'
import MultiImageInput from 'react-multiple-image-input';
import { CompactPicker } from 'react-color';

import { ToastContainer } from 'react-toastify';
import AdminAddProductsHook from '../../hooks/products/admin-add-products-hook';
const AdminAddProducts = () => {
 const [onSelectCategory, onSelectBrand, onSelect, onRemove, handelChangeCompleteForColor, removeColor, handleSubmit, category, brand, priceAftr, images, setImages, options, showColor, colors, priceBefore, qty, prodDescription, prodName,setProdName,setProdDescription,setPriceBefore,setPriceAftr,setQty,setCatID,setBrandID,setShowColor] = AdminAddProductsHook();



    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
                <Col sm="8">
                    <div className="text-form pb-2"> صور للمنتج</div>
                       
                         <MultiImageInput
                         images={images}
                        setImages={setImages}
                         theme={"light"}
                         allowCrop={false}
                         max={4}
                     />


                    <input
                       value={prodName}
                       onChange={(e) => setProdName(e.target.value)}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم المنتج"
                    />

                    <textarea
                        value={prodDescription}
                        onChange={(e) => setProdDescription(e.target.value)}
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="وصف المنتج"
                    />


                    <input
                        value={priceBefore}
                        onChange={(e) => setPriceBefore(e.target.value)}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="السعر قبل الخصم"
                    />
                    <input
                        value={priceAftr}
                        onChange={(e) => setPriceAftr(e.target.value)}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="السعر بعد الخصم"
                    />


                    <input
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="الكمية المتاحة"
                    />


                    <select
                        onChange={onSelectCategory}
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-3 px-2 ">
                        <option value="0">التصنيف الرئيسي</option>
                        {
                            category.data ? (category.data.map((item, index) => {
                                return (
                                    <option key={index} value={item._id}>{item.name}</option>
                                )
                            })) : null

                        }

                    </select>

                    <Multiselect
                        className="mt-2 text-end"
                        placeholder="التصنيف الفرعي"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />

                    <select
                        onChange={onSelectBrand}
                        name="brand"
                        id="brand"
                        className="select input-form-area mt-3 px-2 ">
                        <option value={"0"}>اختر ماركة</option>
                        {
                            brand.data ? (brand.data.map((item, index) => {
                                return (
                                    <option key={index} value={item._id}>{item.name}</option>
                                )
                            }

                            )) : null
                        }
                    </select>


                    <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
                    <div className="mt-1 d-flex">
                        {
                            colors.length >= 1 ? (
                                colors.map((color, index) => {
                                    return (
                                        <div key={index}
                                            onClick={() => removeColor(color)}
                                            className="color ms-2 border  mt-1"
                                            style={{ backgroundColor: color }}></div>
                                    )
                                })
                            ) : null
                        }
                        <img onClick={()=>setShowColor(!showColor)} src={add} alt="" width="30px" height="35px" style={{ cursor: 'pointer' }} />
                        {
                            showColor === true ? <CompactPicker onChangeComplete={handelChangeCompleteForColor} /> : null
                        }

                    </div>

                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
            <ToastContainer />
        </div>
    )
}

export default AdminAddProducts



// // install  
// //
// //
// //
// //
// //
// //
// //
// //


// import React, { useState, useEffect } from 'react'
// import { Row, Col } from 'react-bootstrap'
// import Multiselect from 'multiselect-react-dropdown';
// import add from '../../images/add.png'
// import MultiImageInput from 'react-multiple-image-input';


// import "react-toastify/dist/ReactToastify.css";
// import notify from "../../hooks/useNotifacation";

// import { useSelector, useDispatch } from 'react-redux'
// import { getAllCategory } from '../../reducx/actions/categoryAction'
// import { getOneCategory} from '../../reducx/actions/subCategoryAction'

// import { getAllBrand } from '../../reducx/actions/brandAction';
// import { createProduct } from '../../reducx/actions/productsAction';
// import { CompactPicker } from 'react-color'
// import { ToastContainer } from 'react-toastify';
// import AdminAddProductsHook from '../../hooks/products/admin-add-products-hook';


// const AdminAddProducts = () => {

//     // const [onChangeDesName, onChangeQty, onChangeColor, onChangePriceAfter, onChangePriceBefor, onChangeProdName, showColor, category, brand, priceAftr, images, setImages, onSelect, onRemove, options, handelChangeComplete, removeColor, onSeletCategory, handelSubmit, onSeletBrand, colors, priceBefore, qty, prodDescription, prodName] =
//     //     AdminAddProductsHook();
        
    




//     const dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(getAllCategory());
//         dispatch(getAllBrand());
//         dispatch(getOneCategory(0))
//     }, [])
//     //get last catgeory state from redux
//     const category = useSelector(state => state.allCategory.category)
//     //get last brand state from redux
//     const brand = useSelector(state => state.allBrand.brand)

//     //get last sub cat state from redux
//     const subCat = useSelector(state => state.subCategory.subcategory)

//     const onSelect = (selectedList) => {
//         setSeletedSubID(selectedList)
//     }
//     const onRemove = (selectedList) => {
//         setSeletedSubID(selectedList)
//     }

//     const [options, setOptions] = useState([]);

//     //values images products
//     const [images, setImages] = useState({});
//     //values state
//     const [prodName, setProdName] = useState('');
//     const [prodDescription, setProdDescription] = useState('');
//     const [priceBefore, setPriceBefore] = useState('السعر قبل الخصم');
//     const [priceAftr, setPriceAftr] = useState('السعر بعد الخصم');
//     const [qty, setQty] = useState('الكمية المتاحة');
//     const [CatID, setCatID] = useState('');
//     const [BrandID, setBrandID] = useState('');
//     const [subCatID, setSubCatID] = useState([]);
//     const [seletedSubID, setSeletedSubID] = useState([]);
//     const [loading, setLoading] = useState(true);


//     //to change name state
//     const onChangeProdName = (event) => {
        
//         setProdName(event.target.value)
//     }
//     //to change name state
//     const onChangeDesName = (event) => {
        
//         setProdDescription(event.target.value)
//     }
//     //to change name state
//     const onChangePriceBefor = (event) => {
        
//         setPriceBefore(event.target.value)
//     }
//     //to change name state
//     const onChangePriceAfter = (event) => {
        
//         setPriceAftr(event.target.value)
//     }  //to change name state
//     const onChangeQty = (event) => {
        
//         setQty(event.target.value)
//     }
//     const onChangeColor = (event) => {
        
//         setShowColor(!showColor)
//     }

//     //to show hide color picker
//     const [showColor, setShowColor] = useState(false);
//     //to store all pick color
//     const [colors, setColors] = useState([]);
//     //when choose new color
//     const handelChangeComplete = (color) => {
//         setColors([...colors, color.hex])
//         setShowColor(!showColor)
//     }
//     const removeColor = (color) => {
//         const newColor = colors.filter((e) => e !== color)
//         setColors(newColor)
//     }



//     //when selet category store id
//     const onSeletCategory = async (e) => {
//         if (e.target.value !== 0) {
//             await dispatch(getOneCategory(e.target.value))
//         }
//         setCatID(e.target.value)
//     }
//     useEffect(() => {
//         if (CatID !== 0) {
//             if (subCat.data) {

//                 setOptions(subCat.data)
//             }
//         }
//     }, [CatID])

//     //when selet brand store id
//     const onSeletBrand = (e) => {
//         setBrandID(e.target.value)
//     }

//     //to convert base 64 to file
//     function dataURLtoFile(dataurl, filename) {

//         var arr = dataurl.split(','),
//             mime = arr[0].match(/:(.*?);/)[1],
//             bstr = atob(arr[1]),
//             n = bstr.length,
//             u8arr = new Uint8Array(n);

//         while (n--) {
//             u8arr[n] = bstr.charCodeAt(n);
//         }

//         return new File([u8arr], filename, { type: mime });
//     }

//     //to save data 
//     const handelSubmit = async (e) => {
//         e.preventDefault();
//         if (CatID === 0 || prodName === "" || prodDescription === "" || images.length <= 0 || priceBefore <= 0) {
//             notify("من فضلك اكمل البيانات", "warn")
//             return;
//         }

//         //convert base 64 image to file 
//         const imgCover = dataURLtoFile(images[0], Math.random() + ".png")
//         //convert array of base 64 image to file 
//         const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
//             (item, index) => {
//                 return dataURLtoFile(images[index], Math.random() + ".png")
//             }
//         )

//         const formData = new FormData();
//         formData.append("title", prodName);
//         formData.append("description", prodDescription);
//         formData.append("quantity", qty);
//         formData.append("price", priceBefore);
//         formData.append("imageCover", imgCover);
//         formData.append("category", CatID);
//         formData.append("brand", BrandID);
//         itemImages.map((item) => formData.append("images", item))


//         colors.map((color) => formData.append("availableColors", color))
//         seletedSubID.map((item) => formData.append("subcategory", item._id))


//         setLoading(true)
//         await dispatch(createProduct(formData))
//         setLoading(false)
//     }

//     //get create meesage
//     const product = useSelector(state => state.allproducts.products)
//     if (subCat) {
//          console.log("subCat",subCat.data)
//     }
//     useEffect(() => {

//         if (loading === false) {
//            // setCatID(0)
//             setColors([])
//             setImages([])
//             setProdName('')
//             setProdDescription('')
//             setPriceBefore('السعر قبل الخصم')
//             setPriceAftr('السعر بعد الخصم')
//             setQty('الكمية المتاحة')
//             setBrandID(0)
//             setSeletedSubID([])
//             setTimeout(() => setLoading(true), 1500)

//             if (product) {
//                 if (product.status === 201) {
//                     notify("تم الاضافة بنجاح", "success")
//                 } else {
//                     notify("هناك مشكله", "error")
//                 }
//             }
//         }
//     }, [loading])
//     return (
//         <div>
//             <Row className="justify-content-start ">
//                 <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
//                 <Col sm="8">
//                     <div className="text-form pb-2"> صور للمنتج</div>

//                     <MultiImageInput
//                         images={images}
//                         setImages={setImages}
//                         theme={"light"}
//                         allowCrop={false}
//                         max={4}
//                     />

//                     <input
                     
//                         type="text"
//                         className="input-form d-block mt-3 px-3"
//                         placeholder="اسم المنتج"
//                     />
//                     <textarea
//                         className="input-form-area p-2 mt-3"
//                         rows="4"
//                         cols="50"
//                         placeholder="وصف المنتج"
                     
//                     />
//                     <input
//                         type="number"
//                         className="input-form d-block mt-3 px-3"
//                         placeholder="السعر قبل الخصم"
                   
//                     />
//                     <input
//                         type="number"
//                         className="input-form d-block mt-3 px-3"
//                         placeholder="السعر بعد الخصم"
                        
//                     />
//                     <input
//                         type="number"
//                         className="input-form d-block mt-3 px-3"
//                         placeholder="الكمية المتاحة"
                      
//                     />
//                     <select
//                         onChange={onSeletCategory}
//                         name="cat"
//                         className="select input-form-area mt-3 px-2 ">
//                         <option value="0">التصنيف الرئيسي</option>
//                         {
//                             category.data ? (category.data.map((item,index) => {
//                                 return (
//                                     <option key={index} value={item._id}>{item.name}</option>
//                                 )
//                             })) : null

//                         }
//                     </select>

//                     <Multiselect
//                         className="mt-2 text-end"
//                         placeholder="التصنيف الفرعي"
//                         options={options}
//                         onSelect={onSelect}
//                         onRemove={onRemove}
//                         displayValue="name"
//                         style={{ color: "red" }}
//                     />
//                     <select
//                         name="brand"
//                         onChange={onSeletBrand}
//                         className="select input-form-area mt-3 px-2 ">
//                         <option value="0">اختر ماركة</option>
//                         {
//                             brand.data ? (brand.data.map((item,index) => {
//                                 return (
//                                     <option key={index} value={item._id}>{item.name}</option>
//                                 )
//                             })) : null

//                         }
//                     </select>
//                     <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
//                     <div className="mt-1 d-flex">
//                         {
//                             colors.length >= 1 ? (
//                                 colors.map((color, index) => {
//                                     return (
//                                         <div key={index}
//                                             onClick={() => removeColor(color)}
//                                             className="color ms-2 border  mt-1"
//                                             style={{ backgroundColor: color }}></div>
//                                     )
//                                 })

//                             ) : null
//                         }

//                         <img onClick={onChangeColor} src={add} alt="" width="30px" height="35px" style={{ cursor: 'pointer' }} />
//                         {
//                             showColor === true ? <CompactPicker onChangeComplete={handelChangeComplete} /> : null
//                         }

//                     </div>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col sm="8" className="d-flex justify-content-end ">
//                     <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
//                 </Col>
//             </Row>
//             <ToastContainer />
//         </div>
//     )
// }

// export default AdminAddProducts










