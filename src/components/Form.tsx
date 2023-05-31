import {IInput} from "../controller/FormController.tsx";
export interface IFormProps {
  /**
   *
   */
  onSubmitHandler : any,
  input : IInput,
  setter: any
}
export const Form = (props : IFormProps) =>
{

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
  {
    props.setter((prevState: any) =>
    {
      return {
        ...prevState,
        [event.target.id]: event.target.value
      }
    })
  }

  return (
    <form onSubmit={props.onSubmitHandler} >
      <div className={'flex flex-col'}>
        <label htmlFor={'name'}>Name</label>
        <input onChange={onChangeHandler} id={'name'} type={'text'} />
      </div>
      <div className={'flex flex-col'}>
        <label htmlFor={'email'}>Email</label>
        <input onChange={onChangeHandler} id={'email'} type={'email'} />
      </div>
      <div className={'flex flex-col'}>
        <label htmlFor={'DOB'}>Date of Birth</label>
        <input onChange={onChangeHandler} id={'DOB'} type={'date'} />
      </div>
      <button type={'submit'}>Submit</button>
    </form>
  )
}