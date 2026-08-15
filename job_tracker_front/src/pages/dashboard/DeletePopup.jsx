import axios from "axios";

const DeletePopup = ({ setDeleteId, setShowDelete, deleteId, fetchData }) => {
  async function submitHandler() {
    try {
      const response = await axios.delete(
        `http://localhost:3000/jobTracker/api/application/${deleteId}`, {withCredentials:true}
      );
      if (response) {
        fetchData();
        return true;
      }
    } catch (error) {
      return false;
    }finally{
        setShowDelete(false);
    }
  }

  return (
    <>
      <div className="w-[100%] h-[100vh] justify-center flex items-center">
        <div className="w-[450px] h-[220px] justify-center text-center shadow-2xl rounded shadow-taupe-400 pt-5">
          <p className="font-bold text-4xl">Do you want to delete?</p>
          <div className="flex w-[100%] pt-[85px] justify-evenly">
            <button
              className="w-[100px] rounded text-white h-[40px] bg-green-600 text-md uppercase font-semibold
                    "
              onClick={() => setShowDelete(false)}
            >
              Cancel
            </button>
            <button
              className="w-[100px] rounded text-white h-[40px] bg-red-600 text-md uppercase font-semibold
                    "
              onClick={() => submitHandler()}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeletePopup;
