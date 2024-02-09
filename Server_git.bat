@echo off

chcp 65001

git add .

git commit -m"Server_Archive_%DATE% %TIME%"

git branch -M main

git pull origin main

git push -u origin main

echo 上傳成功