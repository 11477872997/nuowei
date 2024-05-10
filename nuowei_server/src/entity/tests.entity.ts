// 测试表
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  Generated,
  BaseEntity,
} from 'typeorm';
@Entity({ name: 'tests' })
export class Tests extends BaseEntity {
  // 编号
  @Index() //索引
  @Column({ type: 'varchar', comment: '编号' })
  @PrimaryGeneratedColumn('uuid') // 主键
  id: string;
  // 昵称
  @Index()
  @Column({ type: 'varchar',  length: 255, comment: '昵称' })
  name: string;
  // 多账号编号
  @Index()
  @Generated('uuid')
  @Column({ type: 'varchar',length: 255, comment: '多账号编号' })
  more_id: string;
  // 类型字符
  @Column({
    type: 'varchar',
    length: 255,
    comment: '类型字符',
  })
  type: string;
  // 备注
  @Column({ type: 'varchar', length: 255, comment: '备注' })
  remark: string;
  // 更新时间
  @UpdateDateColumn({ type: 'timestamp',  comment: '更新时间' })
  update_time: Date;
  // 创建时间
  @CreateDateColumn({ type: 'timestamp', comment: '创建时间' })
  create_time: Date;
}
