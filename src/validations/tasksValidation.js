export const validateCreateTask = (req, res, next) => {
  const { title } = req.body; // Destructuring object
  if (!title || typeof title !== "string" || title.trim() === "") {
    return res
      .status(400)
      .json({ error: "Title is required and must not be empty." });
  }
  next();
};
