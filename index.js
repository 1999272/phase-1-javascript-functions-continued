// Function that returns a default activity for Saturday but allows overriding
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

// Function that returns a default activity for Monday but allows overriding
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

// Function that returns another function which wraps an adjective
function wrapAdjective(wrapper = "*") {
    return function (adjective) {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    }
}
