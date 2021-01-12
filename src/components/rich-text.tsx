import React from 'react';
import { BLOCKS, MARKS, Inline, Block } from '@contentful/rich-text-types';
import { Options as RichTextReactRendererOptions } from '@contentful/rich-text-react-renderer';
import { renderRichText, ContentfulRichTextGatsbyReference, RenderRichTextData } from 'gatsby-source-contentful/rich-text';

const Bold: React.FC = ({ children }) => <b>{children}</b>;
const Text: React.FC = ({ children }) => <p>{children}</p>;

const options: RichTextReactRendererOptions = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: React.ReactNode) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      );
    },
  },
};

interface IRichTextProps extends React.HTMLAttributes<HTMLDivElement> {
  richText: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  className?: string;
}

const RichText: React.FC<IRichTextProps> = ({ richText, ...props }) => (
  <div {...props}>{richText && renderRichText(richText, options)}</div>
);

export default RichText;
