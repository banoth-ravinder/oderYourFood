import { Frame1, Frame2, Frame3 } from './components';

import { LayoutStyle } from './styles';
import { useZenportEats } from './hooks/useZenportEats';

const ZenportEats = () => {
  const { page, setPage } = useZenportEats();

  return (
    <LayoutStyle>
      {page === 1 && <Frame1 />}
      {page === 2 && <Frame2 />}
      {page === 3 && <Frame3 />}
    </LayoutStyle>
  );
};

export default ZenportEats;
