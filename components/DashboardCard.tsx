const DashboardCard: React.FC = () => {
  return (
    <main className="bg-[hsl(217,19%,24%)] flex flex-col justify-between items-center w-[80vw] h-[80vh] border-4 border-red-500">
      <h1>Dashboard</h1>
      <div>
        <h2>your advices:</h2>
        <div className="flex flex-col justify-evenly items-center w-[60vw] h-[65vh] border-4 border-red-500">
          <p className="w-[50vw] h-[10vh] border-4 border-red-500">item</p>
          <p className="w-[50vw] h-[10vh] border-4 border-red-500">item</p>
          <p className="w-[50vw] h-[10vh] border-4 border-red-500">item</p>
          <p className="w-[50vw] h-[10vh] border-4 border-red-500">item</p>
          <p className="w-[50vw] h-[10vh] border-4 border-red-500">item</p>
        </div>
      </div>
    </main>
  );
};

export default DashboardCard;
