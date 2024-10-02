import baseURL from "../Api/baseURL";

const useInsertData = async (url,params) => {
    const  config={
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,  //
        }
    }
    const res = await baseURL.post(url,params,config)   //post accept 3 parameters (url, data, config) but get accept 2 parameters (url, config)
    return res
}

const useInsertDataWithImage = async (url,params) => {
    const  config={
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }
    const res = await baseURL.post(url,params,config) 
    return res
}
export {useInsertData,useInsertDataWithImage} 