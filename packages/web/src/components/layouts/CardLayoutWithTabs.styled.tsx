import { styled } from "components";
import { Paper } from "@material-ui/core";

export const CardPage = styled.div`
  margin-top: 48px;
  width: 100%;
  position: relative;
  display: flex;
`;

export const CardedContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${({ theme }) => theme.spacing(6)}px;
  z-index: 2;
  width: 100%;
`;

export const CardLayoutContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(6)}px;
`;

export const CardedContentContainer = styled(Paper)``;

export const CardedHeader = styled.div`
  color: ${({ theme }) => theme.palette.primary.contrastText};
  height: 92px;
  display: flex;
  align-items: center;

  h1 {
    display: inline-flex;
    align-items: center;
    > svg {
      margin-right: ${({ theme }) => theme.spacing(1)}px;
    }
  }
`;

export const CardedToolbar = styled.div`
  height: 48px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
`;

export const HeaderBackGround = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.dark};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 140px;
  background-size: cover;
  pointer-events: none;
`;
