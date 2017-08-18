import profileReducer from '../reducer/profile.js';
import mockProfile from './lib/mock-profile.js';
import expect from 'expect';



let fakeState, result;
describe('testing category reducer', () => {

  test('it should return an empty Array', () => {
    result = profileReducer(undefined, { type: 'whatever' });
    expect(result).toEqual([]);
  });

  test('it should return add a profile to the array', () => {
    result = profileReducer(undefined, { type: 'PROFILE_SET', payload: [mockProfile] });
    expect(result).toEqual([mockProfile]);
  });
  
  test('it should return add a profile to the array', () => {
    let mockProfile2 = Object.assign({}, mockProfile);
    mockProfile2.nickname ='Avenger';

    fakeState = [mockProfile];
    
    result = profileReducer(fakeState, { type: 'PROFILE_UPDATE', payload: mockProfile2 });
    expect(result).toEqual([mockProfile2])
  });
});
