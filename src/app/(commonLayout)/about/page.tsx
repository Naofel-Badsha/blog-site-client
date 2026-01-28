export const daynamic = "force-daynamic"

export default async function AboutPage() {
  await new Promise((resolve) => setTimeout(resolve, 4000));

  throw new Error("SomeThing went Worong")
  return (
    <div>
      <h1>This is about page component</h1>
    </div>
  );
}
