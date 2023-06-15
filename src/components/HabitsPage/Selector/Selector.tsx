import { useState } from 'react';

import styles from './Selector.module.css';

interface Option {
  key: string;
  value: string;
}

interface SelectorProps {
  options: Option[];
}

export const Selector = ({ options }: SelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="selector">
      <div className="selector__selected" onClick={toggleDropdown}>
        {selectedOption ? selectedOption.key : 'Select an option'}
      </div>
      {isOpen && (
        <div className={styles.dropDown}>
          {options.map(option => (
            <div key={option.key} className={styles.option} onClick={() => handleOptionClick(option)}>
              {option.key}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Selector;
