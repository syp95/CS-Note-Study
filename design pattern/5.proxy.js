const proxy = new Proxy(target, handler);

// 대상에 접근하기 전 흐름을 가로채 대상의 앞단 인터페이스 역할

//미들웨어
const authJWT = require('../middlewares/jwt-auth');

router.get('/:id', authJWT, async (req, res) => {
    //user 정보
});
