task:
	@docker-compose up --build -d task
.PHONY: task

deploy:
	@docker stack deploy --compose-file docker-compose.yml task
.PHONY: task

log:
	@docker-compose logs -f task
.PHONY: log

run: task log
.PHONY: run