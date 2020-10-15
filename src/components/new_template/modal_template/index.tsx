import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";

import {
    TemplateContainer,
    BlankTemplate,
    RowContainer
} from './styles';

const Templates = () => {
    return (
        <TemplateContainer className="p-2">
            <p>Create New Board</p>
            <RowContainer>
                <BlankTemplate className="m-2" onClick={()=>{
                    window.location.href="/templates";
                }}>
                    <FontAwesomeIcon icon={faPlusCircle} size="4x" />
                    <p>Blank</p>
                </BlankTemplate>
                <BlankTemplate className="m-2">
                    <FontAwesomeIcon icon={faImage} size="4x" />
                    <p>Template 1</p>
                </BlankTemplate>
                <BlankTemplate className="m-2">
                    <FontAwesomeIcon icon={faImage} size="4x" />
                    <p>Template 2</p>
                </BlankTemplate>
                <BlankTemplate className="m-2">
                    <FontAwesomeIcon icon={faImage} size="4x" />
                    <p>Template 3</p>
                </BlankTemplate>
                <BlankTemplate className="m-2">
                    <FontAwesomeIcon icon={faImage} size="4x" />
                    <p>Template 4</p>
                </BlankTemplate>
                <BlankTemplate className="m-2">
                    <FontAwesomeIcon icon={faImage} size="4x" />
                    <p>Template 5</p>
                </BlankTemplate>
            </RowContainer>
        </TemplateContainer>
    )
}

export default Templates;