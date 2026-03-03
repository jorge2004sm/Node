import { LogModel } from "../../data/mongo";
import { LogEntity, LogSeverityLevel } from "../entities/log.entity";
import { LogDatasource } from "./log.datasource";

export class MongoLogDatasource implements LogDatasource{
    async saveLog(log: LogEntity): Promise<void> {
        const newLog = await LogModel.create(log)
        console.log('Mongo Log create', newLog.id)
    }
    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        const logs = await LogModel.find({
            level: severityLevel
        })

        return logs.map(mongoLog => LogEntity.fromObject(mongoLog))
    }
    
}