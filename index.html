import { useState } from "react";

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);

  const handlePassword = (e) => {
    e.preventDefault();
    const pass = e.target.password.value;

    if (pass === "ghanz123") {
      setUnlocked(true);
    } else {
      alert("Password salah!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = e.target.token.value;

    const res = await fetch("/api/addtoken", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });

    const json = await res.json();
    alert(json.success ? "Token berhasil ditambahkan!" : "Gagal menambahkan token.");
    e.target.reset();
  };

  return (
    <main style={{ padding: 20 }}>
      {!unlocked ? (
        <form onSubmit={handlePassword}>
          <h2>Masukkan Password</h2>
          <input type="password" name="password" required placeholder="Password..." />
          <button type="submit">Masuk</button>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Tambah Token ke GitHub</h2>
          <input type="text" name="token" required placeholder="Masukkan token..." />
          <button type="submit">Simpan</button>
        </form>
      )}
    </main>
  );
}
