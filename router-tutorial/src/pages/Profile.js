import { useParams } from "react-router-dom";

const data = {
    velopert: {
        name: '김민준',
        description: '소개',
    },
    gildong: {
        name: '홍길동',
        description: '홍길동입니다',
    },
};

const Profile = () => {
    const params = useParams();
    const profile = data[params.username];

    return(
        <div>
            <h1>사용자 프로필</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <div>
                    <p>프로필이 존재하지 않음</p>
                </div>
            )}
        </div>
    );
};

export default Profile;
