
class ClockDate {

    constructor(date, pattern) {
        this.date = date;
        this.pattern = pattern;
        // regex date throw error
    };

    as(format) {
        let [time, modifier] = this.date.split(" ");
        let [from_time, from_pattern] = this.pattern.split(" ");
        let [as_time, as_pattern] = this.format.split(" ");

        const format_time = () => {
            let [hours, minutes] = time.split(":");

            

            // let pattern = 
            // let [as_hours, as_minutes] = as_time.split(":");

            // switch(fHours){
            //     case "HH":

            // };

            // comparar parte por parte, o que tiver diferente ele formata

        };

        let formatted_time = format_time();

        return formatted_time;

    };

};

function clock(date, pattern) {
    return new ClockDate(date, pattern);
};

let time = clock('17:00', 'HH:mm').as('hh:mm');

console.log(time)