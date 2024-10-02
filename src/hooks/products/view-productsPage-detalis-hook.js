import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct, getProductLike, getProductYouLike } from '../../reducx/actions/productsAction';
import mobile from '../../images/mobile.png'
import { getOneCategory } from '../../reducx/actions/categoryAction';
import { getOneBrand } from '../../reducx/actions/brandAction';
import { useParams } from 'react-router-dom'
const ViewProductsDetalisHook = (prodID) => {

    const {id} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOneProduct(id))

    }, [])
    const oneProducts = useSelector((state) => state.allproducts.oneProduct)
    const oneCategory = useSelector((state) => state.allCategory.oneCategory)
    const oneBrand = useSelector((state) => state.allBrand.oneBrand)
    const productLike = useSelector((state) => state.allproducts.productLike)

    let item = [];
    try{
    if (oneProducts.data)
        item = oneProducts.data;
    else
        item = []
}catch(e){}
    //     if (item.images)
    // console.log(item.images)


    let images = []
    try{
    if (item.images)
    images=item.images.map((img) => { return { original: img } })
    else {
        images = [{ original: `${mobile}` }]
    }}catch(e){}


    //to show category item
    let cat = [];
    try{ 
    if (oneCategory.data)
        cat = oneCategory.data;
    else
        cat = []
    }catch(e){}
    // if (cat.name)
    // console.log(cat.name)


    //to show brand item
    let brand = [];
    try{
        if (oneBrand.data)
        brand = oneBrand.data;
    else
        brand = []
    }catch(e){}
    // if (brand.name)

        // console.log(brand.name)


    //to show product like


    let prod = []
    try{
    
    if (productLike)
         prod = productLike.data;
    else
        prod = []
    }catch(e){}
    useEffect(() => {
        if (item.category)
            dispatch(getOneCategory(item.category))
         if (item.brand)
            dispatch(getOneBrand(item.brand))
        if (item.category)
            dispatch(getProductLike(item.category))
    }, [item])




    return [item,images,cat,brand,prod]   //, images, cat, brand, prod
}

export default ViewProductsDetalisHook  


  // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getOneProduct(prodID))
    // }, [])

    // const oneProducts = useSelector((state) => state.allproducts.oneProduct)
    // // const oneCategory = useSelector((state) => state.allCategory.oneCategory)
    // // const oneBrand = useSelector((state) => state.allBrand.oneBrand)
    // // const productLike = useSelector((state) => state.allproducts.productLike)
    // //to show products item
    // let item = [];
    // if (oneProducts.data)
    //     item = oneProducts.data;
    // else
    //     item = []



    // useEffect(() => {
    //     if (item.category)
    //         dispatch(getOneCategory(item.category))
    //     if (item.brand)
    //         dispatch(getOneBrand(item.brand))
    //     if (item.category)
    //         dispatch(getProductLike(item.category))

    // }, [item])


    // //to view images gallery
    // let images = []
    // if (item.images)
    //     images = item.images.map((img) => { return { original: img } })
    // else {
    //     images = [{ original: `${mobile}` }]
    // }


    // //to show category item
    // let cat = [];
    // if (oneCategory.data)
    //     cat = oneCategory.data;
    // else
    //     cat = []

    // //to show brand item
    // let brand = [];
    // if (oneBrand.data)
    //     brand = oneBrand.data;
    // else
    //     brand = []

    // let prod = []
    // if (productLike)
    //     prod = productLike.data;
    // else
    //     prod = []
