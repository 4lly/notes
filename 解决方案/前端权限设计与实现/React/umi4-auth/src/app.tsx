/*
 * @Author: cirs
 * @Date: 2024-09-19 12:25:14
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-19 14:06:06
 * @FilePath: /umi4-auth/src/app.tsx
 * @Description:
 *
 */

import Icon from '@ant-design/icons';
import * as icons from '@ant-design/icons';
import { history, request as sendRequest } from '@umijs/max';
import { Dropdown, Space, Avatar } from 'antd';
export async function getInitialState() {
  const initialState = {
    currentUser: null,
  };
  //每当页面刷新的时候，都会执行此方法
  const tokens = localStorage.getItem('tokens');
  if (tokens) {
    try {
      const { currentUser } = JSON.parse(tokens);
      initialState.currentUser = currentUser;
    } catch (error) {}
  }
  return initialState;
}

// 导出request的配置
export let request = {
  timeout: 3000, //配置超时时间
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    credential: 'include', //允许跨域时发送cookie
  },
  requestInterceptors: [
    //配置请求拦截器
    (url, options) => {
      const data = localStorage.getItem('tokens');

      if (data) {
        try {
          const { tokens } = JSON.parse(data);
          options.headers.authprization = `Bearer ${tokens.access_token}`;
        } catch (error) {}
      }

      return { url, options };
    },
  ],
  responseInterceptors: [
    // 响应了拦截器
    (response) => response.data,
  ],
};

const formatMenuIcon = (menus) => {
  return menus.map(({ icon, routes, ...rest }) => {
    return {
      ...rest,
      icon: <Icon component={icons[icon]} />,
      routes: routes && formatMenuIcon(routes),
    };
  });
};
// 运行时配置布局
export const layout = ({ initialState, setInitialState }) => {
  return {
    title: ' UMI4权限',
    // 当路径发生修改时执行此钩子
    onPageChange(location) {
      const { currentUser } = initialState;
      // 如果仓库中的当前用户不存在且当前的路径不是登录页
      if (!currentUser && location.pathname !== '/sign') {
        // 说明当前用户没有权限访问，跳回登陆页面
        history.push('/sign');
      }
    },
    actionsRender: () => {
      const { currentUser } = initialState;
      if (!currentUser) return null;
      const items = [
        {
          key: 'logout',
          label: (
            <a
              onClick={() => {
                setInitialState({ currentUser: null });
                localStorage.removeItem('tokens');
                history.push('/sign');
              }}
            >
              退出
            </a>
          ),
        },
      ];
      return [
        <Dropdown menu={{ items: items }}>
          <Space>
            <Avatar src={currentUser.awatar} />
            <span>{currentUser.name}</span>
          </Space>
        </Dropdown>,
      ];
    },
    menu: {
      locale: false,
      request: async (params, defaultMenuData) => {
        console.log(defaultMenuData);
        const { menus } = await sendRequest('/api/menus');
        console.log(menus, '====menus');

        return [...defaultMenuData, ...formatMenuIcon(menus)];
      },
    },
  };
};
