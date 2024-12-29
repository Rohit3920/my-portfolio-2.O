
export function ProfileIcon(props) {

    const {url, iconCls} = props.data

    return (
        <li className="social-icon">
            <a href={url} target="_blank"><i
                id="social-icon" className={`fab ${iconCls}`}></i></a>
        </li>
    )
}
