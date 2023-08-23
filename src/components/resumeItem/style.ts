import style from 'styled-components';

export const Container = style.div`
    flex:  1;

`
export const Title = style.div`
    text-align: center;
    font-weight: bold;
    color: #888;
    margin-bottom: 5px;
`
export const Info = style.div<{color?: string}>`
    text-align: center;
    font-weight: bold;
    color: ${props => props.color ?? '#000'} ;
` 