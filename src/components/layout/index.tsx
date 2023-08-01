import React from "react"
import { HeadingXSmall, LabelLarge, LabelSmall } from "baseui/typography"
import dictionary from "./dictionary.json"
import { Grid, Cell } from "baseui/layout-grid"

import { Card } from "baseui/card";
import { Button } from "baseui/button";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalButton,
} from 'baseui/modal';

import {Drawer} from 'baseui/drawer';
import PayjoyForm from "../../pages/forms/payjoy";
import FoxpayForm from "../../pages/forms/foxpay";
import CreditoFacilForm from "../../pages/forms/creditofacil";
import AccesoriosForm from "../../pages/forms/accesorios";
import OtroForm from "../../pages/forms/otro";
import ReparacionesForm from "../../pages/forms/reparaciones";
export default function Layout() {
    const [openDoSellModal, setOpenDoSellModal] = React.useState(false)
    const [isOpenDrawer, setIsOpenDrawer] = React.useState(false)
    const [formToBeRendered, setFormToBeRendered] = React.useState()
    const [moment, setMoment] = React.useState<Date>()
    const CRUDE_OBJ = {
        venue: "Arteaga",
        userName: "Andres",
    }

    const sell_options = [
        { text: "Payjoy", module: <PayjoyForm /> },
        { text: "Fox pay", module: <FoxpayForm /> },
        { text: "Celulares credito facil", module: <CreditoFacilForm /> },
        { text: "Accesorios", module: <AccesoriosForm /> },
        { text: "Reparaciones", module:<ReparacionesForm />  },
        { text: "Otros", module: <OtroForm /> }
    ]
    function close() {
        setOpenDoSellModal(false);
    }
    function closeDrawer() {
        setIsOpenDrawer(false);
    }

    function renderForm(module) {
        setIsOpenDrawer(true)
        setFormToBeRendered(module)
    }   

    const override_buttonsSize = {
        BaseButton: { style: { width: "50%", margin: "3px" } }
    }
    React.useEffect(()=>{
        // setMoment(new Date())
        const interval = setInterval(() => {
            setMoment(new Date());
          }, 1000);
      
          return () => clearInterval(interval);
    
    }, [])

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
                <Button onClick={() => setOpenDoSellModal(true)}>
                    {`${dictionary.do_sell}`}
                </Button>
                <Button>
                    {`${dictionary.see_sales}`}
                </Button>
                <Button onClick={()=> setIsOpenDrawer(true)}>
                    {`${dictionary.cash_out}`}
                </Button>
            </Cell>
            <Cell gridColumns={1}>
                <Card>
                    Espacio de previsualizacion de items
                </Card>
            </Cell>
            <Modal onClose={close} isOpen={openDoSellModal}>
                <ModalHeader> Selecciona una opcion para agregar a la venta</ModalHeader>
                <ModalBody>
                    {sell_options.map(eachOption => (
                        <Button key={`button-${eachOption.text}`} kind="secondary" overrides={override_buttonsSize} onClick={()=>renderForm(eachOption.module)}>
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