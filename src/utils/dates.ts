import moment from "moment";

// Function to convert timestamp to date format
export const convertTimestamp = (val: number)=>{
    return moment.unix(val).format('DD MMMM YYYY');
}