const ADD_TO_BASKET = 'ADD_TO_BASKET',
      CLEAR_BASKET = 'CLEAR_BASKET';

export const addToBasket = (item, options, qty) => {
    return {
        type: ADD_TO_BASKET,
        payload: { item: item, options: options, qty: qty },
    };
}
