import React from "react";
import { Button } from "baseui/button";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { HeadingXSmall } from "baseui/typography";
import { TicketContext } from "../../components/context/ticketContext";
import { ITickets } from "../../@types/ticket";
export default function OtroForm({doClose}) {
    const ticketContext = React.useContext(TicketContext)
    const doSubmit = (e) => {
        e.preventDefault()
        const newTicket: ITickets = {
            id_string: e.target["concept"].value,
            type: `Otro`,
            amount: e.target["amount"].value,
            detail: {
                concept: e.target["concept"].value,
                amount: e.target["amount"].value
            }
        }
        ticketContext.saveTicket(newTicket)
        doClose()
    }

    return (
        <>
            <HeadingXSmall>Agregar pago otro</HeadingXSmall>
            <form onSubmit={(event) => doSubmit(event)}>

                <FormControl
                    label={() => "Concepto"}
                    caption={() => "*Obligatorio"}
                >
                    <Input name="concept" />
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