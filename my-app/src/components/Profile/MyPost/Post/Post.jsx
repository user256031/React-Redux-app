import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div>
                <div className={s.item}>
                    <img src='https://i1.sndcdn.com/artworks-1kK2LeUMqtUH5SIx-IIYPDA-t500x500.jpg'/>
                    {props.message}
                </div>
                <div className={s.Like}>
                    <span>Like </span>
                    {props.likesCount}
                </div>
            </div>
        </div>

    )
        ;
}
export default Post;

