
const bedData = [{
    day: 'Mon',
    firstCandle: 80

}, {
    day: 'TUE',
    firstCandle: 75

}, {
    day: 'WEDS',
    firstCandle: 55

}, {
    day: 'THUR',
    firstCandle: 49
}, {
    day: 'FRI',
    firstCandle: 17
}, {
    day: 'SAT',
    firstCandle: 61
}, {
    day: 'SUN',
    firstCandle: 40
}];


export default {
    getBedData() {
        return bedData;
    },
};