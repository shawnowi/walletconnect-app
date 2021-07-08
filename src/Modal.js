import { useState } from 'react'
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

function Modal() {

    const [state, setState] = useState({ 
        connector: null
      });

    async function walletConnectInit() {
        const bridge = "https://bridge.walletconnect.org";
        const connector = new WalletConnect({ bridge, qrcodeModal: QRCodeModal });

        setState(connector)

        if (!connector.connected) {
            await connector.createSession();
        }
        await subscribeToEvents();
    }

    async function subscribeToEvents() {
        const connector = state.connector;

        if (!connector) {
            //window.alert("opps")
            return;
        } else {
            //window.alert("yeah")
        }



    }

    return (
        <div>
            <button
                onClick={() => {
                    walletConnectInit()
                }}
            >
                Connect to WalletConnect
            </button>
        </div>
    )
}

export default Modal;