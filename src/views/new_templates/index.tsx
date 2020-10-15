import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchMinus, faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import NewTemplateToolbar from '../../components/new_template/toolbar';
import Slider from '@material-ui/core/Slider';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import {
    MainContainer,
    ContentContainer,
    ZoomContainer
} from './styles';

const muiTheme = createMuiTheme({
    overrides:{
        MuiSlider: {
            thumb:{
                color: "black",
            },
            track: {
                color: 'black'
            },
            rail: {
                color: 'black'
            }
        }
  }
});
const NewTemplate = () => {
    const [value, setValue] = React.useState<number | number[]>(100);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue);
    };
    
    return (
        <MainContainer>
            <NewTemplateToolbar></NewTemplateToolbar>
            <ContentContainer>
                <ZoomContainer>
                    <p style={{textAlign: 'center', marginBottom: 0}}>{value}%</p>
                    <div style={{flexDirection: 'row', display: 'flex', width: '150px', alignItems: 'center'}}>
                        <FontAwesomeIcon className="mr-2" icon={faSearchMinus} />
                        <ThemeProvider theme={muiTheme}>
                            <Slider 
                                defaultValue={100}
                                min={20}
                                max={200}
                                step={10}
                                value={value} 
                                onChange={handleChange} 
                                aria-labelledby="continuous-slider" 
                            />
                        </ThemeProvider>
                        <FontAwesomeIcon className="ml-2" icon={faSearchPlus} />
                    </div>
                </ZoomContainer>
            </ContentContainer>
        </MainContainer>
    )
}

export default NewTemplate;