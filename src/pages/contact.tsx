import React from 'react';
import { graphql } from 'gatsby';
import { IBioImageContact } from '.';
import Layout from '../components/layout';
import styled from 'styled-components';
import RichText from '../components/rich-text';
import SEO from '../components/seo';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoibG91ZHVwb250IiwiYSI6ImNranUxczZxOTFkYmYycXFocnVzaGx4NDUifQ.IW2_v2koXet8ZhQyKmSqUg';

interface IContactProps {
  data: {
    allContentfulBioImageContact: {
      edges: Array<{ node: IBioImageContact }>;
    };
  };
  location: Location;
}

const Title = styled.h1`
  text-align: center;
  margin-top: 65px;
  color: ${({ theme }) => theme.color.dark_grey.hex};
`;
const MapContainer = styled.div`
  width: 100%;
  height: 500px;
`;
const StyledRichText = styled(RichText)`
  p {
    font-size: ${({ theme }) => theme.typo.l};
    font-weight: bold;
    color: ${({ theme }) => theme.color.dark_grey.hex};
  }
`;
const Details = styled.main`
  display: flex;
  justify-content: space-between;
  margin-top: 150px;
  ${({ theme }) =>
    theme.breakpoints.under_m(`
      align-items: center;
      flex-direction: column;
      margin-top: 40px;
      height: 100%;
      justify-content: space-around;
      min-height: 40vh;
  `)}

  a {
    color: ${({ theme }) => theme.color.dark_grey.hex};
  }
`;

const Contact: React.FC<IContactProps> = ({ data }) => {
  const [meta] = data.allContentfulBioImageContact.edges;
  const mapContainerRef = React.useRef<HTMLDivElement>(null);
  // initialize map when component mounts
  React.useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLElement,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: 'mapbox://styles/loudupont/ckju1uyrs0wgw19o2k3zlgl5k',
      center: [-104.9876, 39.7405],
      zoom: 12.5,
    });

    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Layout facebookUrl={meta.node.facebook} behanceUrl={meta.node.behance}>
      <SEO title={'Contact'} />
      <Title>Un projet ? Besoin d’un devis ? Contactez-moi</Title>
      <MapContainer ref={mapContainerRef} />
      <Details itemScope itemType="https://schema.org/Business">
        <h3>
          <a href={`mailto:${meta.node.email}?subject=Demande de devis`} itemProp="email">
            {meta.node.email}
          </a>
        </h3>
        <h3>
          <a href={`tel:${meta.node.phone}`} itemProp="telephone">
            {meta.node.phone}
          </a>
        </h3>

        <StyledRichText richText={meta.node.address} itemProp="address" />
      </Details>
    </Layout>
  );
};
export default Contact;

export const pageQuery = graphql`
  query ContactQuery {
    allContentfulBioImageContact(filter: { contentful_id: { eq: "2nH2prijQalfGjAOnIQfbt" } }) {
      edges {
        node {
          facebook
          behance
          email
          phone
          address {
            raw
          }
        }
      }
    }
  }
`;
