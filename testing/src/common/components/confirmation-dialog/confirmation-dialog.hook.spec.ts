import React from 'react';
import { renderHook } from '@testing-library/react';
import { Lookup, createEmptyLookup } from 'common/models';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { act } from 'react-dom/test-utils';

fdescribe('useConfirmationDialog specs', () => {
  it('Should return is open false and empty lookup on item to delete when it calls it', () => {
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    const defaultLookup = createEmptyLookup();
    expect(result.current.isOpen).toEqual(false);
    expect(result.current.itemToDelete).toEqual(defaultLookup);
    expect(result.current.onAccept).toEqual(expect.any(Function));
    expect(result.current.onClose).toEqual(expect.any(Function));
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });

  it('Should set item to delete and is open state when onOpenDialog is call', () => {
    // Arrange
    const itemToDelete: Lookup = {
      id: '1',
      name: 'TEST',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(itemToDelete);
    });

    // Assert
    expect(result.current.isOpen).toEqual(true);
    expect(result.current.itemToDelete).toEqual(itemToDelete);
  });

  it('Should empty item to delete when onAccept is call', () => {
    // Arrange
    const itemToDelete: Lookup = {
      id: '1',
      name: 'TEST',
    };
    const defaultLookup = createEmptyLookup();

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(itemToDelete);
      result.current.onAccept();
    });

    // Assert
    expect(result.current.isOpen).toEqual(true);
    expect(result.current.itemToDelete).toEqual(defaultLookup);
  });

  it('Should set is open to false when onClose is call', () => {
    // Arrange
    const itemToDelete: Lookup = {
      id: '1',
      name: 'TEST',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(itemToDelete);
      result.current.onClose();
    });

    // Assert
    expect(result.current.isOpen).toEqual(false);
    expect(result.current.itemToDelete).toEqual(itemToDelete);
  });
});
