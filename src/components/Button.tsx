import React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'add' | 'edit' | 'cancel';
  isValid?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'cancel',
  isValid,
  className,
  ...props
}) => {
  const variants = {
    add: `px-4 py-2 text-sm font-medium text-white rounded-md transition-colors ${
      isValid ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-400 cursor-not-allowed'
    }`,
    edit: `px-4 py-2 text-sm font-medium text-white rounded-md transition-colors ${
      isValid ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-400 cursor-not-allowed'
    }`,
    cancel:
      'px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors',
  };

  return <button className={variants[variant]} {...props} />;
};
