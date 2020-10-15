import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

import {HeaderContainer, ContentContainer, LogoTitle, IconContainer} from './styles';

const Header = () => {
    return (
        <HeaderContainer>
            <ContentContainer>
                <LogoTitle>Fresco</LogoTitle>
                <IconContainer>
                    <FontAwesomeIcon className="mr-4" icon={faQuestionCircle} size="2x" />
                    <FontAwesomeIcon icon={faUserCircle} size="2x" />
                </IconContainer>
            </ContentContainer>
        </HeaderContainer>
    )
}

export default Header;