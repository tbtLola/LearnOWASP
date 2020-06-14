import {createGlobalStyle} from 'styled-components';
import ArchiveRegularFont from './Archive-Regular.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'TestFont';
        src: local('TestFont'),
        url(${ArchiveRegularFont}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;