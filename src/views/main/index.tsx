import * as React from 'react';
import RecentBoards from '../../components/main/recent_boards';
import Templates from '../../components/new_template/modal_template';

import {
    MainContainer
} from './styles';

const Main = () => {
    return (
        <MainContainer className="mt-4">
            <Templates></Templates>
            <RecentBoards></RecentBoards>
        </MainContainer>
    )
}

export default Main;