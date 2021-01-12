import * as React from 'react';
import Behance from '../icons/behance';
import Facebook from '../icons/facebook';
import { Wrapper, SocialLink } from './style';

export interface ISocialNetworksProps {
  facebookUrl?: string;
  behanceUrl?: string;
  className?: string;
}

const SocialNetworks: React.FC<ISocialNetworksProps> = ({ facebookUrl, behanceUrl, className }) => {
  return (
    <Wrapper className={className}>
      {facebookUrl && (
        <SocialLink href={facebookUrl} target="_blank" rel="noreferrer">
          <Facebook width="24px" title="noun graphisme facebook" />
        </SocialLink>
      )}
      {behanceUrl && (
        <SocialLink href={behanceUrl} target="_blank" rel="noreferrer">
          <Behance width="24px" title="noun graphisme behance" />
        </SocialLink>
      )}
    </Wrapper>
  );
};

export default SocialNetworks;
