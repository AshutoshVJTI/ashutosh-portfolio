import React from 'react';
import styles from './Heading.module.css';

interface HeadingProps {
    title: string;
}

const Heading = (props: HeadingProps) => {
    const { title } = props;
  return (
    <div className={styles.heading}>{title}</div>
  )
}

export default Heading