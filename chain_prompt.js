function toKebabCase(text) {
    // Step 1: Convert to lowercase and replace spaces with hyphens
    // Step 2: Replace underscores and multiple spaces/hyphens with a single hyphen
    // Step 3: Insert hyphens between lowercase and uppercase letters (camelCase/PascalCase)
    return text
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // Step 3
        .replace(/[_\s\-]+/g, '-')              // Step 2
        .toLowerCase();                         // Step 1
}
module.exports = {
    toKebabCase
};
