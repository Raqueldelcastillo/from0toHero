const log = require("npmlog");

log.silly("Silly message");
log.verbose("Verbose Message");
log.info("Prefix", "Info Message");
log.http("HTTP message");
log.warn("Warning message");
const errorCode = 500;
log.error("Error", "Message: %d", errorCode);
