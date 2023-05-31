import {CellCalendar, ICellCalendarProps, Day} from "../components/CellCalendar.tsx";
import {useState} from "react";
export const DateController = () =>
{
  const WeeklyDay = Object.keys(Day).map((key) => Day[key as keyof typeof Day])
  const CellCalendarInstance: ICellCalendarProps = {
    date: 10,
    month: 10,
    year: 2021,
    day: Day.Friday
  }

  const [CellCalendarState, setCellCalendarState] = useState<ICellCalendarProps>(CellCalendarInstance)
  const PreviousHandler= () =>
  {
    setCellCalendarState({
      date: CellCalendarState.date - 1,
      month: CellCalendarState.month,
      year: CellCalendarState.year,
      day: WeeklyDay[(WeeklyDay.indexOf(CellCalendarState.day) - 1 + WeeklyDay.length) % WeeklyDay.length]
    })
  }
  const NextHandler= () =>
  {
    setCellCalendarState({
      date: CellCalendarState.date + 1,
      month: CellCalendarState.month,
      year: CellCalendarState.year,
      day: WeeklyDay[(WeeklyDay.indexOf(CellCalendarState.day) + 1) % WeeklyDay.length]
    })
  }

  return(
    <div>
      <CellCalendar {...CellCalendarState} />
      <div>
        <button onClick={PreviousHandler} type={'button'}>Previous Day</button>
        <button onClick={NextHandler} type={'button'}>Next Day</button>
      </div>
    </div>
  )
}