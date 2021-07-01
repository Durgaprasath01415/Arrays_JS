let array = [];

for ( count=0; count<10; count++ ){
        let number = Math.floor( Math.random()*(1000-100)+100 );
        array.push(number);
    }
console.log( "Array is : " +array);

largest = array[0]
secondGreatest = 0

for( count1=1; count1 < array.length; count1++ ){
        if ( array[count1] > largest ){
                secondGreatest=largest
                largest=array[count1]
                }
        else if ( array[count1] > secondGreatest )
        {
                secondGreatest=array[count1]
                }
            }
console.log("second_Greatest= " +secondGreatest)

smallest = array[0]
secondsmallest = 0

for( count2=1; count2 < array.length; count2++ ){
        if (array[count2] < smallest){
                secondsmallest=smallest
                smallest=array[count2]
            }
        else if ( array[count2] < secondsmallest )
        {
                secondsmallest=array[count2]
                }
            }
console.log("second_Smallest= " +secondsmallest)
