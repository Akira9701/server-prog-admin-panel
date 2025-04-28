import React from 'react';
import styles from './Switcher.module.scss';
import { Switch } from 'antd';

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};



const CustomSwitch: React.FC = () => (
  <Switch defaultChecked onChange={onChange} />
);

export default CustomSwitch; 