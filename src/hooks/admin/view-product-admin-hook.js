import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllProductsPage } from '../../reducx/actions/productsAction';


const ViewProductAdminHook = () => {

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getAllProducts(2))
    // }, [dispatch])

    // const allProducts = useSelector((state) => state.allproducts.allProducts)
    // console.log("allProducts", allProducts)


    
    // const onPress = async (page) => {
    //     await dispatch(getAllProductsPage(page, 2))
    //     // console.log("page", page)
    // }
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProductsPage())
    }, [])

    const allProducts = useSelector((state) => state.allproducts.allProducts)
    console.log("allProducts", allProducts)


    
    const onPress = async (page) => {
        await dispatch(getAllProductsPage())
        // console.log("page", page)
    }

    let items = [];
    let pagination = [];
    try {
        // console.log("allProducts", allProducts)
    if (allProducts?.data)
        items = allProducts?.data;
    else
        items = []

        
        if (allProducts?.paginationResult)
            pagination = allProducts?.paginationResult?.numberOfPages;
        else
        pagination = []

    }catch (e) { }
    return [items,pagination,onPress]

}

export default ViewProductAdminHook