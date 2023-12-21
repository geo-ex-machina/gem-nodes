module.exports = {
    isStringConvertibleToInt: function (str) {
        const parsedValue = parseInt(str, 10);
        return Number.isFinite(parsedValue) && str !== '';
    }, 
    checkAttributes: function (d, prototype) {
        Object.keys(prototype).forEach((attributeName) => {
            const attr = env.get(attributeName);
            if (typeof attr == 'number') {
                if (attr === 0) {
                    node.warn("Attribute " + attributeName + " is numeric, value default to 0, or set to 0 by the user");
                }
                d[attributeName] = parseFloat(attr);
            }
            else if (this.isStringConvertibleToInt(attr)) {
                d[attributeName] = parseFloat(attr);
            }
            else if (attr) {
                d[attributeName] = attr;
            }
            else {
                node.warn("Attribute " + attributeName + " is not set");
            }
        })
    }
};
