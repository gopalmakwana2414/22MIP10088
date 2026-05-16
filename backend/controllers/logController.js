const createLog = async (req, res) => {
  try {
    const {
      stack,
      level,
      packageName,
      message
    } = req.body;

    if (
      !stack ||
      !level ||
      !packageName ||
      !message
    ) {
      return res.status(400).json({
        success: false,
        message: "all fields are required"
      });
    }

    const log = {
      id: Date.now(),
      stack,
      level,
      packageName,
      message,
      createdAt: new Date()
    };

    res.status(201).json({
      success: true,
      log
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

module.exports = {
  createLog
};