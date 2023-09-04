import PeriodPaginator from '../PeriodPaginator';
import PeriodPaginatorType from '../PeriodPaginatorType';
import { useNavigate, useParams } from 'react-router-dom';

import {
  ToolbarWrapper,
  CalendarRangeWrapper,
  CalendarRangeButton,
} from './CalendarToolbar.styled';

import { format, parse, add } from 'date-fns';

export const CalendarToolBar = ({
  isMonthPage,
  setIsMonthPage,
  currentMonth,
  setCurrentMonth,
  currentDay,
  setCurrentDay,
}) => {
  const navigate = useNavigate();
  const { currentDate } = useParams();
  const parsedCurrentDate = parse(currentDate, 'yyyy-MM-dd', new Date());
  const formattedDay =
    currentDate === undefined ? currentDay : parsedCurrentDate;

  const prevPeriod = () => {
    const parsedDate = parse(currentDate, 'yyyy-MM-dd', new Date());
    if (isMonthPage) {
      const firstDayPrevMonth = add(parsedDate, { months: -1 });
      setCurrentMonth(format(firstDayPrevMonth, 'MMM-yyyy'));
      const newDate = format(firstDayPrevMonth, 'yyyy-MM-dd');
      navigate(`month/${newDate}`);
    } else {
      const prevDay = add(parsedDate, { days: -1 });
      setCurrentDay(prevDay);
      const newDate = format(prevDay, 'yyyy-MM-dd');
      navigate(`day/${newDate}`);
    }
  };

  const nextPeriod = () => {
    const parsedDate = parse(currentDate, 'yyyy-MM-dd', new Date());
    if (isMonthPage) {
      const firstDayPrevMonth = add(parsedDate, { months: 1 });
      setCurrentMonth(format(firstDayPrevMonth, 'MMM-yyyy'));
      const newDate = format(firstDayPrevMonth, 'yyyy-MM-dd');
      navigate(`month/${newDate}`);
    } else {
      const nextDay = add(parsedDate, { days: 1 });
      setCurrentDay(nextDay);
      const newDate = format(nextDay, 'yyyy-MM-dd');
      navigate(`day/${newDate}`);
    }
  };
  const handleCurrentDay = day => {
    if (isMonthPage) {
      setCurrentMonth(format(day, 'MMM-yyyy'));
      setCurrentDay(day);
      navigate(`month/${format(day, 'yyyy-MM-dd')}`);
    } else {
      setCurrentDay(day);
      navigate(`day/${format(day, 'yyyy-MM-dd')}`);
    }
  };
  return (
    <>
      <ToolbarWrapper>
        <PeriodPaginator
          isMonthPage={isMonthPage}
          prevPeriod={prevPeriod}
          nextPeriod={nextPeriod}
          currentDay={currentDay}
          currentMonth={currentMonth}
          handleCurrentDay={handleCurrentDay}
        />

        <PeriodPaginatorType
          isMonthPage={isMonthPage}
          changeType={() => {
            setIsMonthPage(prev => !prev);
          }}
        />
      </ToolbarWrapper>

      <CalendarRangeWrapper>
        <CalendarRangeButton
          className={`onMonth ${
            isMonthPage ? 'isActive' : 'rgba(227, 243, 255, 1)'
          }`}
          onClick={() => {
            navigate(`month/${format(formattedDay, 'yyyy-MM-dd')}`);
            setIsMonthPage(prev => !prev);
          }}
        >
          Month
        </CalendarRangeButton>
        <CalendarRangeButton
          className={`onDay ${
            !isMonthPage ? 'isActive' : 'rgba(227, 243, 255, 1)'
          }`}
          onClick={() => {
            navigate(`day/${format(formattedDay, 'yyyy-MM-dd')}`);
            setIsMonthPage(prev => !prev);
          }}
        >
          Day
        </CalendarRangeButton>
      </CalendarRangeWrapper>
    </>
  );
};
