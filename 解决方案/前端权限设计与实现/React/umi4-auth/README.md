<!--
 * @Author: cirs
 * @Date: 2024-09-12 19:50:00
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-19 12:28:38
 * @FilePath: /umi4-auth/README.md
 * @Description:
 *
-->

## RBAC

- role Based Access Control 是一种访问机制控制
- 核心思想是根据用户的角色来分配系统的访问权限
- 权限不是分配给用户，而是分配给角色，然后通过为用户角色来让这些用户获取对应的权限

RBAC 模型中有以下组件

- 用户 user 系统的操作
- 角色 role 一个角色代表一组权限的集合
- 权限 permissions 权限是对系统资源的访问

## 数据库的模型设计

- 用户表 user
- 角色表 role
- 权限
  - 菜单权限 menu
  - 按钮权限 button
  - API 接口权限 api
  - 字段权限 field

## 创建项目

```js
mkdir uni4-auth
cd umi4-auth
npm init -y
npm i @ant-design/icons antd  @ant-design/pro-components ahooks jsonwebtoken @umijs/max
```

## 实现umi4中权限功能

- 登陆
- 生成一个登陆的页面
- 路由权限
- 菜单权限（使用静态菜单和动态菜单（菜单数据是由接口反悔的，根据用户的角色返回不同的菜单））
- 字段权限
- 按钮权限
- 接口权限

/\*\*

- 用户登陆后，需要把用户数据放在状态管理库中、
- redux，dva，方便全局共享
- 在umi max中，使用的是轻量级的数据管理方案model，他的原理是一个轻量级hook
- 另外全局初始状态是一种特殊的model，用来存放初始化的数据 \*/
