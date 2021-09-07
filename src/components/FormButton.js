import React from 'react';
import { Button } from 'react-native-elements';
//import {windowHeight,windowWidth} from '../utils/Dimensions';
const FormButton =({buttonTitle,buttonStyle})=> {
    return (
       <Button
       title={buttonTitle}
       style={buttonStyle}
       />
    );
};
export default FormButton;
