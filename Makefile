DOCKER_COMPOSE_FILE_OPTION=$(if $(APP_ENV),-f docker-compose-$(APP_ENV).yml)
DOCKER_COMPOSE_OPTIONS=$(DOCKER_COMPOSE_FILE_OPTION)
DOCKER_COMPOSE=docker-compose $(DOCKER_COMPOSE_OPTIONS)

DOCKER_COMPOSE_RUN_OPTIONS=--rm --service-ports
DOCKER_COMPOSE_BUILD_OPTIONS=

DOCKER_COMPOSE_RUN=$(DOCKER_COMPOSE) run $(DOCKER_COMPOSE_RUN_OPTIONS) web /bin/bash -c
DOCKER_COMPOSE_SHELL=$(DOCKER_COMPOSE) run $(DOCKER_COMPOSE_RUN_OPTIONS) web /bin/bash -s
DOCKER_COMPOSE_BUILD=$(DOCKER_COMPOSE) build $(DOCKER_COMPOSE_BUILD_OPTIONS)
DOCKER_COMPOSE_STOP=$(DOCKER_COMPOSE) stop

DEV_ENV=ENV=dev PATH=$(shell npm bin):$(PATH)

build_deps:
	npm install

run_dev_server:
	$(DEV_ENV) webpack-dev-server --progress --color --inline --hot --watch

build_dev_bundle: build_deps
	$(DEV_ENV) webpack --progress --color

flow:
	$(DEV_ENV) flow check

build_dist_bundle: build_deps
	webpack --progress --color --config webpack.dist.config.js


docker_start_dev:
	$(DOCKER_COMPOSE_RUN) "make build_deps run_dev_server"

docker_stop_dev:
	$(DOCKER_COMPOSE_STOP)

docker_start_dev_shell:
	$(DOCKER_COMPOSE_SHELL)

docker_flow_check:
	$(DOCKER_COMPOSE_RUN) "make flow"


docker_dev_bundle:
	$(DOCKER_COMPOSE_RUN) "make build_dev_bundle"

docker_bundle:
	$(DOCKER_COMPOSE_RUN) "make build_dist_bundle"

docker_dist: docker_bundle
	$(DOCKER_COMPOSE_RUN) "cp build/main.bundle.js public/main.bundle.js"


docker_build_image:
	$(DOCKER_COMPOSE_BUILD)

clean:
	rm -rf build public/main.bundle.js node_modules

.PHONY: build start_dev dev_bundle build_image
