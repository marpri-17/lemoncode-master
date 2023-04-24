import React from 'react';
import { render, screen, within } from '@testing-library/react';
import {
  ConfirmationDialogComponent,
  Props,
} from './confirmation-dialog.component';
import userEvent from '@testing-library/user-event';

const getMockedProps = (values?: Partial<Props>) => {
  const labels = {
    closeButton: null,
    acceptButton: null,
  };
  const mockedProps = {
    isOpen: null,
    onAccept: () => {},
    onClose: () => {},
    title: null,
    labels: values && values.labels ? { ...labels, ...values.labels } : labels,
    children: null,
  };
  return values ? { ...mockedProps, ...values } : mockedProps;
};

fdescribe('Confirmation Dialog component specs', () => {
  it('Should display when feeds is open true and display title', () => {
    // Arrange
    const props = getMockedProps({
      isOpen: true,
      title: 'Testing dialog',
      labels: { closeButton: 'Close', acceptButton: 'Confirm' },
    });

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const dialogComponent = screen.getByRole('dialog');
    const dialogTitleElement = within(dialogComponent).getByText(props.title);
    // Assert

    expect(dialogComponent).toBeInTheDocument();
    expect(dialogTitleElement).toBeInTheDocument();
  });

  it('Should not display when feeds is open falsy value', () => {
    const props = getMockedProps({ isOpen: false, title: 'Testing dialog' });

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const dialogComponent = screen.queryByRole('dialog');

    // Assert
    expect(dialogComponent).not.toBeInTheDocument();
  });

  it('Should call onAccept event function and onClose event function when clicked on accept button', async () => {
    const props = getMockedProps({
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      labels: { acceptButton: 'Confirm', closeButton: 'Close' },
    });

    render(<ConfirmationDialogComponent {...props} />);

    const dialogComponent = screen.getByRole('dialog');
    const buttonElement = within(dialogComponent).getByRole('button', {
      name: props.labels.acceptButton,
    });

    await userEvent.click(buttonElement);

    expect(props.onAccept).toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalled();
    expect(buttonElement).toHaveTextContent(props.labels.acceptButton);
  });

  it('Should call only onClose event function when clicked close button', async () => {
    const props = getMockedProps({
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      labels: { acceptButton: 'Confirm', closeButton: 'Close' },
    });

    render(<ConfirmationDialogComponent {...props} />);

    const dialogComponent = screen.getByRole('dialog');
    const buttonElement = within(dialogComponent).getByRole('button', {
      name: props.labels.closeButton,
    });

    await userEvent.click(buttonElement);

    expect(props.onAccept).not.toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalled();
    expect(buttonElement).toHaveTextContent(props.labels.closeButton);
  });

  it('Should display children', () => {
    const props = getMockedProps({
      isOpen: true,
      children: <span>Content text</span>,
    });

    render(<ConfirmationDialogComponent {...props} />);

    const dialogComponent = screen.getByRole('dialog');
    const childrenElement = within(dialogComponent).queryByText('Content text');

    expect(childrenElement).toBeInTheDocument();
  });
});
