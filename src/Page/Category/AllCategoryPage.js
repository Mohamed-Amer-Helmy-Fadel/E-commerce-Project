//logic called from hook to use it with design
import React from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Uitily/Pagination";
import AllCategoryPageHook from "../../hooks/category/all-category-page-hook";

const AllCategoryPage = () => {
  const [category, loading, pageCount, getPage] = AllCategoryPageHook();
  // console.log("pageCount", pageCount);
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer data={category?.data} loading={loading} />
      {
        pageCount > 1 ? <Pagination pageCount={pageCount} onPress={getPage} /> : null
      }
    </div>
  );
};

export default AllCategoryPage;
