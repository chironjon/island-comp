import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: var(--secondary-one-norm);
  color: var(--text);
  border: none;
  /* border-radius */
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  &:hover {
    background-color: var(--text);
    color: var(--secondary-one-norm);
    border: none;
  }
`

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
}
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button`
  
   /* from video */

  letter-spacing: 0.5px;

  padding: 2px 5px 2px 5px;
  font-size: 14px;
  background-color: #067d9e;
  color: #8bfffb;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;  /* from video */
  justify-content: center;  /* from video */

  ${getButtonStyles}
`;