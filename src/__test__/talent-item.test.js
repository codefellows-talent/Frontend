import React from 'react';
import { mount } from 'enzyme';
import superagent from 'superagent';
import superagentMocker from 'superagent-mocker';
import TalentItem from '../component/talent-item';
import * as profileActions from '../action/profile-actions.js';
import storeCreate from '../lib/store-create.js';
import {Provider} from 'react-redux';
import expect from 'expect';

let mockAPI = superagentMocker(superagent);

let mockProfile = {
  salesforceId: '00361000014StPs',
  nickname: 'Trivia Ninja',
  tagline: 'Full Stack Javascript developer, with experience in Ruby on Rails. Passionate at building projects faster with a focus on bringing together a demonstrated history of expertise in Biology/Immunology towards application development.',
  employer: '',
  careerTagline: 'Former Research Biologist with a focus on Immunology',
  coursework: 'Master\'s Biology with Immunology Focus',
  location: 'Seattle, WA',
  graduationDate: '8/18/2017',
  codeFellowsCourse: 'Advanced Software Dev. Full-Stack Javascript',
  relocation: false,
  employmentTypes: {
    fullTime: true,
    partTime: true,
    apprentice: true,
    internship: true,
    freelance: false,
  },
  skills: {
    good: [
      'Front-end Web Development',
      'Backend Development',
      'React',
      'HTML and CSS',
      'SQL',
      'Relational Database Design',
    ],
    learn: [
      'React Native',
    ],
    top: 'JavaScript',
  },
  tools: {
    good: [
      'Git',
      'GitHub',
      'Travis CI',
      'AWS',
      'Atom',
    ],
    learn: [
      'Vim',
    ],
    top: 'Node.JS',
  },
  roles: {
    other: [
      'Full Stack Developer',
      'Back-end Developer',
      'Front-end Developer',
    ],
    top: 'Software Engineer',
  },
};
describe('Talent Item Tests', () => {
  test('inital state', () => {
    let wrapper = mount(<Provider store={storeCreate()}><TalentItem key={mockProfile.salesforceId} profile={mockProfile} /></Provider>);
    expect(wrapper.nodes[0].props.children).toExist();
    expect(wrapper.nodes[0].props.children.props.profile.salesforceId).toEqual(mockProfile.salesforceId);
  });

});