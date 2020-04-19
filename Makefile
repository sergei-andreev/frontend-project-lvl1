install:
	npm install

start:
	node bin/brain-games.js

start-even:
	node bin/brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
