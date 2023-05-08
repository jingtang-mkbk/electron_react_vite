import React, { useState, useEffect } from 'react';
import styles from './index.module.scss'

const Test: React.FC<any> = (props) => {
  const { value, onChange } = props;
  const [data, setData] = useState('')

  const handleClick = (val: string) => {
    console.log('val', val)
    setData(val)
  }

  const getValue = () => {
    if (data) {
      onChange(data)
    }
  }

  useEffect(() => {
    getValue();
  }, [data]);

  return(
    <div className={styles.test}>
      <span className={styles.green} onClick={()=>handleClick('green')}>green</span>
      <span className={styles.red} onClick={()=>handleClick('red')}>red</span>
      <span className={styles.blue} onClick={()=>handleClick('blue')}>blue</span>
      <span className={styles.orange} onClick={()=>handleClick('orange')}>orange</span>
    </div>
  )
};
export default Test