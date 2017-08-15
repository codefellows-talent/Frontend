import uuid from 'uuid/v1';

export const connectCreate = (connect) => {
  connect.id = uuid();
  connect.timestamp = new Date();
  return {
    type: 'CONNECT_CREATE',
    payload: connect,
  };
};

export const connectUpdate = (connect) => ({
  type: 'CONNECT_UPDATE',
  payload: connect,
});

export const connectDelete = (connect) => ({
  type: 'CONNECT_DELETE',
  payload: connect,
});

export const connectReset = () => ({type: 'CONNECT_RESET'});
