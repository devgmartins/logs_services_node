const fs = require("node:fs/promises");

const EVENT_TYPES = {
    INFO: "info",
    ERROR: "error",
    WARN: "warn",
    DEBUG: "debug"
}

const timestamp = () => {
    return new Date().toISOString();
}

async function logEvent(event, message, logFilePath = "logs.txt") {

    if (!Object.values(EVENT_TYPES).includes(event)) {
        throw new Error(`Tipo de evento inválido: ${event}`);
    }

    let logMessage = `[${timestamp()}] [${event}] [${message}]\r\n`;

    try {
        await fs.appendFile(logFilePath, logMessage, "utf-8");
    } catch (error) {
        await logEvent(EVENT_TYPES.ERROR, `ERRO ao registrar log: ${error.message}`, logFilePath);
        throw error;
    }
}

module.exports = {
    timestamp,
    logEvent,
    EVENT_TYPES
}