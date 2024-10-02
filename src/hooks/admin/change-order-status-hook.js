import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeOrderDeliver, changeOrderPay, getAllOrders, getOneOrders } from '../../reducx/actions/ordersAction';
import notify from '../useNotifacation';

const ChangeOrderStatusHook = (id) => {
    const [loading, setLoading] = useState(true);
    const [loadingDeliver, setLoadingDeliver] = useState(true);
    const [pay, setPay] = useState(0);
    const [deliver, setDeliver] = useState(0);
    const dispatch = useDispatch()


    const changePayOrder = async () => {
        // console.log('payy', pay)
         if (pay === 0)
            {
                // console.log('pay-0', pay)
                notify("من فضلك اختر قيمة", "error")
                // return
            } 
            else if (pay === 'true') { 
                // console.log('pay', pay)
                setLoading(true)
                await dispatch(changeOrderPay(id))
                setLoading(false)
            }
    }



    const changeDeliverOrder = async () => {
        if (deliver === 'true') {
            setLoadingDeliver(true)
            await dispatch(changeOrderDeliver(id))
            setLoadingDeliver(false)
        } else if (deliver === 0) {
            notify("من فضلك اختر قيمة", "error")
        }

    }


    //get order pay change
    const resOneOrder = useSelector(state => state.orderReducer.changePay)
    useEffect(() => {
        if (loading === false) {
            if (resOneOrder && resOneOrder.status === 200) {
                notify("تم تغير حالة الدفع بنجاح", "success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            } else {
                notify("هناك مشكله فى عملية التغير", "error")
            }
            console.log(resOneOrder)
        }
    }, [loading])


    //get order deliver change
    const resDeliverOrder = useSelector(state => state.orderReducer.changeDeliver)
    useEffect(() => {
        if (loadingDeliver === false) {
            if (resDeliverOrder && resDeliverOrder.status === 200) {
                notify("تم تغير حالة التوصيل بنجاح", "success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            } else {
                notify("هناك مشكله فى عملية التغير", "error")
            }
            console.log(resDeliverOrder)
        }
    }, [loadingDeliver])



    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "numeric", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const onChangePaid = (e) => {
        setPay(e.target.value)
    }

    const onChangeDeliver = (e) => {
        setDeliver(e.target.value)
    }


    return [formatDate, onChangePaid, changePayOrder, onChangeDeliver, changeDeliverOrder]
}

export default ChangeOrderStatusHook