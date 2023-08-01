export interface ITickets {
    id_string: string;
    type: string;
    amount: string;
    detail: object;
  }
  export type TicketsContextType = {
    tickets: ITickets[];
    saveTicket: (ticket: ITickets) => void;
    // updateTicket: (id_string?: string, type?: string, amount?:string, detail?: object) => void;
  };