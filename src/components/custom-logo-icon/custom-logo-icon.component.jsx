const CustomLogoIcon = ({color}) => {
    return (
        <svg width="50px" height="39px" viewBox="0 0 50 39" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>Group</title>
            <desc>Created with Sketch.</desc>
            <g id="WiP" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Artboard" transform="translate(-90.000000, -38.000000)">
                    <g id="Group" transform="translate(90.000000, 38.000000)">
                        <polygon id="Rectangle" fill={color} points="3 14 25 26.5 47 14 40.855176 39 9.08421785 39"></polygon>
                        <polygon id="Triangle" fillOpacity="0.262838724" fill={color} points="25 8 40 39 10 39"></polygon>
                        <circle id="Oval" fill={color} cx="2" cy="9" r="2"></circle>
                        <circle id="Oval" fill={color} cx="25" cy="2" r="2"></circle>
                        <circle id="Oval" fill={color} cx="48" cy="9" r="2"></circle>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default CustomLogoIcon;