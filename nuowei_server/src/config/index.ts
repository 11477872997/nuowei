import { createConnection } from 'typeorm';
const path = require('node:path');
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

createConnection({
    type: "mysql", // 数据库类型
    host: "localhost", // 主机，默认为localhost
    port: 3306,  // 端口号
    username: "root", // 用户名
    password: "root123", // 密码
    database: "nuowei", //数据库名
    synchronize: true, //根据实体自动创建数据库表， 生产环境建议关闭
    logging: false, //开启日志 开启后本地会输入sql 语句
    timezone: '+08:00', //服务器上配置的时区
    entities: [path.join(__dirname, '../entity/*.js')],
    migrations: [],
    subscribers: [],
  })
    .then(connection => {
      // 这里可以写实体操作相关的代码
    //   console.log('connection',connection);
    
    })
    .catch(error => console.log(error));

    