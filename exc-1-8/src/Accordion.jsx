import { useState } from 'react';
import Panel from './Panel';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="accordion">
      <Panel
        title="Panel A"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(activeIndex === 0 ? -1 : 0)}
      >
        <p>Nội dung A</p>
      </Panel>

      <Panel
        title="Panel B"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(activeIndex === 1 ? -1 : 1)}
      >
        <p>Nội dung B</p>
      </Panel>
    </div>
  );
}
