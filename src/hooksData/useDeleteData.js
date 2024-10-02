import baseURL from "../Api/baseURL";
const useDeleteData = async (url, parmas) => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }
    const res = await baseURL.delete(url, config, parmas);
    return res.data;
}

export default useDeleteData;

// import baseURL from "../Api/baseURL";
// const useDeleteData = async (url, parmas) => {
//     const config = {
//         headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//         }
//     }
//     console.log('config', config)
//     const res = await baseURL.delete(url, parmas, config);
//     // console.log('res', res)
//     return res.data;
// }

// export default useDeleteData;




