import React from "react";
import { Button } from "baseui/button";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { HeadingXSmall } from "baseui/typography";
export default function AccesoriosForm() {

    const doSubmit = (e) => {
        e.preventDefault()
        console.log("Submitted: ", e.target["imei"].value)
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
                <Button kind="secondary">
                    Regresar
                </Button>
            </form>
        </>
    )
}