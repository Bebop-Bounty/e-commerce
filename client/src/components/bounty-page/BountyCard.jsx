import React from 'react';
import BountyCardBack from './BountyCardBack.jsx';
import { OpenOfferModal } from './helpers.js';
import coinGoldImage from '../../assets/coin-gold.png'; // Import the image

import {
  StyledBountyCard,
  StyledImageContainer,
  StyledImage,
  StyledPrice,
  StyledMidcardContainer,
  StyledTitle,
  StyledWanted,
  StyledBuyerName,
  StyledMakeOfferButton,
  StyledCurrentOffers,
  StyledDeadline,
  StyledBottomCardContainer,
  StyledTitleAndName,
} from './StyledBountyBoard.js';

export default function BountyCardFront({ Bounty, flipCard, isFlipped, showOfferModal }) {
  const { id, buyer_id, name, price, image } = Bounty;

  let { deadline } = Bounty;
  deadline = deadline.substring(5, 10);
  deadline = deadline.replaceAll('-', '/');
  if (deadline.charAt(0) === '0') {
    deadline = deadline.slice(1);
  }
  return (
    <StyledBountyCard onClick={flipCard} isFlipped={isFlipped}>
      <StyledImageContainer>
        <StyledWanted>WANTED</StyledWanted>
        <StyledImage src={image} />
      </StyledImageContainer>
      <StyledMidcardContainer>
        <StyledPrice>${price}</StyledPrice>
        <StyledTitleAndName>
          <StyledTitle>{name}</StyledTitle>
          <StyledBuyerName>BuyerName</StyledBuyerName>
        </StyledTitleAndName>
      </StyledMidcardContainer>
      <StyledBottomCardContainer>
        <StyledCurrentOffers>Current Offers: ###</StyledCurrentOffers>
        <StyledDeadline>{deadline}</StyledDeadline>
      </StyledBottomCardContainer>
    </StyledBountyCard>
  );
}
