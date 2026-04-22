# 1. Создай ветку для новой фичи

git checkout -b feature/block-N-name

# 2. Пиши код, коммить атомарно

git add .
git commit -m "feat(block-N): описание изменения"

# 3. Запушь и создай PR (или сразу мердж, если работаешь один)

git push -u origin feature/block-N-name

# 4. После проверки — слей в main

git checkout main
git merge feature/block-N-name
git push

# 5. (Опционально) Удали ветку

git branch -d feature/block-N-name
git push origin --delete feature/block-N-name
