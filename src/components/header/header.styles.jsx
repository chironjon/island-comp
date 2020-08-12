import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px; /*from video*/
`;

export const LogoContainer = styled(Link)`
  height: 90%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .logo {
    height: 100%;
    width: 40px;
  }
`;

export const OptionsContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  font-size: 14px;
  padding: 0 10px;
  cursor: pointer;
`
