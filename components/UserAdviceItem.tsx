import { DocumentData } from "firebase/firestore";

const UserAdviceItem = ({
  advice,
  onDelete,
}: {
  advice: [string, DocumentData];
  onDelete: (id: string) => void;
}) => {
  return (
    <div className="flex flex-row items-center justify-between h-[28%] px-4 rounded-lg w-full  bg-gray-800 hover:shadow-[0px_0px_10px_#6788B8] transition-shadow duration-200">
      <p className="text-gray-200 text-lg">{advice[1].adviceText}</p>

      <button
        className="text-sm p-1 rounded text-gray-200 bg-gray-900 hover:bg-gray-600 hover:text-red-400 transition-all"
        type="button"
        onClick={() => onDelete(advice[0])}
      >
        Delete
      </button>
    </div>
  );
};

export default UserAdviceItem;
