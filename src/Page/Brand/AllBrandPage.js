import React from "react";
import BrandContainer from "../../Components/Brand/BrandContainer";
import Pagination from "../../Components/Uitily/Pagination";
import AllBrandPageHook from "../../hooks/brand/all-brand-page-hook";
const AllBrand = () => {
  const [brand, loading, pageCount, getPage] = AllBrandPageHook();
  return (
    <div style={{ minHeight: "670px" }}>
      <BrandContainer data={brand.data} loading={loading}/>
      {pageCount > 1 ? (
        <Pagination pageCount={pageCount} onPress={getPage} />
      ) : (
        <h1 className="text-center">There is no Brands</h1>
      )}
    </div>
  );
};

export default AllBrand;
