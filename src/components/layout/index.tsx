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

    function close() {
        setOpenDoSellModal(false);
    }

    const now = new Date()
    const override_buttonsSize = {
        BaseButton: { style: { width: "50%" } }
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
                <ModalHeader>Hello world</ModalHeader>
                <ModalBody>
                    Selecciona una opcion para agregar a la venta :
                    {/* <ButtonGroup> */}
                    <br />
                    <Button kind="secondary" overrides={override_buttonsSize}>Payjoy</Button>
                    <br />
                    <Button kind="secondary" overrides={override_buttonsSize}>Celulares credito facil</Button>
                    <br />
                    <Button kind="secondary" overrides={override_buttonsSize}>Accesorios</Button>
                    <br />
                    <Button kind="secondary" overrides={override_buttonsSize}>Reparaciones</Button>
                    <br />
                    <Button kind="secondary" overrides={override_buttonsSize}>Otro</Button>
                    {/* </ButtonGroup> */}

                </ModalBody>
                <ModalFooter>
                    <ModalButton kind="tertiary" onClick={close}>
                        Cancel
                    </ModalButton>
                    {/* <ModalButton onClick={close}>Okay</ModalButton> */}
                </ModalFooter>
            </Modal>
        </Grid >
    )
}