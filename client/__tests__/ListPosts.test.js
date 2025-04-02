import React from 'react';
import { render } from '@testing-library/react';
import ListPosts from '../components/ListPosts';

describe('ListPosts', () => {
    it('renders without errors', () => {
        render(<ListPosts />);
    });
});