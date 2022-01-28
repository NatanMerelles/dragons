import styled from "styled-components";

const HiddenInput = styled.input`
  display: none;
  width: 0;
  height: 0;
  border: 0;
`;

const Toggle = styled.span`
  position: relative;
  display: block;
  width: 100px;
  height: 40px;
  border-radius: 25px;
  background: ${props => props.theme.colors.secondary};

  ${HiddenInput}:checked + & > :first-child {
    transform: translateX(60px);
  }
`;

const Circle = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: ${props => props.theme.colors.color};
  color: ${props => props.theme.colors.secondary};
  border-radius: 50%;
  left: 5px;
  top: 5px;
  transition: all 0.5s;  
`;

export { HiddenInput, Toggle, Circle }