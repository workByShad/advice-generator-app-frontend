"use client";

interface FormProps {
  children: React.ReactNode;
  handler: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const Form: React.FC<FormProps> = ({ children, handler }) => {
  return (
    <form
      className="flex flex-col items-center justify-around h-full w-full"
      onSubmit={handler}
    >
      {children}
      <button className="text-black" type="submit">
        Submit{/* create account or login */}
      </button>
    </form>
  );
};

export default Form;
