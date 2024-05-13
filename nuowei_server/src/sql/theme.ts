// 主题表
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
@Entity({ name: 'theme' })
export class Theme extends BaseEntity {
  // 编号
  @Index() //索引
  @Column({ type: 'varchar', comment: '编号' })
  @PrimaryGeneratedColumn('uuid') // 主键
  id: string;
  // 用户id
  @Index()
  @Generated('uuid')
  @Column({ type: 'varchar',length: 255, comment: '用户id' })
  user_id: string;
  // 默认背景
  @Column({
    type: 'varchar',
    length: 255,
    comment: '默认背景',
  })
  menu_bg: string;
  // 展开背景
  @Column({
    type: 'varchar',
    length: 255,
    comment: '展开背景',
  })
  menu_sub_bg: string;
  // 默认文字
  @Column({
    type: 'varchar',
    length: 255,
    comment: '默认文字',
  })
  menu_text: string;
  // 选中文字
  @Column({
    type: 'varchar',
    length: 255,
    comment: '选中文字',
  })
  menu_active_text: string;
  // 当前选中展开文字
  @Column({
    type: 'varchar',
    length: 255,
    comment: '当前选中展开文字',
  })
  menu_sub_active_text: string;
  // hover背景
  @Column({
    type: 'varchar',
    length: 255,
    comment: 'hover背景',
  })
  menu_hover_bg: string;
  // 更新时间
  @UpdateDateColumn({ type: 'timestamp',  comment: '更新时间' })
  update_time: Date;
  // 创建时间
  @CreateDateColumn({ type: 'timestamp', comment: '创建时间' })
  create_time: Date;
}
