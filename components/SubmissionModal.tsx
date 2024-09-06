interface SubmissionModalProps {
  message: string;
  isVisible: boolean;
}

const SubmissionModal: React.FC<SubmissionModalProps> = ({
  message,
  isVisible,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed w-screen h-screen flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div
        className="bg-white text-black p-6
     rounded-lg"
      >
        <p className="">{message}</p>
      </div>
    </div>
  );
};

export default SubmissionModal;
