import { Button } from "baseui/button";
import { Card } from "baseui/card";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
export default function FormMoneyOut(props) {

    return (
        <Card>
            <form onSubmit={(event) => props.onSubmit(event)}>
                <FlexGrid flexGridColumnCount={2}
                    flexGridColumnGap="scale200">
                    <FlexGridItem>
                        <FormControl
                            label={() => "Motivo"}
                            caption={() => "*Obligatorio"}
                        >
                            <Input name="motive" />
                        </FormControl>
                    </FlexGridItem>
                    <FlexGridItem>
                        <FormControl
                            label={() => "Monto"}
                            caption={() => "*Obligatorio"}
                        >
                            <Input type="number" name="amount" />
                        </FormControl>
                    </FlexGridItem>
                    <FlexGridItem>
                        <Button type="submit">
                            Agregar
                        </Button>
                    </FlexGridItem>
                </FlexGrid>
            </form>
        </Card>
    )
}