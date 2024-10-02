import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../reducx/actions/categoryAction';

const HomeCategoryHook = () => {
  useEffect(() => {
    dispatch(getAllCategory());  
  }, []);

    const colors = [
      "#ff7e00",
      "#ff0000",
      "#00ff00",
      "#0000ff",
      "#ff00ff",
      "#00ffff",
      "#00ffff",
    ];
  
    const dispatch = useDispatch();
    const category = useSelector((state) => state.allCategory.category);
    const loading = useSelector((state) => state.allCategory.loading);
    //  console.log("category", category)
    return [category, loading, colors];
}

export default HomeCategoryHook
