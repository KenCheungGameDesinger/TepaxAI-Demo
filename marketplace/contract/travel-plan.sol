// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TravelPlan {
    struct Plan {
        string title;
        string description;
        uint256 price;
        address owner;
    }

    Plan[] public plans;
    mapping(address => uint256[]) public userPlans;

    event PlanCreated(uint256 indexed planId, string title, uint256 price, address indexed owner);
    event PlanPurchased(uint256 indexed planId, address indexed buyer);

    function createPlan(string memory _title, string memory _description, uint256 _price) public {
        plans.push(Plan(_title, _description, _price, msg.sender));
        uint256 planId = plans.length - 1;
        userPlans[msg.sender].push(planId);
        emit PlanCreated(planId, _title, _price, msg.sender);
    }

    function purchasePlan(uint256 _planId) public payable {
        require(_planId < plans.length, "Invalid plan ID");
        Plan storage plan = plans[_planId];
        require(msg.value >= plan.price, "Insufficient funds");

        payable(plan.owner).transfer(msg.value);
        userPlans[msg.sender].push(_planId);
        emit PlanPurchased(_planId, msg.sender);
    }

    function getPlanCount() public view returns (uint256) {
        return plans.length;
    }

    function getUserPlans(address _user) public view returns (uint256[] memory) {
        return userPlans[_user];
    }
}
