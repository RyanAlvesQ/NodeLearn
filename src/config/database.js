module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "root",
  database: "learning-nodejs",
  define: {
    timestamp: true, // createdAt and updatedAT
    underscored: true,
    underscoredAll: true,
  },
};
