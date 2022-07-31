import { useInView } from "react-intersection-observer";

export const MountOnFirstView: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  if (!inView)
    return (
      <div
        ref={ref}
        style={{
          width: 1,
          height: 1,
        }}
      />
    );

  return <div ref={ref}>{children}</div>;
};
