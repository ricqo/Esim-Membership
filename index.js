// connects to index.html
async function connect() {
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    document.getElementById("connectButton").innerHTML = "connectted";
  } else {
    document.getElementById("connectButton").innerHTML =
      "please install metamask";
  }
}

async function createMembershipPlanId{
    

}
