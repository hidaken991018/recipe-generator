type props = {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  disabled?: boolean;
};

export const CommonButton: React.FC<props> = ({ text, onClick, disabled, type }: props) => {

  return (
    <button className=" bg-lightBrown rounded-lg p-[10px] w-[300px] shadow-lg" onClick={onClick} disabled={disabled} type={type}>
      {text}
    </button>
  )
}