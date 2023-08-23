import * as C from './style'
import { Item } from '../../types/Item'

type Props = {
    onAdd: (item: Item) => void
}

export const InputArea = ({ onAdd }: Props) => {

    const handleAddEvent = () => {
        // const
        // onAdd()
    }

    return(
        <C.Container>
            <button onClick={handleAddEvent}>Add</button>
        </C.Container>
    )
}