import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    // 1. process.cwd()를 사용해 프로젝트 루트 폴더를 기준으로 경로를 잡습니다.
    const dataPath = path.join(process.cwd(), 'data', 'courses.json');
    
    // 2. 파일을 읽어옵니다.
    const fileContents = fs.readFileSync(dataPath, 'utf8');
    const data = JSON.parse(fileContents);

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to load courses' });
  }
}
