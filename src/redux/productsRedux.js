/* selectors */
export const getAllProducts = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* actions */
const createActionName = actionName => `app/product/${actionName}`;
const ADD_USER_STARS = createActionName('ADD_USER_STARS');

/* action creators */
export const addUserStars = payload => ({ type: ADD_USER_STARS, payload });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_USER_STARS:
      return statePart.map(product =>
        product.id === action.payload.id
          ? { ...product, userStars: action.payload.userStars }
          : product
      );
    default:
      return statePart;
  }
}
