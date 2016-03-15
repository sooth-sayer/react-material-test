DOCKER_COMPOSE_FILE_OPTION=$(if $(APP_ENV),-f docker-compose-$(APP_ENV).yml)
DOCKER_COMPOSE_OPTIONS=$(DOCKER_COMPOSE_FILE_OPTION)
DOCKER_COMPOSE=docker-compose $(DOCKER_COMPOSE_OPTIONS)

DOCKER_COMPOSE_RUN_OPTIONS=--rm --service-ports
DOCKER_COMPOSE_BUILD_OPTIONS=

DOCKER_COMPOSE_RUN=$(DOCKER_COMPOSE) run $(DOCKER_COMPOSE_RUN_OPTIONS) web /bin/bash -c
DOCKER_COMPOSE_SHELL=$(DOCKER_COMPOSE) run $(DOCKER_COMPOSE_RUN_OPTIONS) web /bin/bash -s
DOCKER_COMPOSE_BUILD=$(DOCKER_COMPOSE) build $(DOCKER_COMPOSE_BUILD_OPTIONS)
DOCKER_COMPOSE_STOP=$(DOCKER_COMPOSE) stop

build_deps:
	npm install

run_dev_server: build_deps
	webpack-dev-server --progress --color --inline --hot

build_dev_bundle: build_deps
	webpack --progress --color

build_dist_bundle: build_deps
	webpack --progress --color --config webpack.dist.config.js


start_dev:
	$(DOCKER_COMPOSE_RUN) "make run_dev_server"

stop_dev:
	$(DOCKER_COMPOSE_STOP)

start_dev_shell:
	$(DOCKER_COMPOSE_SHELL)

dev_bundle:
	$(DOCKER_COMPOSE_RUN) "make build_dev_bundle"

bundle:
	$(DOCKER_COMPOSE_RUN) "make build_dist_bundle"

dist: bundle
	$(DOCKER_COMPOSE_RUN) "cp build/main.bundle.js public/main.bundle.js"


build_image:
	$(DOCKER_COMPOSE_BUILD)

clean:
	rm -rf build public/main.bundle.js node_modules

.PHONY: build start_dev dev_bundle build_image
