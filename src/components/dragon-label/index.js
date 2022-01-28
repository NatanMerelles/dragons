import styled from 'styled-components';

const colors = {
  fire: '#DA5932',
  light: '#F9D27A',
  air: '#54A656',
  root: '#5F4126',
  water: '#1FB5B5',
  darkness: '#7A2F7C',
}

const dragonsColors = new Proxy(colors, {
  get: (target, prop) => target.hasOwnProperty(prop) ? target[prop] : '#d4d4d4'
})

const DragonLabel = styled.span`
  padding: 6px 12px;
  background: ${props => `${dragonsColors[props.variant]}44`};
  border: 1px solid ${props => dragonsColors[props.variant]};
  border-radius: 8px;
`;

export { DragonLabel }