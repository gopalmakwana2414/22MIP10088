const users = [];

const registerUser = async (req, res) => {
  try {
    const { name, email, mobile, github, regNo } = req.body;

    if (!name || !email || !mobile) {
      return res.status(400).json({
        success: false,
        message: "missing required fields"
      });
    }

    const existingUser = users.find(
      (u) => u.email === email
    );

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "user already exists"
      });
    }

    const user = {
      id: Date.now(),
      name,
      email,
      mobile,
      github,
      regNo
    };

    users.push(user);

    res.status(201).json({
      success: true,
      user
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email } = req.body;

    const user = users.find(
      (u) => u.email === email
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found"
      });
    }

    res.status(200).json({
      success: true,
      token: "sample_token_123",
      user
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

module.exports = {
  registerUser,
  loginUser
};