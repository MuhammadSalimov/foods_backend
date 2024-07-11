require("dotenv/config");
const { connect } = require("mongoose");

const runner = (app) => {

  const bootstrap = async () => {
    try {
      const PORT = process.env.PORT;
      const DB_URI = process.env.DB_URI;
      await connect(DB_URI).then(() => console.log("successfuly connect to database"));
      app.listen(PORT, () => {
        console.log(`Server started in http://localhost:${PORT}`);
      });
    } catch (error) {
      console.log(error);
    }
  };

  bootstrap();
  
};

module.exports = runner;
