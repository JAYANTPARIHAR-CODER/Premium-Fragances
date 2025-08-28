import React from 'react';

type CartNotificationProps = {
  message: string;
  show: boolean;
};

export const CartNotification: React.FC<CartNotificationProps> = ({ message, show }) => {
  if (!show) return null;
  
  return (
    <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg animate-fade-in-out z-50">
      {message}
    </div>
  );
};
