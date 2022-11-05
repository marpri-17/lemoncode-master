import crypto from 'crypto';
import { mockCharacters } from './mock-data';
import { Character } from './models';

const [...characters] = mockCharacters;

export const getCharactersList = async (): Promise<Character[]> => characters;

/* export const getHotel = async (id: string): Promise<Hotel> =>
  hotels.find((h) => h.id === id);

export const insertHotel = async (hotelEdit: HotelEdit) => {
  const newId = crypto.randomBytes(16).toString('hex');
  hotels = [
    ...hotels,
    {
      ...createDefaultHotel(),
      ...hotelEdit,
      id: newId,
    },
  ];
  return newId;
};

export const updateHotel = async (hotelEdit: HotelEdit): Promise<boolean> => {
  hotels = hotels.map((h) =>
    h.id === hotelEdit.id
      ? {
          ...h,
          ...hotelEdit,
        }
      : h
  );

  return true;
};

export const deleteHotel = async (id: string): Promise<boolean> => {
  hotels = hotels.filter((h) => h.id !== id);
  return true;
};

export const getCities = async (): Promise<City[]> => cities;
 */
