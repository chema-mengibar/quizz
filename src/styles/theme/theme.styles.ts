

export interface AppTheme {
  color:{
    base: {
      d1: string
      _: string
    },
    text:{
      _: string
      l1: string
    },
    textContrast:{
      _: string
      l1: string
    },
    primary:{
      d1: string
      _: string
    },
    secondary:{
      d1: string
      _: string
    },
    success:{
      d1: string
      _: string
    },
    error:{
      d1: string
      _: string
    }
  }
}

export const themeDefault: AppTheme = {
  color:{
    base: {
      d1: '#dbdbdb',
      _: '#ffffff',
    },
    text:{
      _: '#000000',
      l1: '#333333',
    },
    textContrast:{
      _: '#ffffff',
      l1: '#ffffff88',
    },
    primary:{
      d1: '#de0d39',
      _: '#FF587B',
    },
    secondary:{
      d1: '#3765b0',
      _: '#6397eb',
    },
    success:{
      d1: '#167d01',
      _: '#1ba300',
    },
    error:{
      d1: '#7d015e',
      _: '#bd2b98',
    }
  }
};


export const themeKids: AppTheme = {
  color:{
    base: {
      d1: '#dbdbdb',
      _: '#ffffff',
    },
    text:{
      _: '#333333',
      l1: '#555555',
    },
    textContrast:{
      _: '#ffffff',
      l1: '#ffffff88',
    },
    primary:{
      d1: '#edb037',
      _: '#edd537',
    },
    secondary:{
      d1: '#3c992f',
      _: '#2dbd2d',
    },
    success:{
      d1: '#167d01',
      _: '#1ba300',
    },
    error:{
      d1: '#7d015e',
      _: '#bd2b98',
    }
  }
};


/*

USAGE in styled components:

export const DivStyled = styled.div((props) => css`
 
  color: ${ props.theme.props.color.primary._ }; 

`);

*/