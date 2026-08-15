import { applicationModel } from "../models/ApplicationModels.js";

export const createTask = async (req, res) => {
  const { company, role, status, dateApplied, link, notes } = req.body;
  const user = req.user.id;
  try {
    const application = await applicationModel.create({
      company,
      user,
      role,
      status,
      dateApplied,
      link,
      notes,
    });
    if (!application) {
      return res
        .status(400)
        .json({ message: "something went wrong with creating status" });
    }
    res
      .status(200)
      .json({ message: "task added successfully", payload: application });
  } catch (error) {
    res.status(404).json({ message: "something went wrong" });
  }
};

export const getTask = async (req, res) => {
  const user = req.user;
  try {
    const taskList = await applicationModel.find({ user: user.id });
    if (!taskList) {
      return res.status(404).json({ message: "task not found" });
    }
    res.status(200).json(taskList);
  } catch (error) {
    res.status(404).json({ message: "something went wrong with getting task" });
  }
};

export const updateTask = async (req, res) => {
  const { company, role, status, link, notes } = req.body;
  
  const { updateId } = req.params;
  const user = req.user;
  try {
    const findTask = await applicationModel.findOne({
      user: user.id,
      _id: updateId,
    });
    if (!findTask) {
      return res.status(400).json({ message: "Task not found" });
    }
    const updateTask = await applicationModel.findOneAndUpdate(
      { user: user.id, _id: updateId },
      { company, role, status, link, notes },
      { new: true },
    );
    await updateTask.save();
    if (!updateTask) {
      return res
        .status(400)
        .json({ message: "something went wrong with updatation" });
    }
    res.status(200).json({ message: "task updated successfully" });
  } catch (err) {
    res.status(404).json({ message: "something went wrong with catch" });
  }
};

export const deleteTask = async (req, res) => {
  const user = req.user.id;
  const id = req.params.deleteId;
  try {
    const findTask = await applicationModel.findOne({ user, _id: id });
    if (!findTask) {
      return res.status(403).json({ message: "task not found" });
    }
    const deleteTask = await applicationModel.findOneAndDelete({
      user,
      _id: id,
    });
    if (!deleteTask) {
      return res.status(403).json({ message: "something went wrong" });
    }
    res.status(200).json({ message: "task ok" });
  } catch (error) {
    res.status(404).json({ message: "server error" });
  }
};
