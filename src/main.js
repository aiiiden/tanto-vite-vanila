import {
  ConnectorEvent,
  requestRoninWalletConnector,
} from "@sky-mavis/tanto-connect";

const $connectButton = document.getElementById("connect-button");
const $status = document.getElementById("status");

// Request Ronin Wallet Connector only
const roninConnector = await requestRoninWalletConnector();

$connectButton.addEventListener("click", async () => {
  try {
    const { account, chainId, provider } = await roninConnector.connect();
    $status.innerText = `Connected to ${account} on chain ${chainId}`;
  } catch (error) {
    console.error("Error connecting to Ronin Wallet:", error);
    $status.innerText = "Error connecting to Ronin Wallet";
    return;
  }
});
