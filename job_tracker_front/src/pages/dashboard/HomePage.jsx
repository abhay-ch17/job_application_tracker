import { useContext, useEffect, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { AuthContext } from "../../AuthContext/AuthContext";
import AddTask from "./AddTask";
import axios from "axios";
import DeletePopup from "./DeletePopup";
import HeaderCounter from "./HeaderCounter";

const HomePage = () => {
  const [filter, setFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [filteredTaskList, setFilteredTaskList] = useState([]);
  const [existData, setExistData] = useState();
  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [updateId, setUpdateId] = useState(null);
  // update filter

  const filterTask = () => {
    const newTaskList = taskList.filter((item) => {
      if (filter == item.status) {
        return item;
      } else if (filter == "All") {
        return item;
      }
      return;
    });
    setFilteredTaskList(newTaskList.reverse());
  };
  useEffect(() => {
    filterTask();
  }, [filter, taskList]);

  // submit application
  const submitApplication = async (formData) => {
    try {
      if (updateId) {
        const response = await axios.patch(
          `/api/application/${updateId}`,
          formData,
          {
            withCredentials: true,
          },
        );
        if (response) {
          await fetchData();
          return true;
        }
      } else {
        const response = await axios.post(
          "/api/application",
          formData,
          {
            withCredentials: true,
          },
        );
        if (response) {
          await fetchData();
          return true;
        }
      }
    } catch (error) {
      return false;
    }
  };

  // delete column
  const getChange = async (e, item) => {
    if (e.target.value === "update") {
      setExistData(item);
      setUpdateId(item._id);
      setShowForm(true);
    } else if (e.target.value === "delete") {
      setDeleteId(item._id);
      setShowDelete(true);
    }
  };

  /////////////////////////
  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/application`, {
        withCredentials: true,
      });
      response && setTaskList(response.data);
    } catch (error) {
      setTaskList([]);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (showDelete) {
    return (
      <DeletePopup
        setDeleteId={setDeleteId}
        setShowDelete={setShowDelete}
        deleteId={deleteId}
        fetchData={fetchData}
      />
    );
  }
  if (showForm && !showDelete) {
    return (
      <AddTask
        existingData={existData}
        setShowForm={setShowForm}
        onSave={submitApplication}
      />
    );
  } else {
    return (
      <>
        <Navbar
          setShowForm={setShowForm}
          setUpdateId={setUpdateId}
          setExistData={setExistData}
        />
        {taskList.length <= 0 ? (
          <div className="w-[100%] flex justify-center items-center text-center">
            <p className="font-semibold text-2xl">NO DATA FOUND...</p>
          </div>
        ) : (
          <div className="w-[100%] h-[100%] pt-10">
            {/* update count */}

            <HeaderCounter taskList={taskList} />

            {/* both section */}
            <div className="pt-10">
              {/* updated option */}

              <div className="flex w-[100%] gap-10 pb-8">
                <p
                  className={`border-1 h-7 border-gray-400 w-24 text-md font-semibold ml-2 items-center justify-center flex rounded ${filter === "All" ? "text-white bg-gray-600" : "text-gray-800 bg-white"} cursor-pointer`}
                  onClick={() => setFilter("All")}
                >
                  All
                </p>
                <p
                  className={`border-1 h-7 border-gray-400 w-24 text-md font-semibold ml-2 items-center justify-center flex rounded ${filter === "Applied" ? "text-white bg-gray-600" : "text-gray-800 bg-white"} cursor-pointer`}
                  onClick={() => setFilter("Applied")}
                >
                  Applied
                </p>
                <p
                  className={`border-1 h-7 border-gray-400 w-24 text-md font-semibold ml-2 items-center justify-center flex rounded ${filter === "Interview" ? "text-white bg-gray-600" : "text-gray-800 bg-white"} cursor-pointer`}
                  onClick={() => setFilter("Interview")}
                >
                  Interview
                </p>
                <p
                  className={`border-1 h-7 border-gray-400 w-24 text-md font-semibold ml-2 items-center justify-center flex rounded ${filter === "Offer" ? "text-white bg-gray-600" : "text-gray-800 bg-white"} cursor-pointer`}
                  onClick={() => setFilter("Offer")}
                >
                  Offer
                </p>
                <p
                  className={`border-1 h-7 border-gray-400 w-24 text-md font-semibold ml-2 items-center justify-center flex rounded ${filter === "Rejected" ? "text-white bg-gray-600" : "text-gray-800 bg-white"} cursor-pointer`}
                  onClick={() => setFilter("Rejected")}
                >
                  Rejected
                </p>
              </div>
              {/* table data */}\
              <div className="w-[100%]">
              <table className="w-[100%]">
                <thead>
                  <tr className="border-1 text-left border-gray-300 h-[38px] text-gray-600">
                    <th className="pl-3">Company</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Date Applied</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="h-[100px] overflow-y-scroll">
                  {/* table row start */}
                  {filteredTaskList.map((item) => (
                    <tr
                      className="border-1 border-gray-300 h-[38px] text-sm font-semibold"
                      key={item._id}
                    >
                      <td className="pl-3">{item.company}</td>
                      <td>{item.role}</td>
                      <td>{item.status}</td>
                      <td>
                        {new Date(item.dateApplied).toLocaleDateString("en-IN")}
                      </td>
                      <td>
                        <select
                          name=""
                          id=""
                          onChange={(e) => getChange(e, item)}
                          className="border-none"
                        >
                          <option value="">scroll</option>
                          <option value="update">update</option>
                          <option value="delete">delete</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                  {/* table row end */}
                </tbody>
              </table>
              </div>
            </div>
          </div>
        )}

        <Footer />
      </>
    );
  }
};

export default HomePage;
