### 系统设置

---

##### 如何系统设置？

一、应用场景
用户需要在事务流代码块中引用自定义依赖包，如对接外部系统第三方提供的 SDK，一些工具类包等。

##### 具体流程 ？

一、应用场景
用户需要在事务流代码块中引用自定义依赖包，如对接外部系统第三方提供的 SDK，一些工具类包等。
二、上传依赖包
进入后端工程，点击系统设置，选择 jar 包管理，上传当前工程需要的 jar 包。
（注意：需检查是否存在 jar 包冲突，若存在同一个包的不同版本，需删除旧版本的 jar 包）

<!-- ![An image](./case1.png) -->
<img src="./case1.png" data-fancybox="gallery"/>

三、开发时事务流代码块引用
打开目标代码块 ，编辑代码，引用需要的 jar 包内容。

::: tip
This is a 数据库
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

---

## prev: 'Get Started | Markdown'
