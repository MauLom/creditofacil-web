import * as React from 'react';
import { ITickets, TicketsContextType } from '../@types/ticket';

export const TicketContext = React.createContext<TicketsContextType | null>(null);

interface Props {
    children: React.ReactNode;
}

const TicketProvider: React.FC<Props> = ({ children }) => {
    const [tickets, setTicket] = React.useState<ITickets[]>([]);
    const saveTicket = (ticket: ITickets) => {
        const newTicket: ITickets = {
            id_string: ticket.id_string,
            type: ticket.type,
            amount: ticket.amount,
            detail: ticket.detail,
        };
        setTicket([...tickets, newTicket]);
    };
    // const updateTicket = (id_string: string, ticket: ITickets) => {
    //     tickets.filter((ticket: ITickets) => {
    //         if (ticket.id_string === id_string) {


    //             setTicket([...todos]);
    //         }
    //     });
    // };
    return <TicketContext.Provider value={{ tickets, saveTicket }}>{children}</TicketContext.Provider>;
};

export default TicketProvider;