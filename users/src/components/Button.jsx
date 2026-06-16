export function Button({ title, children, className, onClick, action, type }) {
  const details = <>{title} {children}</>;
  const prevDetails =  <>{children} {title}</>;
  return (
    <button className={`${className || ""}`} onClick={onClick} type={type}>
      {action === "previous" ? prevDetails : details}
    </button>
  );
}
