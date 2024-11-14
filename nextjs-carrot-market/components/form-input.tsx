interface FormInputProps {
  type:string
  placeholder:string
  required:boolean
  errors: string[]
}

export default function FormInput({
  type, placeholder, required, errors
}: FormInputProps){
  return (   
  <form className="flex flex-col-gap-3">
    <div className="flex flex-col gap-2">
      <input type={type} placeholder={placeholder} required={required} className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-1 focus:ring-2 ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400"/>
      {errors.map((error,index) =>{
        return <span key={index} className="text-red-500">{error}</span>
      })}
    </div>
  </form>)
}