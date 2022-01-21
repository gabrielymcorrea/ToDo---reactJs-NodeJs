import React from 'react';
import * as S from './styles';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

function Header() {
  return (
    <S.container>
      <S.leftSide>
        <img src={logo} alt="logo" />
      </S.leftSide>

      <S.rightSide>
        <a href="#">INÍCIO</a>
        <span className="dividir"></span>
        <a href="#">NOVA TAREFA</a>
        <span className="dividir"></span>
        <a href="#">SINCRONIZAR CELULAR</a>
        <span className="dividir"></span>
        <a href="#" id="notification">
          <img src={bell} alt="Notificação" />
          <span>5</span>
        </a>
      </S.rightSide>
    </S.container>
  );
}

export default Header;
