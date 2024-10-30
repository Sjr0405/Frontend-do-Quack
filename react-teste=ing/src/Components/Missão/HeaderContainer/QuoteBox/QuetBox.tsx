import React from 'react';
import { StyledQuoteBox, Author, Highlight } from './QuetBoxStyles';

interface QuoteBoxProps {
  text: string;
  author: string;
}

const QuoteBox: React.FC<QuoteBoxProps> = ({ text, author }) => {
  const highlightedText = text.split(' ').map((word, index) => {
    if (word.toLowerCase() === 'sucesso' || word.toLowerCase() === 'thigaso pato') {
      return <Highlight key={index}>{word}</Highlight>;
    }
    return word + ' ';
  });

  const highlightedAuthor = author.split(' ').map((word, index) => {
    if (word.toLowerCase() === 'thigaso pato') {
      return <Highlight key={index}>{word}</Highlight>;
    }
    return word + ' ';
  });

  return (
    <StyledQuoteBox>
      "{highlightedText}" <br />
      <Author>{highlightedAuthor}</Author>
    </StyledQuoteBox>
  );
};

export default QuoteBox;