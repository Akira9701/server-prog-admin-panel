import React from 'react';
import styles from './TextInput.module.scss';
import { UserOutlined } from '@ant-design/icons';
import { Input, InputProps } from 'antd';

interface TextInputProps extends InputProps {
  placeholder?: string;
  error?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ placeholder, error, ...props }) => (
  <Input
    type="text"
    placeholder={placeholder}
    prefix={<UserOutlined />}
    className={error ? styles.inputError : styles.input}
    {...props}
  />
);

export default TextInput; 