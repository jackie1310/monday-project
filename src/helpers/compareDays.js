export function compareDates(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
  
    // Compare only the dates, not the time
    const compareValue = (d1.setHours(0, 0, 0, 0) - d2.setHours(0, 0, 0, 0));
    return compareValue;
    // if (compareValue > 0) {
    //   return ;
    // } else if (compareValue < 0) {
    //   return `${date1} is earlier than ${date2}`;
    // } else {
    //   return `${date1} and ${date2} are the same date`;
    // }
  }

export function dateDifferenceInDays(dateString1, dateString2) {
    // Convert date strings to Date objects
    const date1 = new Date(dateString1);
    const date2 = new Date(dateString2);
  
    // Calculate the difference in milliseconds
    const timeDifference = date1 - date2;
  
    // Convert the difference to days
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    return daysDifference;
}