import { DataSource } from 'typeorm';
import * as path from 'path';
// 数据库配置
export const AppDataSource = new DataSource({
    type: 'mysql', // 数据库类型
    host: 'localhost', // 主机，默认为localhost
    port: 3306, // 端口号
    username: 'root', // 用户名
    password: 'root123', // 密码
    database: 'nuowei', //数据库名
    synchronize: true, //根据实体自动创建数据库表， 生产环境建议关闭
    logging: false, //开启日志 开启后本地会输入sql 语句
    timezone: '+08:00', //服务器上配置的时区
    entities: [path.join(__dirname, '../sql/*.js')],
    migrations: [],
    subscribers: [],
});

AppDataSource.initialize()
.then(() => {
    console.log('连接数据库成功!');
    })
    .catch((err) => {
      console.error('连接数据库失败', err);
    });