const HeaderCounter = ({ taskList }) => {
  let Applied = 0;
  let Interview = 0;
  let Offer = 0;
  let Rejected = 0;
  
  taskList.length>0 && taskList.map((item) => {
    if (item.status == "Applied") {
      Applied++;
    } else if (item.status == "Interview") {
      Interview++;
    } else if (item.status == "Offer") {
      Offer++;
    } else if (item.status == "Rejected") {
      Rejected++;
    }
  });
  return (
    <>
      <div className="flex w-[100%] justify-evenly h-[180px]">
        <div className="flex flex-col justify-center items-center">
          <p className="text-gray-700 text-sm font-semibold">Applied</p>
          <p className="text-3xl font-medium">{Applied}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-gray-700 text-sm font-semibold">Interview</p>
          <p className="text-3xl font-medium">{Interview}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-gray-700 text-sm font-semibold">Offer</p>
          <p className="text-3xl font-medium">{Offer}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-gray-700 text-sm font-semibold">Rejected</p>
          <p className="text-3xl font-medium">{Rejected}</p>
        </div>
      </div>
    </>
  );
};

export default HeaderCounter;
