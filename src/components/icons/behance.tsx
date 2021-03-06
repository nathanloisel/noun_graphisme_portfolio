import * as React from 'react';
import { ISVGProps } from './facebook';

function Behance({ title, description, ...props }: ISVGProps) {
  const labelId = title && `svg${title.replace(/\s/g, '')}`;
  return (
    <svg viewBox="0 0 24 25" aria-labelledby={labelId} {...props}>
      {title && <title id={labelId}>{title}</title>}
      {description && <desc>{description}</desc>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 .372c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12s12-5.372 12-12c0-6.627-5.373-12-12-12zm5.169 9.335h-3.39v-.97h3.39v.97zm-.299.816a3.366 3.366 0 00-1.376-.271c-.857 0-1.553.268-2.091.8-.537.534-.805 1.3-.805 2.3 0 1.067.296 1.838.893 2.31.594.474 1.28.71 2.06.71.943 0 1.676-.28 2.2-.84.336-.354.526-.703.567-1.044h-1.562c-.09.17-.195.302-.315.397-.217.176-.501.264-.848.264-.33 0-.61-.072-.844-.217-.385-.232-.587-.639-.612-1.217h4.261c.007-.498-.01-.881-.05-1.146a2.788 2.788 0 00-.468-1.193 2.354 2.354 0 00-1.01-.853zm-7.448-2.15c.965.013 1.648.29 2.05.83.242.333.363.73.363 1.192 0 .476-.121.86-.366 1.15-.136.161-.337.31-.603.443.403.146.707.375.914.69.205.313.308.694.308 1.142 0 .463-.117.878-.353 1.245a2.167 2.167 0 01-1.453 1.006c-.344.07-.716.105-1.118.105H5.6V8.372h3.822z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.177 9.727h1.722c.378 0 .69.041.935.122.283.117.425.357.425.722 0 .327-.108.555-.322.684-.215.13-.494.194-.837.194H7.177V9.727zm7.405 2.1c.216-.22.522-.33.913-.33.361 0 .663.103.908.31.243.209.38.511.408.912h-2.637c.056-.375.192-.673.408-.893zm-5.458.913H7.177v2.081h1.92c.343 0 .611-.046.802-.137.347-.17.52-.494.52-.974 0-.407-.167-.685-.504-.838-.188-.084-.452-.129-.79-.132z"
        fill="#000"
      />
    </svg>
  );
}

export default Behance;
