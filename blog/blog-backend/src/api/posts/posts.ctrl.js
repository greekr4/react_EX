let postId = 1; // id 초깃값

// posts 배열 초기
const posts = [
    {
        id: 1,
        title: 'title',
        body: 'body',

    },
];

/*
포스트 작성
POST /api/posts
{ title, body }
*/
exports.wirte = ctx => {
    // REST API의 Request Body는 ctx.request.body에서 조회 불가
    const { title, body } = ctx.request.body;
    postId += 1;
    const post = { id: postId, title, body};
    posts.push(post);
    ctx.body = post;
};

/*
포스트 조회
GET /api/posts
*/

exports.list = ctx => {
    ctx.body = posts;
};

/*
특정 포스트 조회
POST /api/posts/:id
*/

exports.read = ctx => {
    const { id } = ctx.params;
    // 주어진 id로 포스트 찾기
    // 파라미터로 받아 온 값은 문자열 이므로 숫자로 변환하거나
    // 비교할 p.id 값을 문자열로 변경 해야함
    const post = posts.find(p => p.id.toString() === id);
    if (!post){
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않음',
        };
        return;
    };
    ctx.body = post;
};

/*
특정 포스트 제거
DELETE /api/posts/:id
*/
exports.remove = ctx => {
    const { id } = ctx.params;
    // 해당 id가 몇번째인지
    const index = posts.findIndex(p => p.id.toString === id);;
    // 없으면 오류
    if(index === -1){
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않음',
        };
        return;
    };
    // index 번째 제거
    posts.splice(index,1);
    ctx.status = 204; // No Content
};

/*
포스트 수정(교체)
PUT /api/posts/:id
{ title, body }
*/
exports.replace = ctx =>{
    //PUT 메서드는 전체 포스트 정보를 입력하여 데이터를 통째로 교체함
    const { id } = ctx.params;
    // 해당 id가 몇번째인지
    const index = posts.findIndex(p => p.id.toString === id);;
    // 없으면 오류
    if(index === -1){
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않음',
        };
        return;
    };
    // 교체
    posts[index] = {
        id,
        ...ctx.request.body,
    };
    ctx.body = posts[index];
};

/*
포스트 수정(특정필드)
PUT /api/posts/:id
{ title, body }
*/
exports.update = ctx => {
    const { id } = ctx.params;
    // 해당 id가 몇번째인지
    const index = posts.findIndex(p => p.id.toString === id);;
    // 없으면 오류
    if(index === -1){
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않음',
        };
        return;
    };
    // 기존값에 덮어씌움
    posts[index] = {
      ...posts[index],
      ...ctx.request.body,  
    };
    ctx.body = posts[index];
};
