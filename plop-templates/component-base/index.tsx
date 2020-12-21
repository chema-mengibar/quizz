import React, {ReactElement} from 'react'

import { useThemeContext } from '~/context/Theme.context';
import CoreService from '~/services/CoreService/CoreService';

import {
 	{{> MyName }}Styled,
} from "./{{> my-name }}.styles";
import {  {{> MyName }}Props, } from "./{{> my-name }}.types";


const {{> MyName }} = ({dataCY}:{{> MyName }}Props): ReactElement => {

  const {t} = CoreService

  return (
    <{{> MyName }}Styled data-cy={dataCY}>

    {t('dummy')}

    </{{> MyName }}Styled>
  )
 };

export default {{> MyName }}
