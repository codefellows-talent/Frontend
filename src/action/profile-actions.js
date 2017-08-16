import superagent from 'superagent';

export const profileSet = (profiles) => {
  profiles = profiles.map(studentProfile => {
    studentProfile.contacted = false;
    studentProfile.selected = false;
    return studentProfile;
  });
  return ({
    type: 'PROFILE_SET',
    payload: profiles,
  });
};

export const profileUpdate = (profile) =>{
  return ({
    type: 'PROFILE_UPDATE',
    payload: profile,
  });
};

export const profilesFetchRequest = () => (dispatch) => {
  return superagent.get(`${__API_URL__}/api/v1/profiles`)
    .then((res) => {
      dispatch(profileSet(res.body));
      return res;
    });
};
