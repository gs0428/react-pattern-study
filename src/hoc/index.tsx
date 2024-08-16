import WithLoader from "./WithLoader";

function DogImages({ message }: { message: string }) {
  return <div>{message}</div>;
}

export default function HOCPattern() {
  return WithLoader(DogImages);
}
