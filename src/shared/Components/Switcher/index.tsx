
import { Switch } from 'antd';

interface SwitcherProps {
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switcher: React.FC<SwitcherProps> = ({ name, checked, onChange }) => (
  <Switch
    checked={checked}
    onChange={val => {
      onChange({
        target: { name, checked: val, type: 'checkbox', value: '' }
      } as React.ChangeEvent<HTMLInputElement>);
    }}
  />
);

export default Switcher;