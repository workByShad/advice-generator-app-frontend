interface FormProps {
  children: React.ReactNode;
}

const Card: React.FC<FormProps> = ({ children }) => {
  return (
    <div className="bg-[hsl(217,19%,24%)] flex flex-col items-center justify-evenly h-[42vh] w-[32.5vw] rounded-[15px] px-[50px]">
      {children}
    </div>
  );
};

export default Card;
