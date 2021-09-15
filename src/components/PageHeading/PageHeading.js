import s from './PageHeading.module.css';

function PageHeading({ text }) {
    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>{text}</h2>
        </div>
    );
}

export default PageHeading;
