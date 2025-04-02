import React from 'react';
import { render } from '@testing-library/react';
import PostDetails from '../components/PostDetails';

describe('PostDetails', () => {
  it('renders without errors', () => {
    // create some mock data
    const mockPost = {
      id: '1',
      title: 'Test Post Title',
      content: 'This is the content of the test post.',
    };

    const mockClosePostDetail = jest.fn();

    render(<PostDetails post={mockPost} closePostDetail={mockClosePostDetail} />);
  });
});