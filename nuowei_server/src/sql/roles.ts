// 角色表
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  BaseEntity,
} from 'typeorm';
@Entity({ name: 'roles' })
export class Roles extends BaseEntity {
  // 编号
  @Index() //索引
  @Column({ type: 'varchar', comment: '编号' })
  @PrimaryGeneratedColumn('uuid') // 主键
  id: string;
  // 名称
  @Column({ type: 'varchar', length: 255, comment: '名称' })
  name: string;
  // 权限标识
  @Column({
    type: 'varchar',
    length: 10000,
    comment: '权限标识',
  })
  roles: string;
  // 权限默认选中标识
  @Column({
    type: 'varchar',
    length: 255,
    comment: '权限默认选中标识',
  })
  checked_roles: string;
  // 权限字符
  @Column({
    type: 'varchar',
    length: 10000,
    comment: '权限字符',
  })
  role_key: string;
  // 更新时间
  @UpdateDateColumn({ type: 'timestamp', comment: '更新时间' })
  update_time: Date;
  // 创建时间
  @CreateDateColumn({ type: 'timestamp', comment: '创建时间' })
  create_time: Date;
}
