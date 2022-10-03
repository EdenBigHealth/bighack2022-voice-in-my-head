export default function handler(req, res) {
    const { avatar } = req.query
    res.sendFile(__dirname, `../../../avatars/${avatar}/${avatar}.mp3`);
    res.end(`Avatar: ${avatar}`);
  }