//for get all brand and pagination  logic to use it in page of brands with design
import  { useEffect } from "react";
import {
  getAllBrand,
  getAllBrandPage,
} from "../../reducx/actions/brandAction";
import { useDispatch, useSelector } from "react-redux";



const AllBrandPageHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrand(4));
  }, []);

  const brand = useSelector((state) => state.allBrand.brand);
  const loading = useSelector((state) => state.allBrand.loading);
  console.log(brand);
  console.log(loading);
  let pageCount = 0;
  if (brand.paginationResult)
    // pages = category.paginationResult.numberOfPages;
    pageCount = brand.paginationResult.numberOfPages;

  const getPage = (page) => {
    dispatch(getAllBrandPage(page));
    
    console.log(page);
  };
  return [brand, loading, pageCount, getPage];
};

export default AllBrandPageHook;
