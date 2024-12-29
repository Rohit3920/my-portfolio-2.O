
export function SocialMediaIcon({icon}) {
    const {url, iconCls} = icon
    return (
            <a
                className="btn btn-link btn-floating btn-lg text-body m-1"
                href={url}
                role="button"
                data-mdb-ripple-color="dark"
            ><i className={`fab ${iconCls}`}></i></a>
    )
}
