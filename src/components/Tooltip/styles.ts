import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    cursor: pointer;

    position: relative;
    outline: 0;

    @media (max-width: 900px) {
    }
    &::before {
      content: attr(data-text);
      position: absolute;

      top: 50%;
      transform: translateY(-50%);

      right: 100%;
      margin-right: 15px;

      @media (max-width: 900px) {
        top: -70%;
        transform: translateY(-50%);

        left: -150%;
        margin-bottom: 15px;
        margin-right: 0px;
      }

      @media (max-width: 520px) {
        top: -66%;
        transform: translateY(-50%);


        left: -10%;
        margin-bottom: 15px;
      }

      width: 200px;
      padding: 10px;
      border-radius: 10px;
      background: ${theme.colors.backgroundBox};
      color: ${theme.colors.text};
      text-align: center;

      display: none;
    }

    &:hover::before {
      display: block;
    }

    &::after {
      content: '';
      position: absolute;

      right: 100%;
      margin-right: -5px;

      top: 50%;
      transform: translateY(-50%);

      border: 10px solid ${theme.colors.backgroundBox};
      border-color: transparent transparent transparent
        ${theme.colors.backgroundBox};

      display: none;

      @media (max-width: 900px) {
        right: 40%;

        top: 0%;
        transform: translateY(-50%);

        border-color: ${theme.colors.backgroundBox} transparent transparent
          transparent;
      }
    }

    &:hover::before,
    &:hover::after {
      display: block;
    }
  `}
`
