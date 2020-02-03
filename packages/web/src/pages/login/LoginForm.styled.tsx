import { styled, Button } from "components";

export const StyledForm = styled.form`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

export const LoginButton = styled(Button)`
  && {
    margin: ${({ theme }) => theme.spacing(3, 0, 2)};
  }
`;
