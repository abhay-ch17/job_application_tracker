import { useState } from "react";

const AddTask = ({ existingData, onSave, setShowForm }) => {
  const [form, setForm] = useState({
    company: existingData?.company || "",
    role: existingData?.role || "",
    status: existingData?.status || "Applied",
    dateApplied: existingData?.dateApplied || "",
    link: existingData?.link || "",
    notes: existingData?.notes || "",
  });
  const HandleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onsubmit = (e) => {
    e.preventDefault();
    onSave(form, existingData?._id);
    setShowForm(false);
  };
  const handleClose = () => {
    setShowForm(false);
  };
  return (
    <>
      <div className="w-[100%] h-[100vh] flex justify-center items-center justify-center items-center bg-gray-300">
        <div className="w-[350px] bg-white shadow-2xl rounded-xl pl-3 h-[520px] inset-shadow-sm inset-shadow-gray-200">
          <div className="flex justify-between w-[99%]">
            <p className="text-md font-semibold mt-2">Add Application</p>
            <button
              className="font-semibold mr-2"
              onClick={() => handleClose()}
            >
              x
            </button>
          </div>

          <div className="formData pt-4">
            <form
              action=""
              className="flex flex-col gap-3"
              onSubmit={(e) => onsubmit(e)}
            >
              <div>
                <p className="text-left ml-1 font-semibold text-gray-600">
                  Company name
                </p>
                <input
                  type="text"
                  placeholder="Company"
                  value={form.company}
                  onChange={HandleChange}
                  name="company"
                  className="border-1 w-[95%] h-[34px] rounded-md border-gray-200"
                  required
                />
              </div>
              <div>
                <p className="text-left ml-1 font-semibold text-gray-600">
                  Job role
                </p>
                <input
                  type="text"
                  placeholder=" title"
                  name="role"
                  value={form.role}
                  onChange={HandleChange}
                  className="border-1 w-[95%] h-[34px] rounded-md border-gray-200"
                  required
                />
              </div>
              <div>
                <p
                  className="text-left ml-1 font-semibold text-gray-600"
                  name="status"
                >
                  Status
                </p>
                <select
                  className="border-1 w-[95%] h-[34px] rounded-md border-gray-200"
                  name="status"
                  onChange={HandleChange}
                  value={form.status}
                >
                  <option value="Applied">Applied</option>
                  <option value="Interview">Interview</option>
                  <option value="Offer">Offer</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
              <div>
                <p className="text-left ml-1 font-semibold text-gray-600">
                  Date applied
                </p>
                <input
                  type="date"
                  className="border-1 w-[95%] h-[34px] rounded-md border-gray-200"
                  name="dateApplied"
                  value={form.dateApplied}
                  onChange={HandleChange}
                />
              </div>
              <div>
                <p className="text-left ml-1 font-semibold text-gray-600">
                  Job link
                </p>
                <input
                  type="text"
                  name="link"
                  placeholder=" https://..."
                  className="border-1 w-[95%] h-[34px] rounded-md border-gray-200"
                  onChange={HandleChange}
                  value={form.link}
                />
              </div>
              <div>
                <p className="text-left ml-1 font-semibold text-gray-600">
                  Notes
                </p>
                <input
                  type="text"
                  name="notes"
                  placeholder=" Referred by a friend, follow up next week..."
                  className="border-1 w-[95%] h-[34px] rounded-md border-gray-200"
                  value={form.notes}
                  onChange={HandleChange}
                />
              </div>
              <div className="actionButton flex w-[100%] gap-[20%] justify-center pt-1">
                <button
                  onClick={() => setShowForm(false)}
                  className="rounded h-[30px] w-[100px] border-1 font-bold text-sm flex items-center justify-center"
                >
                  Cancel
                </button>
                <input
                  type="submit"
                  value="Submit"
                  className="h-[30px] w-[100px] rounded border-1 font-bold text-sm bg-blue-600 border-none text-white"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTask;
