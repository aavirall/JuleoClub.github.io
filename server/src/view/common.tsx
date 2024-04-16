export interface RenderElementProps {
    left: React.ReactNode;
    right: React.ReactNode;
}

export const RenderElement: React.FC<RenderElementProps> = ({ left, right }) => {
    return (
        <div className="flex">
            <div className="pr-4">{left}</div>
            <div>{right}</div>
        </div>
    );
};
