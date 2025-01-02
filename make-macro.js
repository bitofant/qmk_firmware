const fs = require("fs");
const { argv } = require('node:process');

const macro = argv[argv.length - 1];
console.log(`creating macro for: ${macro}`);

let output = "SEND_STRING(";
for (let i = 0; i < macro.length; ++i) {
    let letter = macro[i];
    output += (i > 0 ? " SS_DELAY(MACRO_DELAY) " : "") + tapKey(letter);
}
output += ");";

/**
 * @see <a href="quantum/send_string_keycode.h">send_string_keycode.h</a>
 * @param {string} letter
 * @returns
 */
function tapKey(letter) {
    if (letter >= "a" && letter <= "z") {
        return `SS_TAP(X_${letter.toUpperCase()})`;
    } else if (letter >= "A" && letter <= "Z") {
        return `SS_LSFT(SS_TAP(X_${letter}))`;
    } else if (letter >= "0" && letter <= "9") {
        return `SS_TAP(X_${letter})`;
    } else {
        /*
            X_ENTER
            X_ESCAPE
            X_BSPACE
            X_TAB
            X_SPACE
            X_MINUS
            X_EQUAL
            X_LBRACKET
            X_RBRACKET
            X_BSLASH
            X_NONUS_HASH
            X_SCOLON
            X_QUOTE
            X_GRAVE
            X_COMMA
            X_DOT
            X_SLASH
        */
        switch (letter) {
            case "!":
                return `SS_LSFT(SS_TAP(X_1))`;
            case "@":
                return `SS_LSFT(SS_TAP(X_2))`;
            case "#":
                return `SS_LSFT(SS_TAP(X_3))`;
            case "$":
                return `SS_LSFT(SS_TAP(X_4))`;
            case "%":
                return `SS_LSFT(SS_TAP(X_5))`;
            case "^":
                return `SS_LSFT(SS_TAP(X_6))`;
            case "&":
                return `SS_LSFT(SS_TAP(X_7))`;
            case "*":
                return `SS_LSFT(SS_TAP(X_8))`;
            case "(":
                return `SS_LSFT(SS_TAP(X_9))`;
            case ")":
                return `SS_LSFT(SS_TAP(X_0))`;
            case "\t":
                return `SS_TAP(X_TAB)`;
            case " ":
                return `SS_TAP(X_SPACE)`;
            case "-":
                return `SS_TAP(X_MINUS)`;
            case "=":
                return `SS_TAP(X_EQUAL)`;
            case "[":
                return `SS_TAP(X_LBRACKET)`;
            case "]":
                return `SS_TAP(X_RBRACKET)`;
            case "{":
                return `SS_LSFT(SS_TAP(X_LBRACKET))`;
            case "}":
                return `SS_LSFT(SS_TAP(X_RBRACKET))`;
            case "\\":
                return `SS_TAP(X_BSLASH)`;
            // case "":
            //     return `SS_TAP(X_NONUS_HASH)`;
            case ";":
                return `SS_TAP(X_SCOLON)`;
            case ":":
                return `SS_LSFT(SS_TAP(X_SCOLON))`;
            case "'":
                return `SS_TAP(X_QUOTE)`;
            case '"':
                return `SS_LSFT(SS_TAP(X_QUOTE))`;
            case "`":
                return `SS_TAP(X_GRAVE)`;
            case ",":
                return `SS_TAP(X_COMMA)`;
            case "<":
                return `SS_LSFT(SS_TAP(X_COMMA))`;
            case ".":
                return `SS_TAP(X_DOT)`;
            case ">":
                return `SS_LSFT(SS_TAP(X_DOT))`;
            case "/":
                return `SS_TAP(X_SLASH)`;
            case "?":
                return `SS_LSFT(SS_TAP(X_SLASH))`;
        }
    }
    throw new Error(`can't translate letter '${letter}' to macro instruction`);
}

fs.writeFile("make-macro.txt", output, "utf8", (error) => {
    if (error) {
        throw error;
    }
    console.log("done;");
});
