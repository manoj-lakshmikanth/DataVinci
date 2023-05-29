import { BsFillBarChartFill, BsFillCalendarWeekFill } from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai';
import { ImLocation2 } from 'react-icons/im';
import { GiChaingun, GiWorld, GiNotebook, GiModernCity } from 'react-icons/gi';

export const sidebarDetails = [
  { icon: <BsFillBarChartFill size={30} />, name: 'Intensity' },
  { icon: <AiFillLike size={30} />, name: 'Likelihood' },
  { icon: <GiChaingun size={30} />, name: 'Relevance' },
  { icon: <BsFillCalendarWeekFill size={30} />, name: 'Year' },
  { icon: <GiWorld size={30} />, name: 'Country' },
  { icon: <GiNotebook size={30} />, name: 'Topics' },
  { icon: <ImLocation2 size={30} />, name: 'Region' },
  { icon: <GiModernCity size={30} />, name: 'City' },
];
