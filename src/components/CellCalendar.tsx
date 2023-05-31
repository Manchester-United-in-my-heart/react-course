export enum Day {
  Monday = 'monday',
  Tuesday = 'tuesday',
  Wednesday = 'wednesday',
  Thursday = 'thursday',
  Friday = 'friday',
  Saturday = 'saturday',
  Sunday = 'sunday'
}
export interface ICellCalendarProps {
  // TODO
  date: number,
  month: number,
  year: number,
  day: Day
}
export type CellCalendarProps = ICellCalendarProps
export const CellCalendar = (props: ICellCalendarProps) => {
  return(
    <div className={'flex-row items-center inline-block bg-black border-2 border-gray-300 text-white'}>
      <p className={''}>{props.day}</p>
      <p className={'text-2xl'}>{props.date}</p>
      <div>
        {props.month} - {props.year}
      </div>
    </div>
  )
}