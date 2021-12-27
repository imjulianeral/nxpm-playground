import './hello-world.module.css';

export interface HelloWorldProps {
  name: string;
}

export function HelloWorld({ name }: HelloWorldProps) {
  return (
    <div>
      <h1>Hello {name}!</h1>
    </div>
  );
}

export default HelloWorld;
