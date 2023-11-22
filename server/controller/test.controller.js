const getTest = (req, res) => {
  res.status(200).json({ message: "welcome test" });
};

module.exports = getTest;
