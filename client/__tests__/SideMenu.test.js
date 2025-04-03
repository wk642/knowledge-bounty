import React from 'react';
import { render } from '@testing-library/react';
import SideMenu from '../components/SideMenu';

// figure out how to mock the images
jest.mock('../assets/icons/FigmaCardsIcon.png');
jest.mock('../assets/icons/FigmaLeaderboard.png');
describe('SideMenu Component', () => {
  it('renders without crashing', () => {
    render(<SideMenu />);
  });
});