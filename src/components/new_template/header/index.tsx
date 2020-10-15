import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faEye, faUndo, faRedo, faComments, faShareAlt } from "@fortawesome/free-solid-svg-icons";

import {
    HeaderContainer, 
    ContentContainer, 
    LogoTitle, 
    IconContainer, 
    LogoContainer,
    CommentBadge
} from './styles';

const NewTemplateHeader = () => {
    return (
        <HeaderContainer>
            <ContentContainer>
                <LogoContainer>
                    <LogoTitle>Fresco</LogoTitle>
                    <FontAwesomeIcon className="ml-4" icon={faUndo} size="lg" style={{fontSize: '20px'}} />
                    <FontAwesomeIcon className="ml-4" icon={faRedo} size="lg" style={{fontSize: '20px'}} />
                </LogoContainer>
                <IconContainer>
                    <FontAwesomeIcon style={{zIndex: 104, backgroundColor: 'white', borderRadius: "100px", fontSize: '25px'}} icon={faUserCircle} size="2x" />
                    <FontAwesomeIcon style={{zIndex: 103, backgroundColor: 'white', borderRadius: "100px", fontSize: '25px', marginLeft: "-15px"}} icon={faUserCircle} size="2x" />
                    <FontAwesomeIcon style={{zIndex: 102, backgroundColor: 'white', borderRadius: "100px", fontSize: '25px', marginLeft: "-15px"}} className="mr-4" icon={faUserCircle} size="2x" />
                    <FontAwesomeIcon className="mr-4" icon={faEye} size="2x" style={{fontSize: '25px'}} />
                    <div className="position-relative">
                        <FontAwesomeIcon className="mr-4" icon={faComments} size="2x" style={{fontSize: '25px'}} />
                        <CommentBadge>
                            <span style={{fontSize: '12px'}}>1</span>
                        </CommentBadge>
                    </div>
                    <FontAwesomeIcon className="mr-4" icon={faShareAlt} size="2x" style={{fontSize: '25px'}} />
                </IconContainer>
            </ContentContainer>
        </HeaderContainer>
    )
}

export default NewTemplateHeader;