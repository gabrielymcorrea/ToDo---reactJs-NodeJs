import React from 'react';
import * as S from './styles';

import filter from '../../assets/filter.png'

function FilterCard({title, actived}) { //resgato as propriedades passadas
  return (
    <S.container actived={actived}>
        <img src={filter} alt="Filtro" />
        <span>{title}</span>
    </S.container>
  );
}

export default FilterCard;
