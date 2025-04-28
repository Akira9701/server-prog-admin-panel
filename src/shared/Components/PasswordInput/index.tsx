import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import styles from './PasswordInput.module.scss';
import { Input, Space } from 'antd';

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  error?: boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ placeholder, error, ...props }) => {
  // Remove size from props since it's not compatible with Input.Password
  const { size, ...restProps } = props;

  return (
    <Input.Password
      placeholder={placeholder}
      iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      className={error ? styles.inputError : styles.input}
      {...restProps}
    />
  );
};

export default PasswordInput; 