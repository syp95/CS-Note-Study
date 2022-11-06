const proxy = new Proxy(target, handler);

// 대상에 접근하기 전 흐름을 가로채 대상의 앞단 인터페이스 역할

//미들웨어
const authJWT = require('../middlewares/jwt-auth');

router.get('/:id', authJWT, async (req, res) => {
    //user 정보
});

// 프록시 서버
// AWS API GATEWAY?

// 프론트 > 프록시 서버 > API요청 > API
// CORS 문제 해결 때

//https://velog.io/@esthevely/JS-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%97%90%EC%84%9C-Proxy-%EA%B0%9D%EC%B2%B4-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0
