/*
 * @Author: cirs
 * @Date: 2024-09-19 11:24:12
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-19 13:32:27
 * @FilePath: /umi4-auth/src/pages/sign/index.tsx
 * @Description:
 *
 */
import React, { useEffect } from 'react';
import styles from './index.less';
import { Form, Input, Button, Card, Row, Col } from 'antd';
import { sigin } from '@/services/user';
import { useRequest } from 'ahooks';
import { useModel, history } from '@umijs/max';
export default function Page() {
  const { initialState, setInitialState } = useModel('@@initialState');

  const { data, loading, run } = useRequest(sigin, {
    manual: true,
    onSuccess(res) {
      const { tokens, currentUser } = res;
      try {
        console.log(tokens);
        // 未来避免丢失所以把token也保存在local中一份
        localStorage.setItem('tokens', JSON.stringify(res));
        setInitialState({ currentUser });
      } catch (error) {
        localStorage.removeItem('tokens');
      }
    },
  });
  const onFinish = (values) => {
    console.log(values);
    run(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };
  useEffect(() => {
    if (initialState?.currentUser) {
      history.push('/');
    }
  }, [initialState]);
  return (
    <Row style={{ marginTop: '20%' }}>
      <Col offset={8} span={8}>
        <Card title="登陆">
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[{ required: true, message: '请输入' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                {' '}
                提交
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}
