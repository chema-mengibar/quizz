import React, {ReactElement} from 'react'
import { useHistory  } from 'react-router-dom';

import { useThemeContext } from '~/context/Theme.context';
import CoreService from '~/services/CoreService/CoreService';


const ReactCtxInit = (): ReactElement => {

  const history = useHistory();

  const core = CoreService.getInstance()
  core.configService.initControlKeys( history )

  return <></>
  
};

export default ReactCtxInit
