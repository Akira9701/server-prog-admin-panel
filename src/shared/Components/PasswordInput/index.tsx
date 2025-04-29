import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import styles from './PasswordInput.module.scss';
import { Input, InputProps } from 'antd';

interface PasswordInputProps extends InputProps {
  placeholder?: string;
  error?: boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ placeholder, error, ...props }) => {
  return (
    <Input.Password
      placeholder={placeholder}
      iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      className={error ? styles.inputError : styles.input}
      {...props}
    />
  );
};

export default PasswordInput; 