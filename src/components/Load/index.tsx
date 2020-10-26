import React from 'react';

import { Loading } from './styles';

const Load: React.FC = () => (
  <Loading>
    <div className="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
  </Loading>
);

export default Load;
