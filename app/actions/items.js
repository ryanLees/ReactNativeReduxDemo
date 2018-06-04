
export function itemsHasErrored(bool) {
   return {
       type: 'ITEMS_HAS_ERRORED',
       hasErrored: bool
   };
}

export function itemsIsLoading(bool) {
   return {
       type: 'ITEMS_IS_LOADING',
       isLoading: bool
   };
}

export function itemsFetchDataSuccess(items) {
   return {
       type: 'ITEMS_FETCH_DATA_SUCCESS',
       items
   };
}

// export function errorAfterFiveSeconds() {
//     // We return a function instead of an action object
//     //dispatch作为参数传递给胖箭头函数
//     return (dispatch) => {
//         setTimeout(() => {
//             // This function is able to dispatch other action creators
//             dispatch(itemsHasErrored(true));
//         }, 5000);
//     };
// }


export function fetchItemsData(url) {
    console.log('请求数据', url);
    return (dispatch) => {
        //等待
        dispatch(itemsIsLoading(true));
        fetch(url)
        .then((response) => response.json())
        .then((items) => {
            console.log('请求成功', items);
            dispatch(itemsIsLoading(false));
            dispatch(itemsFetchDataSuccess(items.movies));
        }).catch((error) => {
            console.log('请求失败',error);
            dispatch(itemsHasErrored(true));
        })
    }
};
