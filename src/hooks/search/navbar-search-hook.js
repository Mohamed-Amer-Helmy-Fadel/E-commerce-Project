import React, { useState, useEffect } from 'react'
import ViewSearchPageProductsHook from '../products/view-searchPage-products-hook';


const NavbarSearchHook = () => {
    const [items, pagination, onPress, getProduct] = ViewSearchPageProductsHook();

    const [searchWord, setSearchWord] = useState('')

    //when user type search word
    const OnChangeSearch = (e) => {
        localStorage.setItem("searchWord", e.target.value)
        setSearchWord(e.target.value)
        const path = window.location.pathname;
        if (path != "/products") {
           window.location.href = "/products"
        }

    }
      

    useEffect(() => {
        setTimeout(() => {
             
            getProduct();
        }, 1000);
    }, [searchWord])
    return [OnChangeSearch, searchWord]
}

export default NavbarSearchHook