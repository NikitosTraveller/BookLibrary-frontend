import moment from 'moment';

export abstract class DateHelper
{
    static FormatDate(dateTime : string) : string
    {
        const date = new Date(dateTime);
        return (moment(date)).format('YYYY-MMM-DD HH:mm');
    }
}