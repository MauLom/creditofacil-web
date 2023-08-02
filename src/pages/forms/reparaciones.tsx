import React from "react";
import { Button } from "baseui/button";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { HeadingXSmall, LabelXSmall } from "baseui/typography";
import { Select, Value } from "baseui/select";
import { TicketContext } from "../../context/ticketContext";
import { ITickets } from "../../@types/ticket";
export default function ReparacionesForm({doClose}) {
    const [value, setValue] = React.useState<Value>([]);
    const [valueFixer, setValueFixer] = React.useState<Value>([]);
    const ticketContext = React.useContext(TicketContext)
    const doSubmit = (e) => {
        e.preventDefault()
        const newTicket: ITickets = {
            id_string: e.target["folio"].value,
            type: `Reparaciones-(${valueFixer[0].id})-(${value[0].id})`,
            amount: e.target["amount"].value,
            detail: {
                fixer: valueFixer[0].id,
                type: value[0].id,
                concept: e.target["concept"].value,
                folio: e.target["folio"].value,
                amount: e.target["amount"].value
            }
        }
        ticketContext.saveTicket(newTicket)
        doClose()
    }

    return (
        <>
            <HeadingXSmall>Agregar pago Reparaciones</HeadingXSmall>
            <LabelXSmall>Tipo </LabelXSmall>
            <Select
                options={[
                    { id: 'Hardware', color: '#F0F8FF' },
                    { id: 'Software', color: '#FAEBD7' },
                ]}
                labelKey="id"
                valueKey="color"
                onChange={({ value }) => setValue(value)}
                value={value}
            />
            <form onSubmit={(event) => doSubmit(event)}>

                <FormControl
                    label={() => "Concepto"}
                    caption={() => "*Obligatorio"}
                >
                    <Input name="concept" />
                </FormControl>
                <FormControl
                    label={() => "Folio"}
                    caption={() => "*Obligatorio"}
                >
                    <Input name="folio" />
                </FormControl>
                <FormControl
                    label={() => "Monto"}
                    caption={() => "*Obligatorio"}
                >
                    <Input
                        name="amount"
                        startEnhancer="$"
                    />
                </FormControl>

                <LabelXSmall>Tecnico Encargado </LabelXSmall>
                <Select
                    options={[
                        { id: 'Jeho', color: '#F0F8FF' },
                        { id: 'Bicri', color: '#FAEBD7' },
                    ]}
                    labelKey="id"
                    valueKey="color"
                    onChange={({ value }) => setValueFixer(value)}
                    value={valueFixer}
                />

                <Button type="submit">
                    Agregar
                </Button>
            </form>

        </>
    )
}