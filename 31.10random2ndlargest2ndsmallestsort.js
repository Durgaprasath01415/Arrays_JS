temp=0;
let number =[];
for ( count=0; count<10; count++ ){
    let numbers = Math.floor(Math.random()*(1000-100)+100)
        number.push(numbers); 
}
console.log("Array is : " +number);

for ( count1=0; count1<10; count1++ ){
        for (count2=count1+1; count2<10; count2++ ){
                if (number[count1] < number[count2] ){
                        temp = number[count1];
                        number[count1] = number[count2];
                        number[count2] = temp;
                }
            }
        }
console.log("secondlargest element = " +number[1]);
console.log("array is sort in descending = " +number);

for ( count3=0; count3<10; count3++ ) {
        for (count4=count3+1; count4<10; count4++ ) {
                if (number[count3] > number[count4] ) {
                        temp = number[count3];
                        number[count3] = number[count4];
                        number[count4] = temp;
                }
            }
        }
console.log("secondsmallest element=" +number[1]);
console.log("array is sort in ascending= " +number);
