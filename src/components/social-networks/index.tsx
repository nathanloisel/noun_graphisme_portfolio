import * as React from 'react';
import Behance from '../icons/behance';
import Facebook from '../icons/facebook';
import { Wrapper, SocialLink } from './style';

export interface ISocialNetworksProps {
  facebookUrl?: string;
  behanceUrl?: string;
  className?: string;
}

const SocialNetworks: React.FC<ISocialNetworksProps> = ({facebookUrl, behanceUrl, className}) => {
    return (
      <Wrapper className={className}>
        {facebookUrl && <SocialLink href={facebookUrl} target="_blank">
          <Facebook width="24px" />
        </SocialLink>}
        {behanceUrl && <SocialLink href={behanceUrl} target="_blank">
          <Behance width="24px" />
        </SocialLink>}
      </Wrapper>
    );
};

export default SocialNetworks;
