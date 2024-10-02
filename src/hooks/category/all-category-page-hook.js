//for logic of all category page
import  { useEffect } from "react";
import {
  getAllCategory,
  getAllCategoryPage,
} from "../../reducx/actions/categoryAction";
import { useDispatch, useSelector } from "react-redux";



const AllCategoryPageHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory(6));
  }, []);

  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);
  // console.log(category);
  // console.log(loading);
  let pageCount = 0;
  if (category?.paginationResult)
    // pages = category.paginationResult.numberOfPages;
    pageCount = category.paginationResult.numberOfPages;

  const getPage = (page) => {
    dispatch(getAllCategoryPage(page));
    
    // console.log(page);
  };
  return [category, loading, pageCount, getPage];
};

export default AllCategoryPageHook;
