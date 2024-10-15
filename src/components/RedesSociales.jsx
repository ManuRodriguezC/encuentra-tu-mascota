export const RedesSociales = ({ href, label, Icon, iconClass }) => (
    <div className="mb-5 w-full flex justify-between items-center gap-5">
        <a href={href}>{label}</a>
        <Icon className={iconClass} />
    </div>
);