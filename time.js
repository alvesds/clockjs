
class ClockDate {

    constructor(date, pattern) {
        this.date = date;
        this.is_invalid = false;
        // regex date throw error
    };

    as(format) {

        if (this.is_invalid) return "Invalid Date"

        let [time, modifier] = this.date.split(" ");
        let [as_time, as_modifier] = format.split(" ");

        const format_time = () => {
            let [hours, minutes, seconds] = time.split(":");
            let [as_hours, as_minutes, as_seconds] = as_time.split(":")

            // reference: HH - 24, hh - 12

            if (!modifier) {
                //date is 24 hours

                let new_hours, new_minutes, new_seconds, new_modifier;

                if (as_hours == 'HH') {
                    new_hours = hours;
                };

                if (as_hours == 'hh') {

                    if (parseInt(hours) > 12) {
                        new_hours = `${parseInt(hours) - 12}`;
                        new_modifier = "pm";
                    } else {
                        if (parseInt(hours) == 0) {
                            new_hours = "12"
                        } else {
                            new_hours = hours
                        }
                        new_modifier = "am";
                    };

                    if (as_modifier == 'A') {
                        new_modifier = new_modifier.toUpperCase();
                    };
                    if (as_modifier == 'a') {
                        new_modifier = new_modifier.toLowerCase();
                    }
                };

                if (as_minutes) {
                    new_minutes = minutes || "00";
                };

                if (as_seconds) {
                    new_seconds = seconds || "00";
                };

                return `${[
                    new_hours,
                    ...(new_minutes ? [new_minutes] : []),
                    ...(new_seconds ? [new_seconds] : [])
                ].join(":")}${new_modifier ? ` ${new_modifier}` : ""}`

            } else {
                // date is 12 hours
            }

        };

        let formatted_time = format_time();

        return formatted_time;

    };

};

function clock(date, pattern) {
    return new ClockDate(date, pattern);
};

let time = clock('18:42').as('HH:mm');

console.log(time)