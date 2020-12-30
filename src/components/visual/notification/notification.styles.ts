import styled, { css } from "styled-components";

export const NotificationStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const NotySuccessStyled = styled.div`
  color: green;
  font-size: 200px;
  text-shadow: 2px 2px 5px green;
`;

export const NotyErrorStyled = styled.div`
  color: red;
  font-size: 200px;
  text-shadow: 2px 2px 20px red;
`;

export const NotyMsgStyled = styled.div`
  background-color: orange;
  background: linear-gradient(214deg,orange 10%, rgba(255,255,255, 1) 40%, orange 90%);
  color: rgb(17,8,51);
  font-size: 50px;
  box-shadow: 2px 2px 20px orange;
  padding: 20px 50px;
  border-radius:10px
`;
