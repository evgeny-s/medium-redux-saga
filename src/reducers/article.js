import update from 'immutability-helper';

const initialState = {
  articles: [{
    id: 1,
    title: 'some title',
    image: 'https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/original.jpeg',
    description: 'short description',
    text: 'big text here',
  }],
};

function articleReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_COMPLETED':
      if (!action.payload.id || state.cartItems.includes(action.payload.id)) {
        return state;
      }

      return update(state, {
        cartItems: {
          $push: [action.payload.id],
        }
      });
    default:
      return state
  }
}

export default articleReducer;
