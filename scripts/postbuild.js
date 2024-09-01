const fs = require("fs");
const path = require("path");

const indexPath = path.join(__dirname, "..", "dist", "index.html");
let indexContent = fs.readFileSync(indexPath, "utf8");

// base 태그 추가
if (!indexContent.includes('<base href="/all-taxi-app/">')) {
  indexContent = indexContent.replace(
    "<head>",
    '<head>\n    <base href="/all-taxi-app/">'
  );
}

// 스크립트 및 에셋 경로 수정
indexContent = indexContent.replace(/src="\//g, 'src="/all-taxi-app/');
indexContent = indexContent.replace(/href="\//g, 'href="/all-taxi-app/');

fs.writeFileSync(indexPath, indexContent);

// 폰트 파일 경로 수정
const assetsPath = path.join(__dirname, "..", "dist");
function processDirectory(directory) {
  fs.readdirSync(directory, { withFileTypes: true }).forEach((dirent) => {
    const fullPath = path.join(directory, dirent.name);
    if (dirent.isDirectory()) {
      processDirectory(fullPath);
    } else if (
      dirent.isFile() &&
      (dirent.name.endsWith(".js") || dirent.name.endsWith(".css"))
    ) {
      try {
        let content = fs.readFileSync(fullPath, "utf8");
        content = content.replace(/\/assets\//g, "/all-taxi-app/assets/");
        content = content.replace(
          /\/src\/all-taxi-app\/assets\//g,
          "/src/assets/"
        );

        // 중복 경로가 생성되지 않도록 확인
        content = content.replace(
          /\/all-taxi-app\/all-taxi-app\//g,
          "/all-taxi-app/"
        );
        fs.writeFileSync(fullPath, content);
      } catch (err) {
        console.error(`Error processing file ${fullPath}:`, err);
      }
    }
  });
}

processDirectory(assetsPath);
