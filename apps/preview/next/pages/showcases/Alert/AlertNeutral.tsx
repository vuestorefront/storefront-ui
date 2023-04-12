import { ShowcasePageLayout } from '../../showcases';
// #region source

export default function AlertNeutral() {
  return (
    <div
      role="alert"
      className="bg-neutral-100 max-w-[600px] shadow-md pr-2 pl-4 ring-1 ring-neutral-300 typography-text-sm md:typography-text-base py-1 rounded-md"
    >
      <p className="py-2">Happy shopping!</p>
    </div>
  );
}
// #endregion source
AlertNeutral.getLayout = ShowcasePageLayout;
