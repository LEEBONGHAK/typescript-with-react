import 'styled-components';

// theme에서 자동완성을 사용하는 방법
declare module 'styled-components' {
  export interface DefaultTheme {
    redColor: string;
  }
}