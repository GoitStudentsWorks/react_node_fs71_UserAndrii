import { CalendarTable } from '../CalendarTable/CalendarTable';
import { MonthCalendarHead } from '../MonthCalendarHead/MonthCalendarHead';

export const ChoosedMonth = ({
  currentDay,
  days,
  allTasks,
  setIsMonthPage,
  week,
  setCurrentDay,
}) => {
  return (
    <>
      <MonthCalendarHead week={week} />
      <CalendarTable
        monthDays={days}
        setIsMonthPage={setIsMonthPage}
        currentDay={currentDay}
        setCurrentDay={setCurrentDay}
        allTasks={allTasks}
      />
    </>
  );
};
