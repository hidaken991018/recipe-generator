type Props = {
  label: string
  placeholder?: string
  choices: string[]
}

export const SelectBox = ({ label, placeholder, choices }: Props) => {
  return (
    <div className="flex flex-col ">
      <label className="drop-shadow-lg text-[12px] m-[2px]" htmlFor={label}>{label}</label>
      <select className="border-2 rounded-md border-darkBrown h-[50px] p-[10px] appearance-none shadow-lg" id={label}>
        {choices.map((choice) => (
          <option key={choice} value={choice}>{choice}</option>
        ))}
      </select>
    </div>
  )
}