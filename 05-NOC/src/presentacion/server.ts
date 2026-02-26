import { CronJob } from 'cron'

export class Server {
    public static start() {
        console.log('Server started...')


        const job = new CronJob(
            '* * * * * *', // cronTime
            function () {
                console.log('You will see this message every second');
            }, // onTick
            null, // onComplete
            true, // start
            'America/Los_Angeles' // timeZone
        );
    }
}
