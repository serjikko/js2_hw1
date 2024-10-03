function deepEqual(actual, expected, path = '$') {
    if (actual === expected) {
        return true; 
    }
    if (typeof actual !== 'object' || actual === null || typeof expected !== 'object' || expected === null) {
        throw new Error(`Неравные значения по пути: ${path}`);
    }
    const actualKeys = Object.keys(actual);
    const expectedKeys = Object.keys(expected);
    if (actualKeys.length !== expectedKeys.length) {
        throw new Error(`Неравное количество ключей по пути: ${path}`);
    }
    for (const key of actualKeys) {
        const newPath = `${path}.${key}`;
        if (!expectedKeys.includes(key)) {
            throw new Error(`Отсутствует ключ '${key}' по пути: ${newPath}`);
        }
        deepEqual(actual[key], expected[key], newPath);
    }
    return true; 
}
const obj1 = {
    a: {
        b: 1,
    },
};
const obj2 = {
    a: {
        b: 2,
    },
};
const obj3 = {
    a: {
        b: 1,
    },
};
console.log(deepEqual(obj1, obj1)); 
try {
    deepEqual(obj1, obj2); 
} catch (e) {
    console.error(e.message);
}
console.log(deepEqual(obj1, obj3)); 