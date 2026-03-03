import { envs } from './config/plugins/envs.plugin';
import { LogModel } from './data/mongo';
import { MongoDatabase } from './data/mongo/init';
import { Server } from './presentacion/server';




(async() => {
  main();
})();


async function main(){

  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME
  })


  Server.start()

/*   const newLog = await LogModel.create({
    message: 'Text message desde Mongo',
    origin: 'App.ts',
    level: 'low',

  })

  await newLog.save()

  console.log(newLog) */

 /*  
  Consultar un insert
 const logs = await LogModel.find()
  console.log(logs[1]) */

/*   Server.start();
 */  // console.log( envs );
}

