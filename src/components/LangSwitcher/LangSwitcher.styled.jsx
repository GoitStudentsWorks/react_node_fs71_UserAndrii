import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    > :nth-child(1) {
        margin-right: 10px;
  }
`;

export const Button = styled.button`
  background: var(--main-background-color);
  display: flex;
  align-items: center;
  border: none;
  border-radius: 16px;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  color: var(--accent-color);
  font-family: inherit;
  font-size: 10px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: -0.28px;

  padding: 5px 15px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    padding: 10px 20px;
    margin-left: 24px;
    margin-bottom: 0;
  }
`;