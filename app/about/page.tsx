import { TodoDataType } from '~/types';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const About = async () => {
  const data: TodoDataType[] = await getData();

  return (
    <div>
      {data.map((el) => (
        <p key={el.id}> {el.title}</p>
      ))}
    </div>
  );
};

export default About;
