
export const initialState = {
    products: [],
    page: 1,
    loading: false,
    totalPages: null,
  };
  


export const paginationReducer = (state,action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return {...state, loading:true};
        case 'SET_PRODUCTS':
            return {
                ...state,
                products:action.payload.products,
                totalPages:action.payload.totalPages,
                loading: false,
            };

        case 'SET_PAGE':
            return {...state, page: action.payload};
        default:
            return state;
    }
}

