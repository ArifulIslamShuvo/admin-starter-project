export const months = [
    "January", "Februay", "March", 
    "April", "May", "June", 
    "July", "August", "September", 
    "October", "November", "December"
]

export const days = [
    "Sunday", "Monday", "Tuesday", 
    "Wednesday", "Thursday", "Friday", "Saturday"
]

export function getDaysInMonth(month, year) {
    let date = new Date(year, month, 1);
    let days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
}

export function ymd(date) {
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
}