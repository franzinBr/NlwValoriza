const defaultTimesInSeconds = {
    milisec: 0.001,
    sec: 1,
    min: 60,
    hour: 3600,
    day: 86400
}

class ConvertTimes {

    static convert(time: string, convertTo = 'milisec') {
        let prefix = Number(time.split(/[a-zA-Z]+/)[0]);
        let sufix = time.split(/\d+/g).pop()
        return (prefix*defaultTimesInSeconds[sufix])/defaultTimesInSeconds[convertTo]
    }
}

export { ConvertTimes }

