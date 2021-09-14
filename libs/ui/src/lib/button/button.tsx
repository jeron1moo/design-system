import {
  MouseEventHandler,
  ReactNode
} from 'hoist-non-react-statics/node_modules/@types/react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps {
  color?: 'primary' | 'secondary' | 'danger' | 'inherit';
  shape?: 'pill' | 'rounded' | 'circular';
  autoFocus?: boolean;
  loading?: boolean;
  size?: 'sm' | 'md';
  disabled?: boolean;
  onClick?: MouseEventHandler;
  children: ReactNode;
  content: string;
}

const SIZES = {
  SMALL: 'sm',
  MEDIUM: 'md'
};

const COLORS = {
  PRIMARY: 'primary',
  PRIMARY_OUTLINE: 'primaryOutline',
  SECONDARY: 'secondary',
  SECONDARY_OUTLINE: 'secondaryOutline',
  OUTLINE: 'outline'
};

const SHAPES = {
  PILL: 'pill',
  ROUNDED: 'rounded',
  CIRCULAR: 'circular'
};

const StyledButton = styled.button`
  border: 0;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: ${(props) =>
    props.size === SIZES.SMALL ? '8px 16px' : '13px 20px'};
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);
  will-change: transform;
  vertical-align: top;
  white-space: nowrap;
  user-select: none;
  opacity: 1;
  margin: 0;
  font-size: ${(props) => (props.size === SIZES.SMALL ? '12ps' : '16px')};
  line-height: 28px;
  letter-spacing: 0.75px;
  font-weight: 600;

  ${(props) =>
    props.disabled &&
    `
      cursor: not-allowed !important;
      opacity: 0.5;
      &:hover {
        transform: none;
      }
    `}

  ${(props) => {
    switch (props.shape) {
      case SHAPES.PILL:
        return `
          border-radius: 40px;
        `;
      case SHAPES.CIRCULAR:
        return `
          border-radius: 50%;
        `;
      case SHAPES.ROUNDED:
        return `
          border-radius: 4px;
        `;
      default:
        return `
          border-radius: 40px;
        `;
    }
  }}


  ${(props) =>
    props.color === COLORS.PRIMARY &&
    `
      background: #5F2EEA;
      color: #F7F7FC;
      ${
        !props.loading &&
        `
          &:hover {
            transform: translate3d(0, -2px, 0);
            box-shadow: rgba(0, 0, 0, 0.2) 0 2px 6px 0;
            background: #5F2EEA;
          }
          &:active {
            transform: translate3d(0, 0, 0);
          }
          &:focus {
            transform: translate3d(0, 0, 0);
          }
        `
      }
    `}

   ${(props) =>
    props.color === COLORS.SECONDARY &&
    `
      border: 2px solid #5F2EEA;
      background: #F7F7FC;
      color: #5F2EEA;
      ${
        !props.loading &&
        `
          &:hover {
            transform: translate3d(0, -2px, 0);
            box-shadow: rgba(0, 0, 0, 0.2) 0 2px 6px 0;
            borderColor: #2A00A2;
          }
          &:active {
            transform: translate3d(0, 0, 0);
          }
          &:focus {
            transform: translate3d(0, 0, 0);
          }
        `
      }
      
    `}

  ${(props) =>
    !props.loading &&
    `
      &:hover {
        transform: translate3d(0, -2px, 0);
        box-shadow: rgba(0, 0, 0, 0.2) 0 2px 6px 0;
      }
      &:active {
        transform: translate3d(0, 0, 0);
      }
       &:focus {
        transform: translate3d(0, 0, 0);
        border: 8px solid #E4DAFF;
      }
    `};
`;

export function Button(props: ButtonProps) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

export default Button;
