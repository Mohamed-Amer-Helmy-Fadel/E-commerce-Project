import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { createBrand, getAllBrand } from '../../reducx/actions/brandAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../hooks/useNotifacation'
import { applayCoupnCart } from '../../reducx/actions/cartAction';
import cartReducer from './../../reducx/reducers/cartReducer';
import GetAllUserCartHook from './get-all-user-cart-hook';
import { Link, useNavigate } from 'react-router-dom'

const ApplayCouponHook = (cartItems) => {
    const dispatch = useDispatch();
console.log("cartItems",cartItems)

    const [couponName, setCouponName] = useState('')
    const [loading, setLoading] = useState(true)

    const onChangeCoupon = (e) => {
        setCouponName(e)
    }

    const handelSubmitCoupon = async () => {
        if (couponName === "") {
            notify("من فضلك ادخل الكوبون", "warn")
            return
        }
        setLoading(true)
        await dispatch(applayCoupnCart({
            couponName: couponName
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.cartReducer.applayCoupon)

    useEffect(() => {

        if (loading === false) {
            console.log(res)
            if (res && res.status === 200) {
                notify("تم تطبيق الكوبون بنجاح", "success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);

            } else {
                notify("هذا الكوبون غير صحيح او منتهى الصلاحيه", "warn")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            }
        }
    }, [loading])

    const navigate = useNavigate()

    const handelCheckout = () => {
        if (cartItems&&cartItems.length >= 1) {
            navigate('/order/paymethoud')
        }
        else {
            notify("من فضلك اضف منتجات للعربة اولا", "warn")
        }
    }

    return [couponName, onChangeCoupon, handelSubmitCoupon,handelCheckout]

}

export default ApplayCouponHook