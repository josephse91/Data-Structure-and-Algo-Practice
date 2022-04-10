// https://leetcode.com/problems/logger-rate-limiter/

/* HASH MAP SOLUTION
    take each message and log it within an object or Map. For any argument that isn't present within the object, add that message-timestamp pair in the object and return true.

    If the message is present in the object, check if the current timestamp is at least 10 units greatest than the existing message. If so log message-timestamp pair and return true. Otherwise, return false.
*/

let Logger = function () {
    this.messages = {};
};

Logger.prototype.shouldPrintMessage = function (timestamp, message) {
    let messages = this.messages;
    if (messages[message] === undefined) {
        this.messages[message] = timestamp;
        return true;
    }
    let latestTimestamp = messages[message];

    if (timestamp >= latestTimestamp + 10) {
        this.messages[message] = timestamp;
        return true;
    }

    return false;
};

/*
let logger = new Logger();
console.log(logger.shouldPrintMessage(1, "foo")); // return true, next allowed timestamp for "foo" is 1 + 10 = 11
console.log(logger.shouldPrintMessage(2, "bar")); // return true, next allowed timestamp for "bar" is 2 + 10 = 12
console.log(logger.shouldPrintMessage(3, "foo")); // 3 < 11, return false
console.log(logger.shouldPrintMessage(8, "bar")); // 8 < 12, return false
console.log(logger.shouldPrintMessage(10, "foo")); // 10 < 11, return false
console.log(logger.shouldPrintMessage(11, "foo")); // 11 >= 11, return true, next allowed timestamp for "foo" is 11 + 10 = 21
*/
