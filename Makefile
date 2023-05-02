all: start

# Dev
run_dev:
	docker-compose -f docker-compose.dev.yml up -d
build_dev:
	docker-compose -f docker-compose.dev.yml build
dev:
	make build_dev
	make run_dev
stop_dev: 
	docker-compose -f docker-compose.dev.yml stop

# Production

run:
	docker-compose up -d
build: 
	docker-compose build
start:
	make build
	make run
stop:
	docker-compose stop 

#####################################################

down:
	docker-compose down
	docker-compose -f docker-compose.dev.yml down

	