### 事务流

---

##### 什么事务流 ？

事务流通过配置化的方式将各个事务流组件进行有序的编排来完成某一业务，适用于所有业务系统。

事务流设计器的组成

##### 为什么使用云平台 ？

1.基础组件

1）开始结点：作为整个事务流的起点，接收业务提交过来的数据，供其他节点使用，开始节点有且仅有 1 个；

2）结束结点：事务流执行成功，结束操作；

3）日志：执行任务节点时，实现事务流运行时请求内容和结果返回内容的日志记录；

4）子流程：本身是一个流程，同时是父流程的一部分，是完全定义在父流程里的，子流程、并行流程（可开启都执行完后才继续下一个流程设置）、串行流程；

2.逻辑组件

1）SQL 执行器：作为任务节点，使用输入参数提交给 SQL 执行，结果匹配写入到输出参数里；

2）代码块：作为任务节点，使用输入参数提交给代码块执行，结果匹配写入到输出参数里；

3）API：作为任务节点，使用输入参数提交给接口执行，结果匹配写入到输出参数里；

4）微服务：作为任务节点，使用输入参数提交给微服务执行，结果匹配写入到输出参数里；

5）图片处理器：作为任务节点，使用输入参数提交给图片处理器节点执行，生成相应类型的验证码，将结果匹配写入到输出参数里；

6）数据转换：作为任务节点，使用输入参数提交给数据转换节点执行，将转换后的结果数据匹配写入到输出参数里；

7）excel 解析器：作为任务节点，根据配置的 Excel 模板解析 Excel 文件，结果匹配写入到输出参数里；

3. 条件连接线：使用连接线连接 2 个节点，流程执行完一个节点后，会沿着结点的所有外出顺序流继续执行。如果条件结果为 True，就会执行下一个节点；

4. 流程设置：事务流请求参数列表及返回值列表；

::: tip
This is a 事务流
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

---

## prev: 'Get Started | Markdown'