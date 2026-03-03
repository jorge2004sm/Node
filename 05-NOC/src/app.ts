import { envs } from './config/plugins/envs.plugin';
import { Server } from './presentacion/server';




(async() => {
  main();
})();


function main(){
  Server.start();
  // console.log( envs );
}

