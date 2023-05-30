// import data from './data.json'
// import Fuse from "fuse.js";
// import {z} from 'zod'
// import {useForm} from "react-hook-form";
// import {useEffect, useState} from "react";
// import {FaSearch} from "react-icons/fa";
//
// type Medcal = {
//    name: string
//    description: string
// }
// const App = () =>
// {
//   const convertdata = data as Medcal[]
//   const { register, handleSubmit, watch, formState: { errors } } = useForm({
//     mode: 'all'
//   });
//   const [search, setSearch] = useState('')
//   const [searchResults, setSearchResults] = useState(convertdata)
//   console.log(searchResults)
//   const fuse = new Fuse(data, {
//     keys: [
//       'name',
//       'description'
//       ],
//     threshold: 0.1
//   })
//   const onSubmit = (data: any) => {
//     console.log(data)
//   }
//   const onChangeHandler = (e: any) =>
//   {
//     const searchKey = e.target.value
//     const searchResults = searchKey === '' ? convertdata : fuse.search(searchKey).map(result => result.item)
//     setSearchResults(searchResults)
//   }
//   return(
//     <>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className={'flex justify-center items-center'}>
//           <label><FaSearch/></label>
//           <input className={'border-2 border-gray-400'} {...register('searchKey')} type="text" onChange={onChangeHandler} />
//         </div>
//       </form>
//       <p></p>
//       <div className={'text-center'}>
//         {searchResults.map((item: Medcal) => (
//           <div>
//             <div>{item.name} - {item.description} </div>
//           </div>
//         ))
//         }
//       </div>
//     </>
//   )
// }
//
// export default App



import {useForm} from "react-hook-form";
import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";

 const FormValues = z.object({
  name: z.string().min(5, 'độ dài nhỏ nhất là 5'),
  age: z.number().min(18, 'tuổi nhỏ nhất là 18')
})

type FormValuesType = z.infer<typeof FormValues>

const App = () =>
{
  const {register, handleSubmit, watch, formState: {errors}} =
    useForm<FormValuesType>(
    {
      resolver: zodResolver(FormValues),
      mode: 'all',
    }
  )
  console.log(FormValues)
  console.log(watch('name'))
  const onSubmitHandler =  (data:any) =>
  {
    console.log(data)
  }
  return(
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={'border-2'}><input {...register('name')} /></div>
      {errors.name && <p className = "text-red-600">{errors.name.message}</p>}
      <div> <input type={'submit'}/> </div>
    </form>
  )
}

export default App