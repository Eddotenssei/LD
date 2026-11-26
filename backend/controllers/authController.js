const account = {
  email: "admin@gmail.com",
  password: "123456",
};

export const login = (req, res) => {
  const { email, password } = req.body;

  if (email === account.email && password === account.password) {
    return res.status(200).json({
      message: "Login successful",
    });
  }

  res.status(401).json({
    message: "Invalid email or password",
  });
};