ui-build:
	docker build -t qld-prez-builder -f builder.Dockerfile .

ui-output:
	docker run --rm --name qld-prez-builder -e VITE_ENABLED_PREZS=SpacePrez,VocPrez -e VITE_API_BASE_URL=http://localhost:8000 -v ${PWD}/dist:/app/dist qld-prez-builder npm run build-only

ui-view:
	docker run --rm -it --name qld-prez-ui -v ${PWD}/dist:/app -v ${PWD}/entrypoint.sh:/entrypoint.sh --entrypoint='./entrypoint.sh' -p 8000:8000 python:3-alpine

ui-all:
	make build
	make output
	make view

stack-pull:
	docker-compose --profile stack pull

stack-build:
	docker-compose --profile ui build

stack-load:
	docker-compose --profile db up -d
	docker-compose run data-loader
	docker-compose --profile db down

stack-run:
	docker-compose --profile stack up -d

stack-down:
	docker-compose --profile stack down