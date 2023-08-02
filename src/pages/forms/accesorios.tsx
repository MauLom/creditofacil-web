import React from "react";
import { Button } from "baseui/button";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { HeadingXSmall } from "baseui/typography";
import { TicketContext } from "../../context/ticketContext";
import { ITickets } from "../../@types/ticket";
export default function AccesoriosForm() {
    const ticketContext = React.useContext(TicketContext)
    const doSubmit = (e) => {
        e.preventDefault()
        const newTicket: ITickets ={
            id_string: e.target["concept"].value,
            type: `Accesorio(s)`,
            amount: e.target["amount"].value,
            detail:{
                concept: e.target["concept"].value,
                amount:e.target["amount"].value
            }
        }
        ticketContext.saveTicket(newTicket)
    }

    return (
        <>
            <HeadingXSmall>Agregar pago Accesorios</HeadingXSmall>
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