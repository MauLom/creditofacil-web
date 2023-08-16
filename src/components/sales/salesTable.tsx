import { Button } from "baseui/button";
import { Table } from "baseui/table";
import { Search } from "baseui/icon";
import * as React from "react";
import { Block } from "baseui/block";
export default function SalesTable() {
    const COLUMNS = ['Ticket', 'Fecha y hora', 'Monto', 'Acciones', 'Ver Mas'];
    const [dataTable, setDataTable] = React.useState([])

    React.useEffect(() => {
        let arrType = []
        arrType.push('00001')
        arrType.push('16/8/2023-15:30:56')
        arrType.push('$450')
        arrType.push(<Button key="someKeyUnique">Eliminar</Button>)
        arrType.push(<Search />)

        let arrType2 = []
        arrType2.push('00002')
        arrType2.push('16/8/2023-16:30:56')
        arrType2.push('$250')
        arrType2.push(<Button key="someKeyUnique">Eliminar</Button>)
        arrType2.push(<Search />)

        let arr = [arrType, arrType2]
        setDataTable(arr)
    }, [])
    return (
        <Block>
            <Table columns={COLUMNS} data={dataTable} />
        </Block>
    )
}