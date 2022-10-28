export enum logType {"init", "success","error","info","warning","debug","progress"};


const postStyle = "font-weight: normal;"

export const log = (type: logType, message: string) => {
    const color = {
        success: "green",
        error: "red",
        info: "blue",
        warning: "yellow",
        debug: "purple",
        progress: "lightgreen",
        init: ""
    }[logType[type]];

    const emoji = {
        success:    "✅",
        error:      "❌",
        info:       "💬",
        warning:    "⚠️ ",
        debug:      "🐛",
        progress:   "🐌",
        init:       "⌛"        
    }[logType[type]]

    const preStyle = `color: ${color}; font-weight: bold;`;

    console.log(`${emoji}  %c${logType[type].padEnd(12," ")}%c${message}`, preStyle, postStyle);
}