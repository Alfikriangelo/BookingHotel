import User from "../models/User.js";

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params._id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    next();
  }
};
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params._id);
    res.status(200).json("User has been deleted");
  } catch (error) {
    next();
  }
};
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params._id);
    res.status(200).json(user);
  } catch (error) {
    next();
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next();
  }
};
