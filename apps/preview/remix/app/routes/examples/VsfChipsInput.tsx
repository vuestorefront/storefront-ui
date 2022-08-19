import VsfChipsInput from "../../output/blocks/VsfChipsInput/VsfChipsInput.lite";

function Icon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-gray-500">
      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"></path>
    </svg>
  );
}

export default function ExampleVsfChipsInput() {
  return (
    <div className="m-4">
      <VsfChipsInput
        value={"Label"}
        handleChipClose={console.log}
        slotIcon={<Icon />}
      />
    </div>
  );
}
