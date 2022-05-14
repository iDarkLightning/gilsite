import * as React from 'react';
import { IconType } from 'react-icons';

export const IconLink: React.FC<{
  url: string;
  icon: IconType;
}> = ({ url, icon: Icon }) => {
  return (
    <a href={url}>
      <Icon size="40" />
    </a>
  );
};
