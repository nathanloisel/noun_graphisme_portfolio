import * as React from 'react';
import { ProjectFilters } from '../../pages';

import {StyledLink, NumWrapper, Wrapper, Num, Line} from './style';

export interface IFilterProps {
  num: number;
  text: string;
  className?: string;
}


const Filter: React.FC<IFilterProps> = ({num, text,className}) => {
//    const [state, setstate] = useState(undefined);
    return (
      <Wrapper className={className}>
        <NumWrapper>
          <Num>0{num}.</Num>
          <Line />
        </NumWrapper>
        <StyledLink to="/projets">
          {text}
        </StyledLink>
      </Wrapper>
    );
};

export default Filter;
