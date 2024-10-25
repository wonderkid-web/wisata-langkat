import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function ContainerAdmin({ children }: Props) {
  return (
    <div className="bg-white min-h-[95vh] max-h-[80vh] sm:min-h-[95vh] sm:max-h-[95vh] overflow-auto">
      {children}
    </div>
  );
}

export default ContainerAdmin;
