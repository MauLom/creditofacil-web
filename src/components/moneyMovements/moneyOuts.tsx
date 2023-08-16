import { Button } from "baseui/button";
import { Table } from "baseui/table";
import { Search } from "baseui/icon";
import * as React from "react";
import { Block } from "baseui/block";
import FormMoneyOut from "./form";
export default function MoneyOuts() {
    const COLUMNS = ['Motivo', 'Fecha y hora', 'Monto', 'Usuario', 'Acciones'];
    const [dataTable, setDataTable] = React.useState([])
    const [showFormNewMoneyOut, setShowFormNewMoneyOut] = React.useState(false)

    function submitAction(e){
        e.preventDefault()
        setShowFormNewMoneyOut(false)
    }

    React.useEffect(() => {
        let arrType = []
        arrType.push('Comidas')
        arrType.push('16/8/2023-12:11:56')
        arrType.push('$150')
        arrType.push('Andres')
        arrType.push(<Button key="someKeyUnique">Eliminar</Button>)

        let arrType2 = []
        arrType2.push('Deposito')
        arrType2.push('16/8/2023-13:30:56')
        arrType2.push('$50')
        arrType2.push('Marta')
        arrType2.push(<Button key="someKeyUnique2">Eliminar</Button>)

        let arr = [arrType, arrType2]
        setDataTable(arr)
    }, [])
    return (
        <Block>
            <Table columns={COLUMNS} data={dataTable} />
            {!showFormNewMoneyOut && <Button onClick={() => { setShowFormNewMoneyOut(true) }}>Registrar salida de dinero</Button>}
            {showFormNewMoneyOut && <FormMoneyOut onSubmit={submitAction}/>}
        </Block>
    )
}