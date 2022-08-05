import Button from '~/output/blocks/Button.lite';

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <Button text="test button"/>
    </div>
  );
}
