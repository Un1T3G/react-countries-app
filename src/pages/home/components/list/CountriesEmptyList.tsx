import { BiErrorCircle } from 'react-icons/bi'

export default () => {
  return (
    <div className="flex flex-col items-center w-full min-h-full justify-center flex-1 text-dark-blue dark:text-white">
      <BiErrorCircle size="95px"/>
      <h1 className="text-[25px] font-extrabold md:text-[38px]">Not found country</h1>
    </div>
  )
}
