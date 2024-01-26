import React from 'react';
import PropTypes from 'prop-types';

interface CustomTooltipProps {
    text: string;
    children: React.ReactNode;
  }

export const CustomToolEdit: React.FC<CustomTooltipProps> = ({ text, children }) => {
  return (
    <div className="relative inline-block group">
      <div className={`font-bold opacity-0 pointer-events-none group-hover:opacity-100 text-green-500 text-xs p-2 absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-1 transition-all duration-1000`}>
        {text}
      </div>
      {children}
    </div>
  );
};

CustomToolEdit.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export const CustomToolDelete: React.FC<CustomTooltipProps> = ({ text, children }) => {
  return (
    <div className="relative inline-block group">
      <div className={`font-bold opacity-0 pointer-events-none group-hover:opacity-100 text-red-500 text-xs p-2 absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-1 transition-all duration-1000`}>
        {text}
      </div>
      {children}
    </div>
  );
};

CustomToolDelete.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export const CustomLogout: React.FC<CustomTooltipProps> = ({ text, children }) => {
  return (
    <div className="relative inline-block group">
      <div className={`font-bold opacity-0 pointer-events-none group-hover:opacity-100 text-red-500 text-xs p-2 absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-1 transition-all duration-1000`}>
        {text}
      </div>
      {children}
    </div>
  );
};

CustomToolDelete.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export const CustomRegister: React.FC<CustomTooltipProps> = ({ text, children }) => {
  return (
    <div className="relative inline-block group">
      <div className={`font-semibold opacity-0 pointer-events-none group-hover:opacity-100 text-yellow-500 text-xs p-2 absolute bottom-full left-1/2 transform -translate-x-10 translate-y-1 transition-all duration-1000`}>
        {text}
      </div>
      {children}
    </div>
  );
};

CustomToolDelete.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};


