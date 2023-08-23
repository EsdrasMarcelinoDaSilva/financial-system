import style from 'styled-components'

export const TableLine = style.tr`

`
export const TableColumn = style.td`
    padding: 10px 0;
`
export const Category = style.div<{color: string}>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #FFF;
    background-color: ${props => props.color};
`
export const Value = style.div<{color: string}>` 
    color: ${props => props.color};
`