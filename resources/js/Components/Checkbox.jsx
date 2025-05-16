export default function Checkbox({ className = "", ...props }) {
  return (
    <input
      {...props}
      type="checkbox"
      className={
        "rounded border-gray-300 bg-[#f8f9fa] text-[#165862] shadow-sm focus:ring-[#54cbddc5] " +
        className
      }
    />
  );
}
