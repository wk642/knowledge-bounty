import React from 'react';
import { render, describe } from '@testing-library/react';
import AddForm from '../components/AddForm';

describe('ListPosts', () => {
    it('renders without errors', () => {
        render(<AddForm />);
    });
});