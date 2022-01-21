import React, {useState} from 'react';
import * as S from './styles';

//Nossos componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import taskCard from '../../components/TaskCard';

function Home() {
  const [filterActived, setFilterActived] = useState('today');
        // nome do meu estado, função que atualiza meu estado.

  return (
    <S.container>
      <Header />

      <S.filterArea>
        <button type="button" onClick={() => setFilterActived("all")}>
          <FilterCard title="Todos" actived={filterActived=='all'} />
        </button>
        <button type="button" onClick={() => setFilterActived("today")}>
          <FilterCard title="Hoje" actived={filterActived=='today'} />
        </button>
        <button type="button" onClick={() => setFilterActived("week")}>
          <FilterCard title="Semana" actived={filterActived == 'week'} />
        </button>
        <button type="button" onClick={() => setFilterActived("month")}>
          <FilterCard title="Mês" actived={filterActived == 'month'} />
        </button>
        <button type="button" onClick={() => setFilterActived("year")}>
          <FilterCard title="Ano" actived={filterActived == 'year'} />
        </button>
      </S.filterArea> 

      <S.taskArea>
        <taskCard />
      </S.taskArea>

      <Footer />
    </S.container>
  );
}

export default Home;
