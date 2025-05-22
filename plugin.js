// Replace the right hand side with the words you want to use
// This will miss a few things like the one "Whyyyy" Lea says
const replacements = {
    hi: "Greetings",
    lea: "Leanne",
    bye: "Goodbye",
    how: "Explain",
    why: "Bruh",
    wait: "Hold up",
    sorry: "Chill",
    thanks: "Sweet",
    meet: "Hang out",
    who: "Name",
    what: "Huh",
    where: "Place"
}

// g: global, i: ignore case
// Builds a regex like "word 1|word 2|word 3"
// Lea's words don't overlap so we don't need to use word boundaries.
const regex = new RegExp(Object.keys(replacements).join("|"), "gi")

function _isUpperCase(text) {
    return text == text.toUpperCase()
}

function _isLowerCase(text) {
    return text == text.toLowerCase()
}

function _capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1)
}

function replaceWords(text) {
    return text.replace(regex, function (matchedWord) {
        const replacement = replacements[matchedWord.toLowerCase()]

        if (_isUpperCase(matchedWord)) {
            return replacement.toUpperCase()
        } else if (_isLowerCase(matchedWord)) {
            return replacement.toLowerCase()
        } else if (_isUpperCase(matchedWord.charAt(0))) {
            return _capitalize(replacement);
        } else {
            return replacement;
        }
    });
}

export default class ChangeLeasWords {
    prestart() {
        sc.MessageModel.inject({
            showMessage(person, message, autoContinue) {
                if (person == "main.lea" && message) {
                    message.value = replaceWords(message.value)
                }

                this.parent(person, message, autoContinue);
            },
            showSideMessage(charExpression, message, autoContinue) {
                if (charExpression.character.cacheKey == "main.lea" && message) {
                    // message is a LangLabel like in showMessage() but if
                    // we assign message.value then the original text shows
                    // up again in the pause menu history. To avoid that
                    // we reassign message to a string. I think there is an
                    // implicit conversion somewhere in showSideMessage()
                    message = replaceWords(message.value)
                }
                
                this.parent(charExpression, message, autoContinue);
            }
        });
    }
}
