let initialState = [];

export default (state = initialState, action) => {
  let {type, payload} = action;
  switch (type) {
  case 'LIST_SET':
    return payload;
  default:
    return state;
  }
};
