"use client";

interface FormProps {
  children: React.ReactNode;
  handler: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const Form: React.FC<FormProps> = ({ children, handler }) => {
  return (
    <form
      className="flex flex-col items-center justify-between h-[55%] w-full"
      onSubmit={handler}
    >
      {children}
      <button
        className="text-lg py-2 px-2 rounded text-gray-200 bg-gray-800 hover:bg-gray-600 hover:text-gray-100 transition-all"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
