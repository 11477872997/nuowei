// 用户表
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  BaseEntity,
} from 'typeorm';
@Entity({ name: 'user' })
export class User extends BaseEntity {
  // 编号
  @Index() //索引
  @Column({ type: 'varchar', comment: '编号' })
  @PrimaryGeneratedColumn('uuid') // 主键
  id: string;
  // 名称
  @Index()
  @Column({ type: 'varchar', length: 255, comment: '名称' })
  name: string;
  // 头像
  @Column({ type: 'varchar', length: 255, comment: '头像' })
  url: string;
  // 状态
  @Column({
    type: 'int',
    default: 1,
    comment: '1:启用,0:禁用',
  })
  status: number;
  // 角色编号
  @Column({ type: 'varchar', length: 255, comment: '角色编号' })
  roles_id: string;
  // 管理员
  @Column({
    type: 'int',
    default: 0,
    comment: '1:管理员,0:普通',
  })
  admin: number;
  // 密码
  @Column({ type: 'varchar', length: 255, comment: '密码' })
  pwd: string;
  // 账号编号
  @Column({
    type: 'int',
    default: 0,
    comment: '账号编号',
  })
  more_id: number;
  // 备注
  @Column({ type: 'varchar', length: 255, comment: '备注' })
  remark: string;
  // 更新时间
  @UpdateDateColumn({ type: 'timestamp', comment: '更新时间' })
  update_time: Date;
  // 创建时间
  @CreateDateColumn({ type: 'timestamp', comment: '创建时间' })
  create_time: Date;
}
