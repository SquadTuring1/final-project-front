import { nanoid } from '@reduxjs/toolkit';
import React from 'react';

const genreList = [
  '',
  'Pop',
  'Rock',
  'Hip Hop',
  'Kpop',
  'Jazz',
  'Country',
  'R&B',
  'Electronic',
  'Metal',
  'Classical',
  'Dance',
  'Alternative',
  'Reggae',
  'Indie',
  'Soul',
  'Punk',
  'Latin',
];

const options = genreList.map((genre) => (
  <option key={nanoid()} value={genre}>
    {genre}
  </option>
));

const SelectOptions = () => options;

export default SelectOptions;
