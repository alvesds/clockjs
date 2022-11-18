declare module 'clock-time-handler' {
    class ClockDate {
        as(format: string): string;
    };

    export default function clock(time: string): ClockDate;
}  
