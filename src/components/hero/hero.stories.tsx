import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Hero, { IHeroProps } from '.';

export default {
  title: 'Components/Hero',
  component: Hero,
} as Meta;

const Template: Story<IHeroProps> = (args) => {
  return <Hero {...args} />;
};

export const HeroEx = Template.bind({});
export const HeroTextEx = Template.bind({});

HeroEx.args = {
  homeImage: {
    fluid: {
      aspectRatio: 2.45833333,
      base64:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAMAAAD0SU6vAAABaFBMVEVdGmaBJ4LJRKPpYa/vXqfvOZTzLYzzJIHyJYHxQZLwbabzh6n1mqz0nq3wnqzzlp3kZZp5RpteZJxRYZZ5F0GbF1O6FmXUG3jpNIH1THvrM2b2OHf3O275PXD7WoD8bnv8cHXuTWK7JUfmPYTPOqOIPZtfPplVSZSVFkfAFV3LFmm9F2u2FFW6ECnLIzrzZXH7dnj8fXT9k2/+mGr+mmf9cmH9LWr2QJXTL5+RNZhgMZdRO5KnFlHSF2rcGnvPHYHPHnTcHVDdMlL1VHX7aHr8dHX8inb+oG3+n2n9dWT9OnL2Q5bVMaGSNZhhMJdTP5S6JYzRNJ7iTKrtaLD2ha/7iJX3Xnn6Tn/8PXH8TXX8fYT9on39qnT9kG3sYl/1PHLRP52JSZ9jS5xaVph+YKSvZ6nbbLPhYa/kTqXgNZfgJojYHHvPGnbTNJXUYajffLDjh7TXmrfbrrvzvb/rjqZpXphNWZBKY5K/6suTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QEGDQgv+YZAAABNJREFUCNdjZGDEAkSwiLHQQBAAOLoA6c8F4vsAAAAASUVORK5CYII=',
      sizes: `(max-width: 1180px) 100vw, 1180px`,
      src: `//images.ctfassets.net/n086ro9j9v72/Z323XkiijRb1C8lkOTsxH/e11489a7b5660402abd197dc83ad2be7/Header.png?w=1180&h=480&q=50&fit=pad&bg=rgb%3A000000`,
      srcSet: `//images.ctfassets.net/n086ro9j9v72/Z323XkiijRb1C8lkOTsxH/e11489a7b5660402abd197dc83ad2be7/Header.png?w=295&h=120&q=50&fit=pad&bg=rgb%3A000000 295w,\n//images.ctfassets.net/n086ro9j9v72/Z323XkiijRb1C8lkOTsxH/e11489a7b5660402abd197dc83ad2be7/Header.png?w=590&h=240&q=50&fit=pad&bg=rgb%3A000000 590w,\n//images.ctfassets.net/n086ro9j9v72/Z323XkiijRb1C8lkOTsxH/e11489a7b5660402abd197dc83ad2be7/Header.png?w=1180&h=480&q=50&fit=pad&bg=rgb%3A000000 1180w,\n//images.ctfassets.net/n086ro9j9v72/Z323XkiijRb1C8lkOTsxH/e11489a7b5660402abd197dc83ad2be7/Header.png?w=1285&h=523&q=50&fit=pad&bg=rgb%3A000000 1285w`,
    },
    title: 'Header Image',
  },
  // bio: {
  //   references: [],
  //   raw: `{
  //     "data":{},
  //     "content":[
  //       {
  //         "data":{},
  //         "content":[
  //           {
  //             "data":{},
  //             "marks":[],
  //             "value":"Je m’appelle Lou-Anne Dupont, je suis une graphiste freelance implantée en Haute-Savoie. Après avoir été formée pendant trois ans à l’école de Condé de Lyon, j’ai obtenu un BTS Design Graphique dans le domaine des médias imprimés. J’ai ensuite désiré étendre mes compétences et développer une expérience professionnelle au sein d’une agence web. C’est à l’école Presqu’île que j’ai pû suivre une formation en alternance d’une année, me permettant ainsi d’approfondir mes acquis dans le domaine du web, du motion design et de la direction artistique, tout en travaillant en agence. Depuis mars 2017, j’exerce ma profession en tant que graphiste freelance, de la conceptualisation à la réalisation, je vous accompagne dans la réussite de votre projet.",
  //             "nodeType":"text"
  //           }
  //         ],
  //         "nodeType":"paragraph"
  //       }
  //     ],
  //     "nodeType":"document"
  //   }` },
};

HeroTextEx.args = {
  homeImage: {
    fluid: {
      aspectRatio: 2.45833333,
      base64:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAMAAAD0SU6vAAABaFBMVEVdGmaBJ4LJRKPpYa/vXqfvOZTzLYzzJIHyJYHxQZLwbabzh6n1mqz0nq3wnqzzlp3kZZp5RpteZJxRYZZ5F0GbF1O6FmXUG3jpNIH1THvrM2b2OHf3O275PXD7WoD8bnv8cHXuTWK7JUfmPYTPOqOIPZtfPplVSZSVFkfAFV3LFmm9F2u2FFW6ECnLIzrzZXH7dnj8fXT9k2/+mGr+mmf9cmH9LWr2QJXTL5+RNZhgMZdRO5KnFlHSF2rcGnvPHYHPHnTcHVDdMlL1VHX7aHr8dHX8inb+oG3+n2n9dWT9OnL2Q5bVMaGSNZhhMJdTP5S6JYzRNJ7iTKrtaLD2ha/7iJX3Xnn6Tn/8PXH8TXX8fYT9on39qnT9kG3sYl/1PHLRP52JSZ9jS5xaVph+YKSvZ6nbbLPhYa/kTqXgNZfgJojYHHvPGnbTNJXUYajffLDjh7TXmrfbrrvzvb/rjqZpXphNWZBKY5K/6suTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QEGDQgv+YZAAABNJREFUCNdjZGDEAkSwiLHQQBAAOLoA6c8F4vsAAAAASUVORK5CYII=',
      sizes: `(max-width: 1180px) 100vw, 1180px`,
      src: `//images.ctfassets.net/n086ro9j9v72/Z323XkiijRb1C8lkOTsxH/e11489a7b5660402abd197dc83ad2be7/Header.png?w=1180&h=480&q=50&fit=pad&bg=rgb%3A000000`,
      srcSet: `//images.ctfassets.net/n086ro9j9v72/Z323XkiijRb1C8lkOTsxH/e11489a7b5660402abd197dc83ad2be7/Header.png?w=295&h=120&q=50&fit=pad&bg=rgb%3A000000 295w,\n//images.ctfassets.net/n086ro9j9v72/Z323XkiijRb1C8lkOTsxH/e11489a7b5660402abd197dc83ad2be7/Header.png?w=590&h=240&q=50&fit=pad&bg=rgb%3A000000 590w,\n//images.ctfassets.net/n086ro9j9v72/Z323XkiijRb1C8lkOTsxH/e11489a7b5660402abd197dc83ad2be7/Header.png?w=1180&h=480&q=50&fit=pad&bg=rgb%3A000000 1180w,\n//images.ctfassets.net/n086ro9j9v72/Z323XkiijRb1C8lkOTsxH/e11489a7b5660402abd197dc83ad2be7/Header.png?w=1285&h=523&q=50&fit=pad&bg=rgb%3A000000 1285w`,
    },
    title: 'Header Image',
  },
  text: 'Mes créations',
};
