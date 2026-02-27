import { CheckService } from '../domain/use-cases/checks/check-service';
import { CronService } from './cron/cron-service'; // Ajusta la ruta

export class Server {
    public static start() {
        console.log('Servidor iniciado...');

        // Creamos una tarea que salude cada 3 segundos
        CronService.createJob('*/3 * * * * *', () => {
/*             new CheckService().execute('https://google.com')
 */            new CheckService(
    () => console.log('success'),
    (error) => console.log(error)
 ).execute('http://localhost:3000')

        });
    }
}