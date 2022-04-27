PROJECT_NAME=$(shell cat package.json | grep name -m 1 | awk 'END {print $$NF}' | sed 's/[",]//g')
RELEASE_CONTAINER_NAME=${PROJECT_NAME}
RELEASE_IMAGE_NAME=${PROJECT_NAME}
PACKAGE_VERSION=$(shell cat package.json | grep version -m 1| awk 'END {print $$NF}' | sed 's/[",]//g')
RELEASE_NAME_TAG=${RELEASE_IMAGE_NAME}:${PACKAGE_VERSION}

YESTERDAY_DATE=$(shell date --date "yesterday" -I)

build:
	docker buildx build -t ${RELEASE_NAME_TAG} -t ${RELEASE_IMAGE_NAME}:latest .

