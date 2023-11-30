pragma solidity ^0.8.0;

contract CouponContract {
    struct Coupon {
        string name;
        string description;
        string discountType;
        uint256 discountAmount;
        string validFrom;
        string validTo;
        string conditions;
        uint256 maxUsagePerUser;
        address createdBy;
        bool exists;
    }

    mapping(uint256 => Coupon) public coupons;
    uint256 public couponCount;

    event CouponPublished(uint256 indexed id, string name);
    event CouponUpdated(uint256 indexed id, string name);
    event CouponDeleted(uint256 indexed id, string name);

    function publishCoupon(
        string memory _name,
        string memory _description,
        string memory _discountType,
        uint256 _discountAmount,
        string memory _validFrom,
        string memory _validTo,
        string memory _conditions,
        uint256 _maxUsagePerUser
    ) external {
        coupons[couponCount] = Coupon({
            name: _name,
            description: _description,
            discountType: _discountType,
            discountAmount: _discountAmount,
            validFrom: _validFrom,
            validTo: _validTo,
            conditions: _conditions,
            maxUsagePerUser: _maxUsagePerUser,
            createdBy: msg.sender,
            exists: true
        });
        couponCount++;
        emit CouponPublished(couponCount - 1, _name);
    }

    function getCoupon(uint256 _id) external view returns (Coupon memory) {
        return coupons[_id];
    }

    function updateCoupon(
        uint256 _id,
        string memory _name,
        string memory _description,
        string memory _discountType,
        uint256 _discountAmount,
        string memory _validFrom,
        string memory _validTo,
        string memory _conditions,
        uint256 _maxUsagePerUser
    ) external {
        require(coupons[_id].createdBy == msg.sender, "Not authorized to update this coupon");
        coupons[_id] = Coupon({
            name: _name,
            description: _description,
            discountType: _discountType,
            discountAmount: _discountAmount,
            validFrom: _validFrom,
            validTo: _validTo,
            conditions: _conditions,
            maxUsagePerUser: _maxUsagePerUser,
            createdBy: msg.sender,
            exists: true
        });
        emit CouponUpdated(_id, _name);
    }

    function deleteCoupon(uint256 _id) external {
        require(coupons[_id].createdBy == msg.sender, "Not authorized to delete this coupon");
        delete coupons[_id];
        emit CouponDeleted(_id, coupons[_id].name);
    }
}
