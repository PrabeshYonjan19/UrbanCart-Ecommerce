export default function Toast({ message }) {
  if (!message) {
    return null;
  }

  return (
    <div className="toast-notice">
      <i className="bi bi-check-circle-fill"></i>
      {message}
    </div>
  );
}