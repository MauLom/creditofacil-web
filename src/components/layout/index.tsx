import React from "react"
import { HeadingXSmall } from "baseui/typography"
import dictionary from "./dictionary.json"
import { Grid, Cell } from "baseui/layout-grid"

import { Card } from "baseui/card";
import { Button, KIND } from "baseui/button";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalButton,
} from 'baseui/modal';
import { BaseButton } from "baseui/button/styled-components";
export default function Layout() {
    const [openDoSellModal, setOpenDoSellModal] = React.useState(false)

    const CRUDE_OBJ = {
        venue: "Arteaga",
        userName: "Andres",
    }

    const sell_options =[
        {text: "Payjoy"},
        {text: "Celulares credito facil"},
        {text: "Accesorios"},
        {text: "Reparaciones"},
        {text: "Otros"}
    ]
    function close() {
        setOpenDoSellModal(false);
    }

    const now = new Date()
    const override_buttonsSize = {
        BaseButton: { style: { width: "50%", margin:"3px" } }
    }

    return (
        <Grid>
            <Cell gridColumns={2}>
                <Card>
                    <HeadingXSmall> {`${dictionary.venue_prefix} ${CRUDE_OBJ.venue}`}</HeadingXSmall>
                    <HeadingXSmall> {`${dictionary.user_prefix} ${CRUDE_OBJ.userName}`}</HeadingXSmall>
                </Card>
            </Cell>
            <Cell gridColumns={2} >
                <Card>
                    {now.toLocaleDateString()}
                </Card>
            </Cell>
            <Cell gridColumns={1}>
                <Button onClick={() => setOpenDoSellModal(true)}>
                    {`${dictionary.do_sell}`}
                </Button>
                <Button>
                    {`${dictionary.see_sales}`}
                </Button>
                <Button>
                    {`${dictionary.cash_out}`}
                </Button>
            </Cell>
            <Cell gridColumns={1}>
                <Card>
                    Espacio de previsualizacion de items
                </Card>
            </Cell>
            <Modal onClose={close} isOpen={openDoSellModal}>
                <ModalHeader> Selecciona una opcion para agregar a la venta :</ModalHeader>
                <ModalBody>
                    {sell_options.map(eachOption => (
                        <Button key={`button-${eachOption.text}`} kind="secondary" overrides={override_buttonsSize}>
                            {eachOption.text}
                        </Button>
                    ))}
                </ModalBody>
                <ModalFooter>
                    <ModalButton kind="tertiary" onClick={close}>
                        Ir atras
                    </ModalButton>
                    {/* <ModalButton onClick={close}>Okay</ModalButton> */}
                </ModalFooter>
            </Modal>
        </Grid >
    )
}