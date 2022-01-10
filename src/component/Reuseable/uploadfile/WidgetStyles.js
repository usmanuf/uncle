import styled from "styled-components";



export const ProgressBar = styled.div`
 
  div {
    width: ${({ percentage }) => `${percentage}%`};
    transition: width 1s;
    height: 100%;
    background: var(--theme-color);
  }
`;

export const Count = styled.p`
 
`;
