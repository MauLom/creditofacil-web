import React from "react";
import { Button } from "baseui/button";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { HeadingXSmall, LabelXSmall } from "baseui/typography";
import { Select, Value } from "baseui/select";
import { TicketContext } from "../../components/context/ticketContext";
import { ITickets } from "../../@types/ticket";
export default function PayjoyForm({doClose}) {
    const [value, setValue] = React.useState<Value>([]);
    const ticketContext = React.useContext(TicketContext)
    const doSubmit = (e) => {
        e.preventDefault()
        const newTicket: ITickets ={
            id_string: e.target["tag"].value,
            type: `Payjoy-(${value[0].id})`,
            amount: e.target["amount"].value,
            detail:{
                tag: e.target["tag"].value,
                imei: e.target["imei"].value,
                amount:e.target["amount"].value
            }
        }
        ticketContext.saveTicket(newTicket)
        doClose()
    }

    return (
        <>
            <HeadingXSmall>Agregar pago Payjoy</HeadingXSmall>
            <LabelXSmall>Tipo </LabelXSmall>
            <Select
                options={[
                    { id: 'Enganche', color: '#F0F8FF' },
                    { id: 'Parcialidad', color: '#FAEBD7' },
                ]}
                labelKey="id"
                valueKey="color"
                onChange={({ value }) => setValue(value)}
                value={value}
            />
            <form onSubmit={(event) => doSubmit(event)}>

                <FormControl
                    label={() => "Tag"}
                    caption={() => "*Obligatorio"}
                >
                    <Input name="tag" />
                </FormControl>
                <FormControl
                    label={() => "IMEI"}
                    caption={() => ""}
                >
                    <Input name="imei" />
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
                <Button type="submit">
                    Agregar
                </Button>
            </form>
        </>
    )
}