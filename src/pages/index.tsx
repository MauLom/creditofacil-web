import * as React from 'react';
import { useStyletron } from 'baseui';
import Layout from '../components/layout';
import { Spinner } from "baseui/spinner";
import { Block } from "baseui/block";
import TicketProvider from '../context/ticketContext';
const Index: React.FC = () => {
  // const [css, theme] = useStyletron();
  const [showSpinner, setShowSpinner] = React.useState(false)
  const override_block_spinner = {
    Block: {
      style: {
        backgroundColor: "rgba(255, 228, 228, 0.5) ",
        width: "99%",
        height: "98%",
        justifyContent: "center",
        position: "absolute",
        display: "flex"
      }
    }
  }
  return (
    <Block>
      <TicketProvider>
        {showSpinner &&
          <Block overrides={override_block_spinner}>
            <Spinner $size={"large"} style={{ margin: "200px" }} />
          </Block>
        }
        <Layout changeSpinner={setShowSpinner} />
      </TicketProvider>
    </Block>
  );
};

export default Index;
