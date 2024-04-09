/* selectors */
export const getAllProducts = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getCompareProducts = ({ products }) =>
  products.filter(product => product.comparision === true);

export const getProductsByFavorite = ({ products }) =>
  products.filter(product => product.favorite === true);

/* actions */
const createActionName = actionName => `app/product/${actionName}`;
const ADD_USER_STARS = createActionName('ADD_USER_STARS');
const ADD_PRODUCT_COMPARE = createActionName('ADD_PRODUCT_COMPARE');
const REMOVE_PRODUCT_COMPARE = createActionName('REMOVE_PRODUCT_COMPARE');

/* action creators */
export const addUserStars = payload => ({ type: ADD_USER_STARS, payload });

export const addToCompare = payload => ({
  type: ADD_PRODUCT_COMPARE,
  payload,
});

export const removeCompare = payload => ({
  type: REMOVE_PRODUCT_COMPARE,
  payload,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_USER_STARS:
      return statePart.map(product =>
        product.id === action.payload.id
          ? { ...product, userStars: action.payload.userStars }
          : product
      );
    case ADD_PRODUCT_COMPARE:
      return statePart.map(product =>
        product.id === action.payload ? { ...product, comparision: true } : product
      );
    case REMOVE_PRODUCT_COMPARE:
      return statePart.map(product =>
        product.id === action.payload ? { ...product, comparision: false } : product
      );
    default:
      return statePart;
  }
}
