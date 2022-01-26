import styled from 'styled-components';

const CardStyle = styled.li`
  position: relative;
  display: inline-block;

  --items-by-row: 4;
  width: calc((100% - var(--items-by-row) * 24px) / var(--items-by-row));

  margin: 12px;
  padding: 12px;
  background: ${props => props.theme.colors.secondary};
  
  border: 1px solid black;
  border-radius: 14px;

  @media (max-width: 940px) {
		--items-by-row: 3;
	}

  @media (max-width: 750px) {
		--items-by-row: 2;
	}

  @media (max-width: 520px) {
		--items-by-row: 1;
	}
`;

const Buttons = styled.div`
  position: absolute;
  display: flex;
  opacity: ${props => props.isSelecting ? 1 : 0};
  top: 0.8rem;
  right: 0.8rem;
  transition: opacity 0.3s ease-in;

  > :last-child {
    margin-left: 0.8rem;
  }

  ${CardStyle}:hover &{
    opacity: 1;
  }
`;

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

const Label = styled.span`
  padding: 6px 12px;
  background: ${props => `${dragonsColors[props.variant]}44`};
  border: 1px solid ${props => dragonsColors[props.variant]};
  border-radius: 8px;
`;

const Checkbox = styled.input`
  width: '16px';
  height: '16px'; 
`;

export { Buttons, CardStyle, Checkbox, Label }