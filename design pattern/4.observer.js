// MVC에도 사용
// Model > Controller > View > update()

//Proxy Observer
function createReactiveObject(target, callback) {
    const proxy = new Proxy(target, {
        set(obj, prop, value) {
            console.log(obj);
            console.log(prop);
            console.log(value);
            if (value !== obj[prop]) {
                const prev = obj[prop];
                obj[prop] = value;
                callback(`${prop}가 [${prev}] >> [${value}] 로 변경되었습니다`);
            }
            return true;
        },
    });
    return proxy;
}
const a = {
    치킨: '후라이드',
};
const b = createReactiveObject(a, console.log);
b.치킨 = '후라이드';
b.치킨 = '양념';
b.치킨 = '반반';

//React?

useEffect(callback, [target]);
