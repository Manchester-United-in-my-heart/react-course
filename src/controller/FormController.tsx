import {Form} from "../components/Form.tsx";
import {useState} from "react";
export interface IInput {
  name: string,
  email: string,
  DOB: string
}
export const FormController = () =>
{
  const [input, setInput] = useState<IInput>({
    name: '',
    email: '',
    DOB: ''
  })
  console.log(input)
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) =>
  {
    event.preventDefault()
    console.log(input)
  }
  return (
    <Form input={input} setter={setInput} onSubmitHandler={onSubmitHandler} />
  )
}