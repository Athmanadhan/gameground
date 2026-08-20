import './Button.css';

function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  onClick,
  ...props
}) {
  const buttonClasses = [
    'gg-button',
    `gg-button--${variant}`,
    `gg-button--${size}`,
icon && !children ? 'gg-button--icon' : '',
    fullWidth ? 'gg-button--full' : '',
    loading ? 'gg-button--loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <>
          <span className="gg-button__spinner" />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <span className="gg-button__icon">{icon}</span>
          )}

          <span className="gg-button__text">{children}</span>

          {icon && iconPosition === 'right' && (
            <span className="gg-button__icon">{icon}</span>
          )}
        </>
      )}
    </button>
  );
}

export default Button;