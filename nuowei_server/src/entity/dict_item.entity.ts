// 字典项目表
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  BaseEntity,
  Generated,
} from 'typeorm';
@Entity({ name: 'dict_item' })
export class DictItem extends BaseEntity {
  // 编号
  @Index() //索引
  @Column({ type: 'varchar', comment: '编号' })
  @PrimaryGeneratedColumn('uuid') // 主键
  id: string;
  // 字典父级id
  @Index()
  @Generated('uuid')
  @Column({
    type: 'varchar',
    nullable: false,
    length: 255,
    comment: '字典父级id',
  })
  dict_id: string;
  // 标签
  @Column({ type: 'varchar', nullable: false, length: 255, comment: '标签' })
  dict_label: string;
  // 值
  @Column({ type: 'varchar', nullable: false, length: 255, comment: '值' })
  dict_value: string;
  // 排序
  @Index()
  @Column({ type: 'int', default: 0, nullable: false, comment: '排序' })
  dict_sort: number;
  // 样式
  @Column({ type: 'varchar', nullable: false, length: 255, comment: '样式' })
  dict_class: string;
  // 状态
  @Index()
  @Column({
    type: 'int',
    default: 1,
    nullable: false,
    comment: '1:启用,2:禁用',
  })
  status: number;
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
