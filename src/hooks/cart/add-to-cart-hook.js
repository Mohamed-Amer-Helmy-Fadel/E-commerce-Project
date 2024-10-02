import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { createBrand } from '../../reducx/actions/brandAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../hooks/useNotifacation'
import { addProductToCart } from './../../reducx/actions/cartAction';

const AddToCartHook = (prdID, item) => {

    const dispatch = useDispatch();

    const [indexColor, setIndexColor] = useState('')
    const [colorText, setColorText] = useState('')
    const [loading, setLoading] = useState(true)
    // let firstSelectedColor = ''
    // useEffect(() => {
    //     if (item && item.availableColors) {
    //         firstSelectedColor = item.availableColors[0]
    //         console.log("firstSelectedColor", firstSelectedColor)
    //     }
    // }, [item])
    // if (item &&item.availableColors) {
    //      firstSelectedColor = item.availableColors[0]
    //     console.log("firstSelectedColor", firstSelectedColor)
    // }
    // let firstSelectedColor = item.availableColors[0]
    // console.log("firstSelectedColor", firstSelectedColor)
    // console.log("item", item)

    const colorClick = (index, color) => {
        setIndexColor(index)
        setColorText(color)
    }


    //add product to cart
    const addToCartHandel = async () => {
        console.log(item.availableColors)
        if (item.availableColors.length >= 1) {
            if (colorText === "") {
                notify("من فضلك اختر لون اولا للمنتج", "warn")
                return
            }
        } else {
            setColorText('')
        }
        setLoading(true)
        await dispatch(addProductToCart({
            productId: prdID,
            color: colorText
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.cartReducer.addToCart)

    useEffect(() => {

        if (loading === false) {
            if (res && res.status === 200) {
                notify("تمت اضافة المنتج للعربه بنجاح", "success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            } else {
                notify("قم بتسجيل الدخول اولا", "warn")
            }
        }
    }, [loading])
    // useEffect(() => {
    //     if (item?.availableColors.length>=1     ) {
    //         setIndexColor(0)
    //         setColorText(firstSelectedColor)
    //         console.log("firstSelectedColor", firstSelectedColor)
    //     }
    // }, [item])

    return [colorClick, indexColor, addToCartHandel]

}

export default AddToCartHook