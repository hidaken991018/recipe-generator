import { forwardRef } from "react"

type Props = {
  label: string
  choices: string[]
}

export const SelectBox = forwardRef<HTMLSelectElement, Props>(({ label, choices, ...props }, ref) => {
  return (
    <div className="flex flex-col ">
      <label className="drop-shadow-lg text-[12px] m-[2px]" htmlFor={label}>{label}</label>
      <select className="border-2 rounded-md border-darkBrown h-[50px] p-[10px] appearance-none shadow-lg" id={label} {...props} ref={ref}>
        {choices.map((choice) => (
          <option key={choice} value={choice}>{choice}</option>
        ))}
      </select>
    </div>
  )
})