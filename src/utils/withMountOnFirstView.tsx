import { MountOnFirstView } from "@components/mount-on-first-view";

export function withMountOnFirstView<P>(Component: React.FC<P>): React.FC<P> {
  const DecoratedComponent: React.FC<P> = (props: P) => (
    <MountOnFirstView>
      <Component {...props} />
    </MountOnFirstView>
  );

  DecoratedComponent.displayName = Component.displayName + "MountOnFirstView";

  return DecoratedComponent;
}
