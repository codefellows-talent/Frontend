import React from 'react';
import { mount } from 'enzyme';
import superagent from 'superagent';
import superagentMocker from 'superagent-mocker';
import TalentItem from '../component/talent-item';
import * as profileActions from '../action/profile-actions.js';
import storeCreate from '../lib/store-create.js';
import {Provider} from 'react-redux';
import expect from 'expect';
import mockProfile from './lib/mock-profile.js';


describe('TalentItem Tests', () => {
  test('talent item should exist', () => {
    let wrapper = mount(<Provider store={storeCreate()}><TalentItem key={mockProfile.salesforceId} profile={mockProfile} /></Provider>);
    expect(wrapper.nodes[0].props.children).toExist();
  });

  test('talent item should match profile that was passed', () => {
    let wrapper = mount(<Provider store={storeCreate()}><TalentItem key={mockProfile.salesforceId} profile={mockProfile} /></Provider>);
    expect(wrapper.nodes[0].props.children.props.profile.salesforceId).toEqual(mockProfile.salesforceId);
  });
});