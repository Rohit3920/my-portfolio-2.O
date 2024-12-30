
export function SectionHeader(props) {
    const { sName, color, bgColor, uderlineWidth } = props;
    return (
        <div id="sectionHeader" className="col-12 text-center">
            <h2 className={`text-${color}`}>{sName}</h2>
            <div className={`bg-${bgColor}`} id="Header-underline" style={{width : `${uderlineWidth}`}}></div>
        </div>
    )
}


// we have use and send this props like :
// <SectionHeader sName ={"About"} color = {"dark"} bgColor = {"gray"} uderlineWidth={"4rem"} />