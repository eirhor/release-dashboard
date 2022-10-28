
import { log, logType } from "./log.ts";

log(logType.success, "Things are going amazingly well!");
log(logType.error, "Oh my, something just went very wrong!");
log(logType.info, "Just a heads up: I started doing something");
log(logType.warning, "Be careful. Something looks dodgy");
log(logType.debug, "Debugging - looking and logging a whole lot");
log(logType.progress, "Progressing - doing something that takes a while");
