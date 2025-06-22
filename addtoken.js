const password = "ghanz123";

function checkPassword() {
  const pw = document.getElementById("pw").value;
  if (pw === password) {
    document.getElementById("form").style.display = "block";
  } else {
    alert("Password salah!");
  }
}

async function submitToken() {
  const tokenInput = document.getElementById("token").value;

  const githubToken = "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";
  const repo = "ghanzakunbaru/payment";
  const path = "tokens.json";
  const apiUrl = `https://api.github.com/repos/${repo}/contents/${path}`;

  // ambil isi file lama
  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `token ${githubToken}`,
      Accept: "application/vnd.github+json"
    }
  });

  const data = await response.json();
  let contentList = [];

  if (data.content) {
    const old = atob(data.content);
    contentList = JSON.parse(old);
  }

  contentList.push(tokenInput);

  const updatedContent = btoa(JSON.stringify(contentList, null, 2));

  const updateRes = await fetch(apiUrl, {
    method: "PUT",
    headers: {
      Authorization: `token ${githubToken}`,
      Accept: "application/vnd.github+json"
    },
    body: JSON.stringify({
      message: "Add token",
      content: updatedContent,
      sha: data.sha
    })
  });

  if (updateRes.ok) {
    alert("Token berhasil ditambahkan!");
  } else {
    alert("Gagal menambahkan token.");
  }
}
