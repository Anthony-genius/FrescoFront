import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

import {
    Container,
    ContainerHeader,
    ContentContainer,
    BoardContainer,
    HeaderButtons,
    DropDown,
    BoardImage,
    MoreButton
} from './styles';

const RecentBoards = () => {
    return (
        <Container className="mt-4">
            <ContainerHeader>
                <span>Recent Boards</span>
                <HeaderButtons>
                    <span>Owned by</span>
                    <DropDown className="ml-2 mr-2">
                        <option>me</option>
                        <option>others</option>
                    </DropDown>
                    <DropDown className="mr-2">
                        <option>Last Opened</option>
                        <option>First Opened</option>
                    </DropDown>
                    <FontAwesomeIcon icon={faList} size="lg" />
                </HeaderButtons>
            </ContainerHeader>
            <ContentContainer className="mt-2">
                <BoardContainer className="mr-4 ml-4">
                    <BoardImage>
                        <FontAwesomeIcon icon={faImage} size="4x" />
                    </BoardImage>
                    <div className="m-2 position-relative">
                        <p className="mb-1">Journey Map 1</p>
                        <span className="small">Opened Oct 7, 2020</span>
                        <MoreButton>
                            <FontAwesomeIcon icon={faEllipsisV} />
                        </MoreButton>
                    </div>
                </BoardContainer>
                <BoardContainer className="mr-4 ml-4">
                    <BoardImage>
                        <FontAwesomeIcon icon={faImage} size="4x" />
                    </BoardImage>
                    <div className="m-2 position-relative">
                        <p className="mb-1">Journey Map 1</p>
                        <span className="small">Opened Oct 7, 2020</span>
                        <MoreButton>
                            <FontAwesomeIcon icon={faEllipsisV} />
                        </MoreButton>
                    </div>
                </BoardContainer><BoardContainer className="mr-4 ml-4">
                    <BoardImage>
                        <FontAwesomeIcon icon={faImage} size="4x" />
                    </BoardImage>
                    <div className="m-2 position-relative">
                        <p className="mb-1">Journey Map 1</p>
                        <span className="small">Opened Oct 7, 2020</span>
                        <MoreButton>
                            <FontAwesomeIcon icon={faEllipsisV} />
                        </MoreButton>
                    </div>
                </BoardContainer>
            </ContentContainer>
        </Container>
    )
}

export default RecentBoards;