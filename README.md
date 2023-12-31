# Esim-Membership
Membership system deployed to the TON blockchain requiring yearly or monthly recurring payments in TON to enable access to Eluded Esim  


Contract creator(owner) will be able to set the price and the token adresss when they deploy the contract and call the createMembershipPlan function. contract creator will also need to set their address as merchant adress in order to withdraw funds transfered to the smart contract. The person that deploys the contract is set as contract owner.

struct MembershipPlan {
    address ownerAddress;
    address token;
    uint amount;        // Membership price in the specified ERC-20 token
    uint frequency;     // Time duration for each subscription in seconds
}

contract owner will also se the subscription frequencey this is set in secconds.
frequency is used to set the nextCharge for the subscription nextCharge is set ny adding the current timestamp and frequncey togethor so if a user subscribes on January 1, 2023 nextCharge is set to the current timestamp (January 1, 2023) plus 30 days.

nextCharge = block.timestamp + membershipPlan.frequency;


subscribers will also be to cancel memberships.

