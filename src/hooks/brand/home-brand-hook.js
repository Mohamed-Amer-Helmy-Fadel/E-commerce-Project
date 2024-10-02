import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrand } from '../../reducx/actions/brandAction';


const HomeBrandHook = () => {
    const dispatch = useDispatch();
    const brand = useSelector((state) => state.allBrand.brand);
    const loading = useSelector((state) => state.allBrand.loading);
    // console.log(brand.data)
    // const colors = [
    //   "#ff7e00",
    //   "#ff0000",
    //   "#00ff00",
    //   "#0000ff",
    //   "#ff00ff",
    //   "#00ffff",
    //   "#00ffff",
    // ];
    
    useEffect(() => {
      dispatch(getAllBrand());
    }, []);
    return [brand, loading];
}

export default HomeBrandHook
