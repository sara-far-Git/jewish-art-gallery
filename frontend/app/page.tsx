async function getPaintings() {
  const res = await fetch("http://127.0.0.1:8000/api/paintings/", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Home() {
  const paintings = await getPaintings();

  return (
    <main style={{ padding: "40px" }}>
      <h1>Jewish Art Gallery</h1>

      <div style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
        {paintings.map((painting: any) => (
          <div key={painting.id} style={{ border: "1px solid #ccc", padding: "20px" }}>
            <h2>{painting.title}</h2>
            <img src={painting.image} style={{ width: "300px", marginTop: "10px" }} />
          </div>
        ))}
      </div>
    </main>
  );
}
