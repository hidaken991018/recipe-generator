type Props = {
  label: string
  placeholder?: string
}

export const TextInput = ({ label, placeholder }: Props) => {
  return (
    <div className="flex flex-col ">
      <label className="drop-shadow-lg text-[12px] m-[2px]" htmlFor={label}>{label}</label>
      <input className="border-2 rounded-md border-darkBrown h-[50px] p-[10px] shadow-lg" type="text" placeholder={placeholder} id={label} />
    </div>
  )
}