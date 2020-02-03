import { styled } from "components";

export const StyledPageHeader = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.dark};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  display: flex;
  background-size: cover;
  height: 92px;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing(6)}px;
  h1 {
    display: inline-flex;
    align-items: center;
    > svg {
      margin-right: ${({ theme }) => theme.spacing(1)}px;
    }
  }
`;

export const StyledPage = styled.div`
  margin-top: 48px;
  width: 100%;
`;

export const StyledContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(6)}px;
`;
