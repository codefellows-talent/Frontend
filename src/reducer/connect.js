let validatePayload = (payload) => {
  if (!payload.id || !payload.timestamp || !payload.name || !payload.email || !payload.company || payload.terms === 'unchecked')
    throw new Error('VALIDATION ERROR: Connection must have an id, timestamp, name, email, company and accept terms');
};

let initialState = [];
export default (state = initialState, action) => {
  let {type, payload} = action;
  switch (type) {
  case 'CONNECT_CREATE':
    validatePayload(payload);
    return [...state, payload];

  case 'CONNECT_UPDATE':
    validatePayload(payload);
    return state.map((connect) => connect.id === connect.id ? payload : connect);

  case 'CONNECT_DELETE':
    validatePayload(payload);
    return state.filter((connect) => connect.id !== connect.id);

  default:
    return state;
  }
};
