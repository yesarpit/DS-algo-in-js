
const mapMonth = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12
}

function solution(Y, A, B, W) {

    //find if day starts with monday
    const startMonthNumber = mapMonth[A]
    const endMonthNumber = mapMonth[B]

    console.log('startMonthNumber', startMonthNumber)
    console.log('endMonthNumber', endMonthNumber)

    const startDayOfMonth = new Date(Y, startMonthNumber - 1, 1).getDay()
    const endDayOfMonth = new Date(Y, endMonthNumber, 0).getDay();
    console.log('startDayOfMonth',startDayOfMonth);
    console.log('endDayOfMonth',endDayOfMonth);

    let weeksToSubtract = 0
    if (startDayOfMonth !== 1) {
        weeksToSubtract += 1
    }
    if (endDayOfMonth !== 0) {
        weeksToSubtract += 1
    }
    let addDays = 0
    if(startDayOfMonth !== 1){
        addDays = 7-startDayOfMonth;

    }
    console.log('addDays',addDays);

}

solution()