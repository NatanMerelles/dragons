import { useGlobalContext } from '../../../contexts';

import { faMoon, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Switch } from '../..';
import { FooterStyle, SwitchWrapper } from './style';

const Footer = () => {
  const global = useGlobalContext();

  return (
    <FooterStyle>
      <p>
        Development By: Natan Merelles
      </p>

      <SwitchWrapper>
        <Switch
          icon={<FontAwesomeIcon icon={global.mode === 'dark' ? faMoon : faLightbulb} />}
          onChange={(e) => global.changeMode(e.target.checked ? 'dark' : 'light')}
          checked={global.mode === 'dark'}
        />
      </SwitchWrapper>

    </FooterStyle>
  )
}

export { Footer }