import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from "@fortawesome/free-solid-svg-icons";

import {
    Container,
    TemplateContainer,
    Template
} from './styles';

const items = ['Journey maps', 'Innovation', 'Business Model', 'Product', 'Marketing'];

function renderRow(props: ListChildComponentProps) {
    const { index, style } = props;
  
    return (
      <ListItem button style={style} key={index}>
        <ListItemText primary={items[index]} />
      </ListItem>
    );
  }

const TemplateModal = () => {
    return (
        <Container>
            <FixedSizeList height={400} width={200} itemSize={46} itemCount={5} style={{border: '1px solid black', flex: 1}}>
                {renderRow}
            </FixedSizeList>
            <TemplateContainer>
                {
                    [0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => {
                        return (
                            <Template key={index}>
                                <FontAwesomeIcon icon={faImage} size="3x" />
                                <p>{`Template ${item+1}`}</p>
                            </Template>
                        )
                    })
                }
            </TemplateContainer>
        </Container>
    )
}

export default TemplateModal;