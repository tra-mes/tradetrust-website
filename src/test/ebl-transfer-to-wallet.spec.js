import { Selector } from "testcafe";
import { uploadDocument } from "./helper";

fixture("Render 'Transferred to wallet' status").page`http://localhost:3000`;

const ViewEndorsementChainButton = Selector("#endorsement-chain-button");
const TransferredSign = Selector("[data-testid='transferred-to-wallet']");

test("should display 'Transferred to wallet' when document is owned by wallet address", async (t) => {
  await uploadDocument("./fixture/ebl-transfer-to-wallet.json");
  await t.click(ViewEndorsementChainButton);
  await t.expect(TransferredSign.count).eql(1);
});
