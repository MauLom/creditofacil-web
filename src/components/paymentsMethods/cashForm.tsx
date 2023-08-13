import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { Card } from "baseui/card"
import { HeadingXSmall } from "baseui/typography";
import { useState } from "react";

const PaymentCashForm = ({total}) => {
    const [payAmount, setPayAmount] = useState(0)
    return (
        <Card>
            <form>
                <FormControl
                    label={() => "Monto Recibido"}
                    caption={() => "*Obligatorio"}
                >
                    <Input onChange={(e) =>{setPayAmount(Number.parseInt(e?.target?.value))}} name="concept" type="number" />
                </FormControl>
            </form>
            <span>Cambio: <b>${payAmount - total}</b></span>
        </Card>

    )
}

export default PaymentCashForm