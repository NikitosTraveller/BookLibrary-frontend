export abstract class DateHelper
{
    static FormatDate(dateTime : string) : string
    {
        let date = new Date(dateTime);
        let month = ("0" + (date.getMonth() + 1)).slice(-2);
        let day  = ("0" + (date.getDate())).slice(-2);
        let year = date.getFullYear();
        let hour =  ("0" + (date.getHours())).slice(-2);
        let min =  ("0" + (date.getMinutes())).slice(-2);

        return year + "-" + month + "-" + day + " " + hour + ":" +  min;
    }
}