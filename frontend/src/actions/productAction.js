const listProducts = () => async (dispatch) => {
    try {
        dispatch('PRODUCT_LIST_REQUEST');
        const { data } = await axios.get('http://localhost:5000/api/products');
        dispatch({ type: 'PRODUCT_LIST_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'PRODUCT_LIST_FAIL', payload: error.message });
    }
};

export { listproducts };
