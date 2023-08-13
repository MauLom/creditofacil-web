import React from "react"
import { HeadingXSmall, LabelLarge, LabelSmall } from "baseui/typography"
import dictionary from "./dictionary.json"
import { Grid, Cell } from "baseui/layout-grid"
import { Block } from "baseui/block";
import { Card, StyledBody } from "baseui/card";
import { Button, SHAPE } from "baseui/button";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalButton,
} from 'baseui/modal';
import { Table } from 'baseui/table';
import { Drawer } from 'baseui/drawer';
import PayjoyForm from "../../pages/forms/payjoy";
import FoxpayForm from "../../pages/forms/foxpay";
import CreditoFacilForm from "../../pages/forms/creditofacil";
import AccesoriosForm from "../../pages/forms/accesorios";
import OtroForm from "../../pages/forms/otro";
import ReparacionesForm from "../../pages/forms/reparaciones";
import { TicketContext } from "../context/ticketContext";
import { ButtonGroup } from "baseui/button-group";
import { Delete, Search } from "baseui/icon";
import PaymentCashForm from "../paymentsMethods/cashForm";
import PaymentTpvForm from "../paymentsMethods/tpvForm";

export default function Layout({ changeSpinner }) {
    const [openDoSellModal, setOpenDoSellModal] = React.useState(false)
    const [openDoCobroModal, setOpenDoCobroModal] = React.useState(false)
    const [isOpenDrawer, setIsOpenDrawer] = React.useState(false)
    const [formToBeRendered, setFormToBeRendered] = React.useState()
    const [moment, setMoment] = React.useState<Date>()
    const [dataTable, setDataTable] = React.useState([])
    const [total, setTotal] = React.useState(0)
    const [toggleCashTpv, setToggelCashTpv] = React.useState(false)
    const ticketsContext = React.useContext(TicketContext)
    const CRUDE_OBJ = {
        venue: "Arteaga",
        userName: "Andres",
    }

    const sell_options = [
        { text: "Payjoy", module: <PayjoyForm doClose={closeDrawer} /> },
        { text: "Fox pay", module: <FoxpayForm doClose={closeDrawer} /> },
        { text: "Celulares credito facil", module: <CreditoFacilForm doClose={closeDrawer} /> },
        { text: "Accesorios", module: <AccesoriosForm doClose={closeDrawer} /> },
        { text: "Reparaciones", module: <ReparacionesForm doClose={closeDrawer} /> },
        { text: "Otros", module: <OtroForm doClose={closeDrawer} /> }
    ]

    const COLUMNS = ['Tipo venta', 'Monto', 'Ref/Tag/Concepto', 'Acciones'];

    function close() {
        setOpenDoSellModal(false);
    }
    function closeDrawer() {
        setIsOpenDrawer(false);
    }
    function handleCobroModal() {
        setOpenDoCobroModal(!openDoCobroModal)
    }
    function renderForm(module) {
        setIsOpenDrawer(true)
        setFormToBeRendered(module)
    }


    function doCobrar() {

    }

    const override_buttonsSize = {
        BaseButton: { style: { width: "50%", margin: "3px" } }
    }
    const override_card = {
        Contents: { style: { display: "flex", justifyContent: "space-between" } }
    }



    React.useEffect(() => {
        const interval = setInterval(() => {
            setMoment(new Date());
        }, 1000);

        return () => clearInterval(interval);

    }, [])

    React.useEffect(() => {
        moment == undefined ? changeSpinner(true) : changeSpinner(false)
    }, [moment, changeSpinner])

    React.useEffect(() => {

        const doUpdate = () => {
            let newTicketsReadables = []
            ticketsContext.tickets.forEach((eachTicket, idx) => {
                let readableTicket = []
                readableTicket.push(eachTicket.type)
                readableTicket.push(eachTicket.amount)
                readableTicket.push(eachTicket.id_string)
                readableTicket.push(
                    <ButtonGroup>
                        <Button shape={SHAPE.circle} onClick={(e) => doDelete(idx)}>
                            <Delete />
                        </Button>
                        <Button shape={SHAPE.circle}>
                            <Search />
                        </Button>
                    </ButtonGroup>
                )
                newTicketsReadables.push(readableTicket)
            })
            setDataTable(newTicketsReadables)
        }

        const doDelete = (elementToBeDeletedIdx) => {
            ticketsContext.deleteTicket(ticketsContext.tickets[elementToBeDeletedIdx])
            doUpdate()
        }
        let newTicketsReadables = []
        let newCalc = 0
        ticketsContext.tickets.forEach((eachTicket, idx) => {
            let readableTicket = []
            readableTicket.push(eachTicket.type)
            readableTicket.push(eachTicket.amount)
            readableTicket.push(eachTicket.id_string)
            readableTicket.push(
                <ButtonGroup>
                    <Button shape={SHAPE.circle} onClick={(e) => doDelete(idx)}>
                        <Delete />
                    </Button>
                    <Button shape={SHAPE.circle} disabled>
                        <Search />
                    </Button>
                </ButtonGroup>
            )
            newTicketsReadables.push(readableTicket)

            newCalc = newCalc + Number.parseInt(eachTicket.amount)
        })
        setDataTable(newTicketsReadables)
        setTotal(newCalc)
    }, [ticketsContext, dataTable])

    return (
        <Grid>
            <Cell gridColumns={2}>
                <Card>
                    <LabelLarge> {dictionary.venue_prefix}</LabelLarge>
                    <LabelSmall>{CRUDE_OBJ.venue}</LabelSmall>

                    <LabelLarge> {dictionary.user_prefix} </LabelLarge>
                    <LabelSmall>{CRUDE_OBJ.userName}</LabelSmall>
                </Card>
            </Cell>
            <Cell gridColumns={2} >
                <Card>
                    {`${moment?.toLocaleDateString()}-${moment?.toLocaleTimeString()}`}

                </Card>
            </Cell>
            <Cell gridColumns={1}>
                <Block style={{ display: "flex", justifyContent: "space-around", margin: "2% 0 0 0" }}>
                    <Button onClick={() => setOpenDoSellModal(true)}>
                        {`${dictionary.do_sell}`}
                    </Button>
                    <Button disabled>
                        {`${dictionary.see_sales}`}
                    </Button>
                    <Button disabled>
                        {`${dictionary.cash_out}`}
                    </Button>
                </Block>
            </Cell>
            <Cell gridColumns={1}>
                <Block style={{ margin: "2% 0 2% 0" }}>
                    <Card>
                        <Table columns={COLUMNS} data={dataTable} />
                    </Card>
                </Block>
            </Cell>
            <Cell gridColumns={2}>
                <Block>
                    <Card>
                        {`Total: ${total}`}
                    </Card>
                </Block>

            </Cell>
            <Cell gridColumns={2}>
                <Block style={{ display: "flex", justifyContent: "space-around" }}>
                    <Button onClick={handleCobroModal}>
                        Cobrar
                    </Button>
                    <Button disabled>
                        Vaciar
                    </Button>
                </Block>
            </Cell>
            <Cell gridColumns={1}>
                <Block>
                    <Button disabled>
                        Hacer corte
                    </Button>
                </Block>
                <Block>
                    <Button disabled>
                        Ver corte
                    </Button>
                </Block>
            </Cell>


            <Modal onClose={close} isOpen={openDoSellModal}>
                <ModalHeader> Selecciona una opcion para agregar a la venta</ModalHeader>
                <ModalBody style={{ textAlign: "center" }}>
                    {sell_options.map(eachOption => (
                        <Button key={`button-${eachOption.text}`} kind="secondary" overrides={override_buttonsSize} onClick={() => renderForm(eachOption.module)}>
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

            <Modal onClose={handleCobroModal} isOpen={openDoCobroModal}>
                <ModalHeader>
                    Total a cobrar: ${total}
                </ModalHeader>
                <ModalBody>
                    <Card overrides={override_card}>
                        <StyledBody>
                            <Button onClick={() => { setToggelCashTpv(true) }} disabled={toggleCashTpv}>
                                Cobro en efectivo
                            </Button>
                            <Button onClick={() => { setToggelCashTpv(false) }} disabled={!toggleCashTpv}>
                                Cobro en terminal
                            </Button>
                        </StyledBody>
                        {toggleCashTpv ? <PaymentCashForm total={total} /> : <PaymentTpvForm />}
                        <Button>Cobrar</Button>

                    </Card>
                </ModalBody>
                <ModalFooter>
                    <ModalButton kind="tertiary" onClick={handleCobroModal}>
                        Ir atras
                    </ModalButton>
                    {/* <ModalButton onClick={close}>Okay</ModalButton> */}
                </ModalFooter>
            </Modal>

            <Drawer
                onClose={() => closeDrawer()}
                isOpen={isOpenDrawer}
                anchor={"right"}
            >
                {formToBeRendered}
            </Drawer>

        </Grid >
    )
}