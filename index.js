const logger = require("./logger.js");

// Testes
// logger.logEvent(logger.EVENT_TYPES.INFO, "Este é um arquivo de informação!");
// logger.logEvent(logger.EVENT_TYPES.WARN, "Este texto contém um alerta!");
logger.logEvent(logger.EVENT_TYPES.INFO, "Este texto contém outra informação!");
// logger.logEvent("informacao", "uma informacao"); -> teste 