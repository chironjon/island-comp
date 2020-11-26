import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px; /*from video*/
`;

export const LogoContainer = styled(Link)`
  height: 90%;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .logo {
    height: 50px;
    width: 50px;
  }
`;

export const OptionsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  font-size: 14px;
  padding: 10px 10px 5px 10px;
  cursor: pointer;
  background-color: var(--secondary-one-norm);
  border: 1px solid var(--secondary-one-light);
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`
