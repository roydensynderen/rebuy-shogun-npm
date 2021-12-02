"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRebuyData = void 0;
const react_1 = require("react");
function useRebuyData(dataSourceUrl) {
    const [rebuyData, setRebuyData] = (0, react_1.useState)({});
    (0, react_1.useEffect)(() => {
        fetch(dataSourceUrl)
            .then(response => response.json())
            .then(data => {
            setRebuyData(data);
        });
    }, []);
    return rebuyData;
}
exports.useRebuyData = useRebuyData;
