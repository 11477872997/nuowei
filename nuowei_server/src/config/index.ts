import {TypeOrmModuleOptions} from '@nestjs/typeorm';
interface arrangementSetting {
    host: number, //服务器端口
    jwtKey:string  //加密密钥
}
/**
 *  主要配置文件
 */
export const disposition:arrangementSetting = {
    host:9999,
    jwtKey:'lgldl'
}
// 数据库配置
export  const cfg: TypeOrmModuleOptions = {
    type: "mysql", // 数据库类型
    host: "localhost", // 主机，默认为localhost
    port: 3306,  // 端口号
    username: "root", // 用户名
    password: "root123", // 密码
    database: "nuowei", //数据库名
    synchronize: true, //根据实体自动创建数据库表， 生产环境建议关闭
    logging: true, //开启日志 开启后本地会输入sql 语句
    timezone: '+08:00', //服务器上配置的时区
    // entities: [Member,User], // 数据表实体
    entities: [__dirname+'/**/*.entity{.ts,.js}'],
    migrations: [],
    subscribers: [],
    retryAttempts:10, //尝试连接到数据库的次数（默认值10：）
    retryDelay: 3000, //连接重试之间的延迟（毫秒）（默认值3000：）
    autoLoadEntities: true,  // 自动加载实体配置，forFeature()注册的每个实体都自己动加载
}