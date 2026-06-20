import SplitType from 'split-type';

type SplitTypeValue = InstanceType<typeof SplitType>;
const instances: SplitTypeValue[] = [];

export async function initSplits(): Promise<void> {
  await document.fonts.ready;

  document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
    const type = el.dataset.split as 'chars' | 'words' | 'lines';
    const instance = new SplitType(el, { types: type, tagName: 'span' });
    instances.push(instance);
  });
}

export function revertSplits(): void {
  instances.forEach((i) => i.revert());
  instances.length = 0;
}
