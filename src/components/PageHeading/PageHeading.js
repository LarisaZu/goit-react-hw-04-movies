import s from './PageHeading.module.css';

function PageHeading({ text }) {
    return <h2 className={s.title}>{text}</h2>;
}

export default PageHeading;
