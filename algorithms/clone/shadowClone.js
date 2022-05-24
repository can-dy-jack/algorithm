function cloneShallow(obj) {
    let target = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            target[key] = obj[key];
        }
    }
    return target;
}
