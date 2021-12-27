import './hello-world.module.css';

export interface HelloWorldProps {
  name: string;
}

export function HelloWorld({ name }: HelloWorldProps) {
  return (
    <>
      <h1>Hello {name}!</h1>
    </>
  );
}

export default HelloWorld;
