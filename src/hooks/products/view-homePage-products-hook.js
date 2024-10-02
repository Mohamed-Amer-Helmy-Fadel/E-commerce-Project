import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from '../../reducx/actions/productsAction';

const ViewHomeProductsHook = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    const allProducts = useSelector((state) => state.allproducts.allProducts)

    let items = [];
    try {
        if (allProducts.data)
            items = allProducts.data.slice(0, 8);
        else
            items = []
    } catch (error) { }
    // if (allProducts.data)
    //     items = allProducts.data.slice(0, 8);
    // else
    //     items = []

    return [items]

}

export default ViewHomeProductsHook