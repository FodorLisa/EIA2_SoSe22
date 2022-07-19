"use strict";
var GardenSimulator;
(function (GardenSimulator) {
    let UserAction;
    (function (UserAction) {
        UserAction[UserAction["PLANT"] = 0] = "PLANT";
        UserAction[UserAction["WATER"] = 1] = "WATER";
        UserAction[UserAction["FERTILIZE"] = 2] = "FERTILIZE";
        UserAction[UserAction["FIGHT_PEST"] = 3] = "FIGHT_PEST";
        UserAction[UserAction["HARVEST"] = 4] = "HARVEST";
    })(UserAction = GardenSimulator.UserAction || (GardenSimulator.UserAction = {}));
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=UserAction.js.map