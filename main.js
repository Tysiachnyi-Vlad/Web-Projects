/*
 * Write a function that prints the temperature closest to 0 among input data.
 * If two numbers are equally close to zero, positive integer has to be considered closest 
 * to zero (for instance, if the temperatures are -5 and 5, then display 5)
*/
const temps = [
    '1 -1 -3 3 2',
    '-4 -2 -111',
    '12 -1 3 6 2 9',
    '12 2 6 9 -2 7',
    '-5 -4 -2 7 -20 4 2 18 11 5',
    ''
];
// ---

// Receive string of temps one after each other
function outputTemp(tempRow) {
   var arr =  tempRow.split(' ');
   var closeNumber = isNaN(parseInt(arr[0])) ? 0 : parseInt(arr[0]);

    arr.forEach(function(el) {
        el = parseInt(el);
        if(el < 0) {
            closeNumber = Math.abs(el) < Math.abs(closeNumber) ? el : closeNumber;
            
        } else {
            closeNumber = el < closeNumber ? el : closeNumber;
            if(Math.abs(closeNumber) === el) {
               closeNumber = el;
            } 
        }
       
    });    
    return closeNumber;
}