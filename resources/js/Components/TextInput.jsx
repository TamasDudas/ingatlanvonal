import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

export default forwardRef(function TextInput(
  { type = "text", className = "", isFocused = false, ...props },
  ref
) {
  const localRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => localRef.current?.focus(),
  }));

  useEffect(() => {
    if (isFocused) {
      localRef.current?.focus();
    }
  }, [isFocused]);

  return (
    <input
      {...props}
      type={type}
      className={
        "rounded-md border-gray-300 shadow-sm  focus:[#54cbddc5] bg-[#f8f9fa] text-[#165862] focus:border-[#54cbddc5] " +
        className
      }
      ref={localRef}
    />
  );
});
