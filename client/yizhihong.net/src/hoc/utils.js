const withTimeParser = time => {
    let times = time.split(" ")
    return times[1] + " "+ times[3]
}

const withDateSorter = (dateArr) => {
    dateArr.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.date) - new Date(a.date);
    });
}

const withDetailsParser = (data, type) => {
    let obj = JSON.parse(data)
    // switch(type) {
    //     case 'Education':
            

    //     case 'Experience':

    //     default:

    // }
    return obj
}


export { 
    withTimeParser,
    withDateSorter,
    withDetailsParser
}