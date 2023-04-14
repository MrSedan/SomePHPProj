all: start

build_dev:
	docker-compose -f docker-compose.dev.yml build
build: 
	docker-compose build
dev:
	docker-compose -f docker-compose.dev.yml up -d
start:
	docker-compose up -d
stop:
	docker-compose stop 
stop_dev: 
	docker-compose -f docker-compose.dev.yml stop
down:
	docker-compose down
	docker-compose -f docker-compose.dev.yml down
	