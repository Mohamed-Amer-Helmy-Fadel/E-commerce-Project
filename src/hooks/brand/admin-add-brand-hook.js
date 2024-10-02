import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import avatar from "../../images/avatar.png";
import "react-toastify/dist/ReactToastify.css";
import notify from "../useNotifacation";
import { createBrand } from '../../reducx/actions/brandAction';

const AddBrandHook = () => {
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

    const res = useSelector((state) => state.allBrand.brand);

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
        await dispatch(createBrand(formData));
        // try {
        //     await dispatch(createBrand(formData));
        // } catch (error) {
        //     console.error("Error uploading image:", error);
        // }
        setLoading(false);
        setSelectedFile(null); // Reset selectedFile to null after submission
    };

    useEffect(() => {
        if (!loading && isPressed) {
            if (res && res.status === 201) {
                notify("تم اضافه الماركه بنجاح", "success");
            } else {
                notify("هناك مشكلة في عمليهة الاضافة", "error");
            }

            console.log("Status Code:", res?.status);

            setName("");
            setImage(avatar);
            setSelectedFile(null);
            setIsPressed(false);
        }
    }, [loading, isPressed, res]);

    return [image, name, loading, isPressed, handleImage, handleName, handleSubmit];
};

export default AddBrandHook;


