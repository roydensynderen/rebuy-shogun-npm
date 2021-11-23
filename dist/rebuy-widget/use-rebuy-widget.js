"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRebuyWidget = void 0;
const react_1 = require("react");
function useRebuyWidget(shopifyDomain) {
    (0, react_1.useEffect)(() => {
        const rebuyScript = document.querySelector('[data-script="rebuy"]');
        if (!rebuyScript) {
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://cdn.rebuyengine.com/onsite/js/rebuy.js?shop=${shopifyDomain}`;
            script.dataset.script = 'rebuy';
            document.head.append(script);
        }
    }, [shopifyDomain]);
}
exports.useRebuyWidget = useRebuyWidget;
