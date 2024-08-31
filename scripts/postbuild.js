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

// 스크립트 경로 수정
indexContent = indexContent.replace(
  'src="/_expo/',
  'src="/all-taxi-app/_expo/'
);

fs.writeFileSync(indexPath, indexContent);
