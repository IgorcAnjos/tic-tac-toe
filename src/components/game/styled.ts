import styled, { css } from "styled-components";
import { DefaultContainerProps, SlotProps } from "./types";

export const DefaultContainer = styled.div<DefaultContainerProps>`
 ${(props) => css`
    height: ${props.height ?? '100%'};
    width: ${props.width ?? '100%'};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    display: ${props.display ?? ''};
    flex-direction: ${props.flexDirection ?? ''};
    margin: auto;
  `}
`;

export const BoardContainer = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: 100px 100px 100px;
    align-items: center;
    justify-content: center;
    column-gap: 0.7rem;
    row-gap: 0.7rem;
    background-color: grey;
    user-select: none;
    border: solid 0.7rem grey
  `}
`;

export const SlotContainer = styled.div<SlotProps>`
  ${(props) => css`
    height: 6rem;
    width: 6rem;
    background-color: ${props.enabled ? 'black' : 'white'};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 3.5rem;
  `}
`;