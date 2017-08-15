import superagent from 'superagent';

export const profileSet = (profiles) => ({
  type: 'PROFILE_SET',
  payload: profiles,
});

export const profilesFetchRequest = () => (dispatch) => {
  return superagent.get(`${__API_URL__}/api/profiles`)
    .then((res) => {
      dispatch(profileSet(res.body));
      return res;
    });
};
