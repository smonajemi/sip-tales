import React from 'react';
import { render, screen } from '@testing-library/react';
import MainContainer from './MainContainer';

describe('MainContainer', () => {
  it('renders the title and children correctly', () => {
    // Arrange
    const title = 'Main Title';
    const childText = 'Child Component Content';

    // Act
    render(
      <MainContainer title={title}>
        <div>{childText}</div>
      </MainContainer>
    );

    // Assert
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  it('renders children correctly with different content', () => {
    // Arrange
    const title = 'Another Title';
    const childText = 'Different Child Content';

    // Act
    render(
      <MainContainer title={title}>
        <p>{childText}</p>
      </MainContainer>
    );

    // Assert
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(childText)).toBeInTheDocument();
  });
});
