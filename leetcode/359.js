
let Logger = function() {
    this.messages = [[]];
};


Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    let array = [timestamp, message];
    let existingMessages = Array.from(this.messages)

    for (let i = 0; i < existingMessages.length; i++) {
        if (existingMessages[i][1] === array[1]) {
            if (existingMessages[i][0] <= array[0]) {
                this.messages[i][0] = array[0] + 10;
                return true;
            } else {
                return false;
            } 
        }
    }

    this.messages.push([timestamp + 10, message])
    return true;
};

let logger = new Logger();
// console.log(logger)
// /*
console.log(logger.shouldPrintMessage(1, "foo"));  // return true, next allowed timestamp for "foo" is 1 + 10 = 11
console.log(logger.shouldPrintMessage(2, "bar"));  // return true, next allowed timestamp for "bar" is 2 + 10 = 12
console.log(logger.shouldPrintMessage(3, "foo"));  // 3 < 11, return false
console.log(logger.shouldPrintMessage(8, "bar"));  // 8 < 12, return false
console.log(logger.shouldPrintMessage(10, "foo")); // 10 < 11, return false
console.log(logger.shouldPrintMessage(11, "foo")); // 11 >= 11, return true, next allowed timestamp for "foo" is 11 + 10 = 21
// */