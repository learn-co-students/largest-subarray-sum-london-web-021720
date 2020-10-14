const largestSubarraySum = (array) => {
    let answer = 0
    let currentMax = 0
    let max = 0
    for (let i = 0; i < array.length; i++) {
        let previous = answer
        if ((answer === 0) && (array[i] < 0)) {
            // This step is to check whether we are adding negative to already 0
            // Otherwise we just add the number as normal
        } else {
            answer = answer + array[i]
            
        }
        if (previous > answer) {
            // This step is to see whether we have added a negative number
            // However there may be a benefit here
            // What we need to decide is whether to continue as there is a benefit to adding the negative with more positive coming
            // We need to keep track of the numbers and the current max whilst we restart or not
            if (array[i]*-1 < array[i + 1]) {
            } else {
                currentMax = previous
                max = currentMax
            }
        } else {
            currentMax = answer
        }
    }
    if (max > currentMax) {
        answer = max
    } else {
        answer = currentMax
    }
    return answer
}