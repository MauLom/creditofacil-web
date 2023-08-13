import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { Card } from "baseui/card"


const PaymentTpvForm = () => {
    return (
        <Card>
            <form>
                <FormControl
                    label={() => "Folio de aprobacion"}
                    caption={() => "*Obligatorio"}
                >
                    <Input name="concept" />
                </FormControl>
            </form>
        </Card>
    )
}
export default PaymentTpvForm