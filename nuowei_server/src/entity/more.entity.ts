// 更多账号表
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  BaseEntity,
} from 'typeorm';
@Entity({ name: 'more' })
export class More extends BaseEntity {
  // 编号
  @Index() //索引
  @Column({ type: 'varchar', comment: '编号' })
  @PrimaryGeneratedColumn('uuid') // 主键
  id: string;
  // 名称
  @Index()
  @Column({
    type: 'varchar',
    nullable: false,
    length: 255,
    comment: '账号昵称',
  })
  name: string;
  // 备注
  @Column({ type: 'varchar', nullable: false, length: 255, comment: '备注' })
  remark: string;
  // 更新时间
  @UpdateDateColumn({ type: 'timestamp', nullable: false, comment: '更新时间' })
  update_time: Date;
  // 创建时间
  @CreateDateColumn({ type: 'timestamp', nullable: false, comment: '创建时间' })
  create_time: Date;
}
