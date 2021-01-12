import React from 'react';
import { Nav, HeaderLink } from './style';

export interface INavigationProps {
  className?: string;
}

const Navigation: React.FC<INavigationProps> = ({ className }) => (
  <Nav role="navigation" className={className}>
    <HeaderLink to="/">Accueil</HeaderLink>
    <HeaderLink to="/projets">Mes projets</HeaderLink>
    <HeaderLink to="/contact">Contacts</HeaderLink>
  </Nav>
);
export default Navigation;
