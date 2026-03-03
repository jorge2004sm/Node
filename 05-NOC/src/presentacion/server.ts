import { CheckService } from '../domain/use-cases/checks/check-service';
import { FileSystemDatasource } from '../infrastructure/datasources/file-system.datasource';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';
import { CronService } from './cron/cron-service';

import { envs } from '../config/plugins/envs.plugin';
import { EmailService } from './email/email.service';


const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource(),
);



export class Server {

  public static start() {

    console.log( 'Server started...' );

    // console.log(envs.MAILER_SECRET_KEY, envs.MAILER_EMAIL)

    // Mandar email
    const emailService = new EmailService()
    emailService.sendEmail({
      to: 'jorgesanchezmarin04@gmail.com',
      subject: 'Hola prueba',
      htmlBody:`
        <h3>Hola Jorge programa Gmail Mailer</h3>
        
      `
    })

    
    // CronService.createJob(
    //   '*/5 * * * * *',
    //   () => {
    //     const url = 'https://google.com';
    //     new CheckService(
    //       fileSystemLogRepository,
    //       () => console.log( `${ url } is ok` ),
    //       ( error ) => console.log( error ),
    //     ).execute( url );
    //     // new CheckService().execute( 'http://localhost:3000' );
        
    //   }
    // );


  }


}

