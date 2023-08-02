import React from "react";
import { Button } from "baseui/button";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { HeadingXSmall, LabelXSmall } from "baseui/typography";
import { Select, Value } from "baseui/select";
export default function CreditoFacilForm() {
    const [value, setValue] = React.useState<Value>([]);

    const doSubmit = (e) => {
        e.preventDefault()
        console.log("Submitted: ", e.target["imei"].value)
    }

    return (
        <>
            <HeadingXSmall>Agregar pago Celulares credito facil</HeadingXSmall>
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
                    label={() => "Referencia"}
                    caption={() => "*Obligatorio"}
                >
                    <Input name="ref" />
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