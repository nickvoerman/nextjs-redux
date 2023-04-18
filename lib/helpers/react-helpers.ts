export const createClassName = (props: { className?: string }, classToAdd: string) => {
    return classToAdd + (props.className ? " " + props.className : "");
}