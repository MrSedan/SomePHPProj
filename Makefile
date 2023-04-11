dev:
	docker-compose -f docker-compose.dev.yml up nginx app
down:
	docker-compose down
build_dev:
	docker-compose -f docker-compose.dev.yml build nginx app
start:
	docker-compose up
build: 
	docker-compose build