import Image from "next/image";

export default async function Home() {
  const response = await fetch("https://api.github.com/users/guilherme-ribeiro27")
  const user = await response.json()
  return (
    <div>
      <h1 className="bg-red-400 dark:bg-">Home</h1>
      <p>
        {JSON.stringify(user, null, 2)}
      </p>
      <div className="w-40 h-40 bg-background dark:bg-dark-background">
        <div className="w-20 h-40 bg-container dark:bg-dark-container"></div>
      </div>
    </div>
  );
}
