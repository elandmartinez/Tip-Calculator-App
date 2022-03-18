import PersonIcon from "./IconComponents/PersonIcon.jsx";
import DollarIcon from "./IconComponents/DollarIcon.jsx";

const icons = {
    personIcon: PersonIcon,
    dollarIcon: DollarIcon
} 

const Icon = ({ name, className }) => {
    const IconComponent = icons[name];

    if(!IconComponent){
        let iconOptions = Object.keys(icons);
        throw new Error(`the icon ${name} isn't supported, please use one of these ${iconOptions}`)
    }
    return (
        <IconComponent className={className} />
    )
}

export default Icon;
