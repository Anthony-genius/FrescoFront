import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote, faPencilAlt, faShapes, faImage, faGem, faComment, faArrowsAltH, faTh } from "@fortawesome/free-solid-svg-icons";
import TemplateModalContainer from '../modal_container';
import TemplateModal from '../template_modal';

import {
    HeaderContainer, 
    ContentContainer,
    ButtonComponent, 
} from './styles';

const NewTemplateToolbar = () => {
    const [isSelected, setSelected] = React.useState(1);
    const [isShown, setShown] = React.useState(false);

    return (
        <>
            <TemplateModalContainer isShown={isShown} hide={()=>setShown(false)} headerText="Templates" modalContent={
                <TemplateModal></TemplateModal>
            }></TemplateModalContainer>
            <HeaderContainer>
                <ContentContainer>
                    <ButtonComponent active={isSelected === 1} onClick={()=>setSelected(1)}>
                        <FontAwesomeIcon icon={faStickyNote} size="2x" />
                        <span>Sticky note</span>
                    </ButtonComponent>
                    <ButtonComponent active={isSelected === 2} onClick={()=>setSelected(2)}>
                        <FontAwesomeIcon icon={faPencilAlt} size="2x" />
                        <span>Draw</span>
                    </ButtonComponent>
                    <ButtonComponent active={isSelected === 3} onClick={()=>setSelected(3)}>
                        <FontAwesomeIcon icon={faShapes} size="2x" />
                        <span>Shape</span>
                    </ButtonComponent>
                    <ButtonComponent active={isSelected === 4} onClick={()=>setSelected(4)}>
                        <FontAwesomeIcon icon={faImage} size="2x" />
                        <span>Image</span>
                    </ButtonComponent>
                    <ButtonComponent active={isSelected === 5} onClick={()=>setSelected(5)}>
                        <FontAwesomeIcon icon={faGem} size="2x" />
                        <span>Icons</span>
                    </ButtonComponent>
                    <ButtonComponent active={isSelected === 6} onClick={()=>setSelected(6)}>
                        <FontAwesomeIcon icon={faComment} size="2x" />
                        <span>Comment</span>
                    </ButtonComponent>
                    <ButtonComponent active={isSelected === 7} onClick={()=>setSelected(7)}>
                        <FontAwesomeIcon icon={faArrowsAltH} size="2x" />
                        <span>Line</span>
                    </ButtonComponent>
                    <ButtonComponent active={isSelected === 8} onClick={()=>{
                        setSelected(8);
                        setShown(true);
                    }}>
                        <FontAwesomeIcon icon={faTh} size="2x" />
                        <span>Templates</span>
                    </ButtonComponent>
                </ContentContainer>
            </HeaderContainer>
        </>
    )
}

export default NewTemplateToolbar;