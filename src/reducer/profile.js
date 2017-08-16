let initialState = [];

export default (state = initialState, action) => {
  let {type, payload} = action;
  switch (type) {
  case 'PROFILE_SET':
    return payload;

  case 'PROFILE_UPDATE':
    return state.map(profile => profile.salesforceId !== payload.salesforceId ? profile : payload);
  default:
    return state;
  }
};
