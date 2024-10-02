
import {useGetData} from "../../hooksData/useGetData";
import { useInsertData } from "../../hooksData/useInsertData";
import { CREATE_SUB_CATEGORY, GET_ERROR, GET_SUB_CATEGORY } from "../type";


export const createSubCategory = (data) => async (dispatch) => {
    try {
        const res = await useInsertData(`/api/v1/subcategories`,data)
        // console.log("res..",res);
        dispatch({
            type: CREATE_SUB_CATEGORY,
            payload: res,
            loading:true
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: "error" + error
        })
    }
}

//get sub category depend in category  id
export const getOneCategory = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/categories/${id}/subcategories`);
    //    console.log("response",response.data);
        dispatch({
            type: GET_SUB_CATEGORY,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}