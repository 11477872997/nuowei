
import * as path from 'path';
import * as nodes from 'child_process';
// 遵循 hy.md 文件配置命令执行
export async function creacAFiletName(name:string) {
    // 创建模块
    await execfun(`nest g mo modules/${name}`);
    // 创建控制器 
    await execfun(`nest g co modules/${name} --no-spec`);
    // 创建服务类
    await execfun(`nest g s modules/${name} --no-spec`);
}
// 注意创建顺序： 
// 先创建Module, 
// 再创建Controller和Service,
//  这样创建出来的文件在Module中自动注册，
//  反之，
//  后创建Module, Controller和Service,
//  会被注册到外层的app.module.ts

const execfun = ((cmd:string)=>{
    nodes.exec(cmd, { cwd: path.join(process.cwd()) }, (err, stdout, stderr) => {
        if(err) {
            console.log(err)
            return;
        }
        console.log(stdout)
    }); 
})


