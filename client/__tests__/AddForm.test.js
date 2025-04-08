import React from 'react';
import { render } from '@testing-library/react';
import AddForm from '../components/AddForm';

describe('AddPosts', () => {
    it('renders without errors', () => {
        render(<AddForm />);
    });
});