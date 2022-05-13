const chartData = [{
    month: 'JAN',
    firstCandle: 80,
    secondCandle: 65
}, {
    month: 'FEB',
    firstCandle: 100,
    secondCandle: 32
}, {
    month: 'MAR',
    firstCandle: 55,
    secondCandle: 35

}, {
    month: 'APR',
    firstCandle: 49,
    secondCandle: 91
}, {
    month: 'MAY',
    firstCandle: 17,
    secondCandle: 16
}, {
    month: 'JUN',
    firstCandle: 61,
    secondCandle: 62
}, {
    month: 'JULY',
    firstCandle: 85,
    secondCandle: 80
}, {
    month: 'Aug',
    firstCandle: 45.,
    secondCandle: 65.,

}, {
    month: 'SEPT',
    firstCandle: 25,
    secondCandle: 65
},
{
    month: 'OCT',
    firstCandle: 65,
    secondCandle: 55,
},
{
    month: 'NOV',
    firstCandle: 55,
    secondCandle: 50

},
{
    month: 'DEC',
    firstCandle: 65,
    secondCandle: 50,
}];



export default {
    getAssertData() {
        return chartData;
    },

};
