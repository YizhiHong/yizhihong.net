const withTimeParser = time => {
    let times = time.split(" ")
    return times[1] + " "+ times[3]
}

const withParser = time => {
    let times = time.split(" ")
    return times[1] + " "+ times[3]
}


export { 
    withTimeParser,
    withParser
}