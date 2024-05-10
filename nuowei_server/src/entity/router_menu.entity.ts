// 路由菜单表
import {
  Entity,
  PrimaryGeneratedColumn,
  Generated,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  BaseEntity,
} from 'typeorm';
@Entity({ name: 'router_menu' })
export class RouterMenu extends BaseEntity {
  // 编号
  @Index() //索引
  @Column({ type: 'varchar', comment: '编号' })
  @PrimaryGeneratedColumn('uuid') // 主键
  id: string;
  // 父级id
  @Index()
  @Generated('uuid')
  @Column({ type: 'varchar', nullable: true, length: 255, comment: '父级id' })
  parent_id: string;
  // 标题
  @Column({ type: 'varchar', nullable: false, length: 255, comment: '标题' })
  title: string;
  // 图标
  @Column({ type: 'varchar', nullable: false, length: 255, comment: '图标' })
  icon: string;
  // 是否缓存
  @Column({ type: 'int', default: 1, nullable: false, comment: '1:是,2:否' })
  no_cache: number;
  // 其他对象
  @Column({
    type: 'varchar',
    nullable: false,
    length: 255,
    comment: '其他对象',
  })
  meta: string;
  // 路由地址
  @Column({
    type: 'varchar',
    nullable: false,
    default: "/",
    length: 255,
    comment: '路由地址',
  })
  path: string;
  // 侧边栏状态
  @Column({
    type: 'tinyint',
    default: 0,
    nullable: false,
    comment: '当设置 true 的时候该路由不会在侧边栏出现 如401，login等页面',
  })
  hidden: number;
  // 路由重定向
  @Column({
    type: 'varchar',
    nullable: false,
    length: 255,
    comment: '当设置 noRedirect 的时候该路由在面包屑导航中不可被点击',
  })
  redirect: string;
  // 忽略路由规则
  @Column({
    type: 'tinyint',
    default: 0,
    nullable: false,
    comment:
      '你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由',
  })
  always_show: number;
  // 路由名字
  @Column({
    type: 'varchar',
    nullable: false,
    length: 255,
    comment: '设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题',
  })
  name: string;
  // 是否包含导航
  @Column({
    type: 'tinyint',
    default: 0,
    nullable: false,
    comment: '是否需要含导航栏，只需一级才设置这个（默认为false）',
  })
  layout: number;
  // 是否需要嵌套二级
  @Column({
    type: 'tinyint',
    default: 0,
    nullable: false,
    comment: '如果第二级里面还需要套级，需在当前级设置为true',
  })
  parent_view: number;
  // 组件路径
  @Column({
    type: 'varchar',
    nullable: false,
    length: 255,
    default: "/",
    comment: '对应的页面路径',
  })
  component: string;
  // 排序
  @Index()
  @Column({ type: 'int', default: 0, nullable: false, comment: '排序' })
  sort: number;
  // 是否独立的（一级）
  @Column({
    type: 'int',
    default: 0,
    nullable: false,
    comment: '是否独立的（一级）',
  })
  alone: number;
  // 权限字符
  @Column({
    type: 'varchar',
    nullable: false,
    length: 255,
    comment: '权限字符',
  })
  role_key: string;
  // 菜单类型区分
  @Column({
    type: 'varchar',
    nullable: false,
    length: 255,
    default: 'C',
    comment: '菜单类型区分',
  })
  menu_type: string;
  // 更新时间
  @UpdateDateColumn({ type: 'timestamp', nullable: false, comment: '更新时间' })
  update_time: Date;
  // 创建时间
  @CreateDateColumn({ type: 'timestamp', nullable: false, comment: '创建时间' })
  create_time: Date;
}
