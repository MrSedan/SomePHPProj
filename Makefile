dev:
	docker-compose -f docker-compose.dev.yml up
down:
	docker-compose down
build_dev:
	docker-compose -f docker-compose.dev.yml build
start:
	docker-compose up
build: 
	docker-compose build

