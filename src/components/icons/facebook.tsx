import * as React from 'react';

export interface ISVGProps extends React.SVGProps<SVGSVGElement> {
  title?: string;
  description?: string;
}

function Facebook({ title, description, ...props }: ISVGProps) {
  const labelId = title && `svg${title.replaceAll(/\s/g, '')}`;
  return (
    <svg viewBox="0 0 24 25" aria-labelledby={labelId} {...props}>
      {title && <title id={labelId}>{title}</title>}
      {description && <desc>{description}</desc>}
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M24 12.372c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.855V15.84H7.078v-3.469h3.047V9.73c0-3.008 1.792-4.67 4.533-4.67 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.875v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.327 24 18.362 24 12.372z"
          fill="#0A0A0A"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" transform="translate(0 .372)" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Facebook;
