import * as profileActions from '../action/profile-actions.js';
import expect from 'expect';
import mockProfile from './lib/mock-profile.js';

describe('testing profile actions', () => {
  test('should set the profiles array', () => {
    let action = profileActions.profileSet([mockProfile]);
    expect(action.type).toEqual('PROFILE_SET');
    expect(action.payload).toEqual([mockProfile]);
    expect(action.payload[0].salesforceId).toEqual(mockProfile.salesforceId);
  });
  
  test('should update profie', () => {
    let action = profileActions.profileUpdate([mockProfile]);
    expect(action).toEqual(
      {
        type: 'PROFILE_UPDATE',
        payload: [mockProfile],
      }
    );
  });

  it('fetch response profiles', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockResponse(200, null, [mockProfile])));

    let res = profileActions.profilesFetchRequest()();
    
    expect(res).toExist();
  });


});