module.exports = {
    isStringConvertibleToInt: function (str) {
        const parsedValue = parseInt(str, 10);
        return Number.isFinite(parsedValue) && str !== '';
    }, 
    checkAttributes: function (prototype, env_obj) {
        Object.keys(prototype).forEach((attributeName) => {
            const attr = env_obj[attributeName];
            if (this.isStringConvertibleToInt(attr)) {
                env_obj[attributeName] = parseFloat(attr);
            }
            else if (attr) {
                env_obj[attributeName] = attr;
            }
            else {
                //console.log("Attribute " + attributeName + " is not set");
            }
        })
    }
};
