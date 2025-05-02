const winston = require("winston");
const { LOGS_DB_URL } = require("./server.config");
require("winston-mongodb");

const allowedTransports = [];

// Below transport configuration enabled logging in console
allowedTransports.push(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      //second arguemnt to the combine method, what is excitly going to printed in log
      winston.format.printf(
        (log) => `${log.timestamp} [${log.level}] : ${log.message}`
      )
    ),
  })
);

// Below transport configuration enabled logging in mongodb database
allowedTransports.push(
  new winston.transports.MongoDB({
    level: "error",
    db: LOGS_DB_URL,
    collection: "logs",
  })
);

// Below transport configuration enabled logging in file system
allowedTransports.push(
  new winston.transports.File({
    filename: "app.log",
  })
);

const logger = winston.createLogger({
  //default formatting
  format: winston.format.combine(
    //first argument to the combine method is defining how we want timestamp to come up
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    //second arguemnt to the combine method, what is excitly going to printed in log
    winston.format.printf(
      (log) => `${log.timestamp} [${log.level.toUpperCase()}] : ${log.message}`
    )
  ),
  transports: allowedTransports,
});

module.exports = logger;
