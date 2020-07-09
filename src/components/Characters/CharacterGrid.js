import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../UI/Spinner';

const CharacterGrid = ({ isLoading, items }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => {
        return <CharacterItem key={item.char_id} item={item}></CharacterItem>;
      })}
    </section>
  );
};

export default CharacterGrid;
