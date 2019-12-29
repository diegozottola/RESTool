import React from 'react';

import './button.scss';

interface IProps {
  children: any
  title?: string
  className?: string
  onClick?: (e: any) => void
  color?: 'gray' | 'blue' | 'green' | 'red'
}

export const Button = (props: IProps) => {
  return (
    <button {...props} className={`button ${props.className || ''} ${props.color || ''}`}>{props.children}</button>
  );
};