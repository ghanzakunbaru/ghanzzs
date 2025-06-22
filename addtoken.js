export default async function handler(req, res) {
  const { token } = req.body;

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const GITHUB_OWNER = "ghanzakunbaru";
  const GITHUB_REPO = "payment";
  const GITHUB_FILE_PATH = "tokens.json";

  const apiUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${GITHUB_FILE_PATH}`;
  const headers = {
    Authorization: `token ${GITHUB_TOKEN}`,
    Accept: "application/vnd.github+json",
  };

  try {
    const getRes = await fetch(apiUrl, { headers });
    const fileData = await getRes.json();

    let tokenList = [];
    if (fileData.content) {
      const oldContent = Buffer.from(fileData.content, "base64").toString();
      tokenList = JSON.parse(oldContent);
    }

    tokenList.push(token);

    const newContent = Buffer.from(JSON.stringify(tokenList, null, 2)).toString("base64");

    await fetch(apiUrl, {
      method: "PUT",
      headers,
      body: JSON.stringify({
        message: `Add token`,
        content: newContent,
        sha: fileData.sha,
      }),
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
}
