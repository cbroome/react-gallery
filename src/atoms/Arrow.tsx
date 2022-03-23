import styled from 'styled-components';

interface IArrow {
    rotation?: 'left' | 'right';
}

/**
 * SVG arrow
 */
export const Arrow = styled.div<IArrow>`
    height: 25px;
    width: 25px;
    background-repeat: no-repeat;
    background-size: auto;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z'/%3E%3C/svg%3E");
    transform: ${(p) =>
        p.rotation === 'left' ? 'rotate(180deg)' : 'rotate(0)'};
`;
