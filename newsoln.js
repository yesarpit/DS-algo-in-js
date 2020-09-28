// weekDayDict ={'Sunday': 0 ,'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 'Thursday': 4, 'Friday': 5,'Saturday': 6}

const mapMonth = {
    'January' : 1,
    'February':2,
    'March':3,
    'April':4,
    'May':5,
    'June':6,
    'July':7,
    'August':8,
    'September':9,
    'October':10,
    'November':11,
    'December':12
}


function getFirstMondayDate(A , Y){
    for(i = 1; i<8;i++)
    {
        var str = "" + i + " " + A + " " + Y
        if (new Date(str).getDay() == 1)
        {
            return new Date(str)	
        }

	}
}

function getLastSundayDate(B , Y){
    lastDate = new Date(); 
	lastDate.setFullYear( Y , mapMonth[B], 0 );
	lastDate= lastDate.getDate()


    for(i = lastDate ; i>0;i--)
    {
        var str = "" + i + " " + B + " " + Y
        if (new Date(str).getDay() === 0)
        {
            return new Date(str)
        }

	}
}



Y = 2007
A = "October"
B="November"
W="whatever"

lastSundayDate = getLastSundayDate(B , Y)
firstMondayDate = getFirstMondayDate(A , Y)

numberOfDays = ((  lastSundayDate -  firstMondayDate ) / 8.64e+7 + 1)/ 7

console.log(numberOfDays)