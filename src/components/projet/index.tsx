import * as React from 'react';
import { navigate } from 'gatsby';
import Img from 'gatsby-image';

import { FilterLabel } from '../filters';
import { IProject } from '../../templates/project';
import {
  Details,
  Images,
  Wrapper,
  ImageButton,
  ProjectCategory,
  Description,
  DateClient,
  SmallImageList,
  StyledDots,
  NextProjectButton,
  ProjectHeroWrapper,
} from './style';
import FsLightbox from 'fslightbox-react';
import ProjectHero from '../project-hero';

export interface IProjetProps {
  projet: IProject;
  nextProject?: string;
}

const Projet: React.FC<IProjetProps> = ({ projet, nextProject }) => {
  const hero = projet.heroImage;

  const [lightboxController, setLightboxController] = React.useState({
    toggler: false,
    slide: 1,
  });

  const openLightboxOnSlide = React.useCallback(
    (slide: number) => {
      setLightboxController({
        toggler: !lightboxController.toggler,
        slide,
      });
    },
    [lightboxController.toggler],
  );

  const goToNextProject = React.useCallback(() => {
    navigate(`/projets/${nextProject}`);
  }, [nextProject]);

  const imagesSource = React.useMemo(() => {
    let res = [hero.fluid ? hero.fluid.src : hero.svg ? hero.svg.content : hero.file.url];
    if (projet.images)
      res = [...res, ...projet.images.map(({ fluid, svg }) => (fluid ? fluid.src : ((svg as any).content as string)))];
    return res;
  }, [projet.images, hero]);
  return (
    <Wrapper>
      <Details>
        <h1>{projet.title}</h1>
        <ProjectCategory>{FilterLabel[projet.category]}</ProjectCategory>
        <h3>{projet.sousTitre}</h3>
        <Description richText={projet.description} />
        <DateClient>
          <p>
            DATE: <span>{projet.publishDate}</span>
          </p>
          {projet.client && (
            <p>
              CLIENT : <span>{projet.client}</span>
            </p>
          )}
        </DateClient>
        {nextProject && (
          <>
            <NextProjectButton onClick={goToNextProject}>Projet suivant {'>'}</NextProjectButton>
            <StyledDots />
          </>
        )}
      </Details>
      <Images>
        <ProjectHeroWrapper>
          <ImageButton onClick={openLightboxOnSlide.bind(this, 0)} isVerticalHeroImage={projet.isVerticalHeroImage}>
            <ProjectHero image={projet.heroImage} />
          </ImageButton>
        </ProjectHeroWrapper>
        {projet.images && (
          <SmallImageList>
            {projet.images.map(({ title, preview, svg }, index) => (
              <ImageButton key={index} onClick={openLightboxOnSlide.bind(this, index + 1)}>
                {preview && <Img alt={title} fluid={preview} />}
                {svg && <div dangerouslySetInnerHTML={{ __html: svg.content }} />}
              </ImageButton>
            ))}
          </SmallImageList>
        )}
        <FsLightbox toggler={lightboxController.toggler} sources={imagesSource} sourceIndex={lightboxController.slide} />
      </Images>
      {nextProject && (
        <NextProjectButton onClick={goToNextProject} isForSmall>
          Projet suivant {'>'}
        </NextProjectButton>
      )}
    </Wrapper>
  );
};

export default Projet;
