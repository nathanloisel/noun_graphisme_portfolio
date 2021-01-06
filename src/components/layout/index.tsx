import React from 'react';
import Navigation from '../navigation';

interface ILayoutProps {
  location: Location;
}

const Layout: React.FC<ILayoutProps> = ({children}) => (
  <div>
    <Navigation />
    {children}
  </div>
);
export default Layout;
