import React, { ReactNode, ReactNodeArray } from 'react';
import { Popup } from 'semantic-ui-react';

export interface MyPopupWrapperProps {
  content: ReactNode
  children: ReactNode | ReactNodeArray
}

const MyPopupWrapper = ({
  content,
  children
}: MyPopupWrapperProps) => {
  return (
    <Popup inverted content={content} trigger={children} />
  );
};

export default MyPopupWrapper;