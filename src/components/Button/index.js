import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Button({ to, href, children, onClick, className, large, medium, small, line, rounded, ...passProps }) {
    let Comp = 'button';
    const props = {
        to,
        href,
        children,
        onClick,
        className,
        large,
        medium,
        rounded,
        small,
        line,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', { large, medium, small, rounded, line });
    return (
        <Comp className={classes} href={href} to={to} onClick={onClick} {...passProps}>
            {children}
        </Comp>
    );
}

export default Button;
