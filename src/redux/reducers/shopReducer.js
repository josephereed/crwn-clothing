import SHOP_DATA from '../../pages/shop/SHOP_DATA';

const INITIAL_STATE = {
  collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};

export default shopReducer;
