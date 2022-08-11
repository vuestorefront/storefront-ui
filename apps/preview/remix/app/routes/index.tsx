import Button from './../output/blocks/Button.lite';

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1 className="text-6xl font-bold text-white text-center mt-28">Welcome to Remix</h1>
      <div className="flex">
        <Button text="test button" />
      </div>
    </div>
  );
}
